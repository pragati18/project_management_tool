import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import store from "../../store/employee";
import { CLOSE_EDIT_FORM } from "../../constants/action-types";
import { UPDATE_LIST } from "../../constants/action-types";
window.store = store;

export default class FormDialog extends React.Component {
  state = {
    open: false,
    list: {
      title: "",
      projectName:"",
      id: 1,
      skills: "",
      totalLogs: ""
    }
  };

  handleClose = () => {
    store.dispatch({
      type: CLOSE_EDIT_FORM
    });
  };

  handleChangeTitle = name => event => {
    this.setState({
      newTitle: event.target.value
    });
  };
  handleChangeProjectName = name => event => {
    this.setState({
      newProjectName: event.target.value
    });
  };
  handleChangeSkills = name => event => {
    this.setState({
      newSkills: event.target.value
    });
  };
  handleChangeTotalLogs = name => event => {
    this.setState({
      newTotalLogs: event.target.value    
    });
  };

  handleSave = () => {
    store.dispatch({
      type: UPDATE_LIST,
      payload: {
        title: this.state.newTitle ? this.state.newTitle : this.state.list.title,
        id: this.state.list.id,
        projectName: this.state.newProjectName ? this.state.newProjectName : this.state.list.projectName,
        skills: this.state.newSkills ? this.state.newSkills : this.state.list.skills,
        totalLogs:this.state.newTotalLogs ? this.state.newTotalLogs : this.state.list.totalLogs,
      }
    });

    store.dispatch({
      type: CLOSE_EDIT_FORM
    });
  };

  componentDidMount() {
    this.setState({
      open: store.getState()["uiState"]["openEditDialog"],
      list: store.getState()["uiState"]["listToEdit"]
    });

    store.subscribe(() => {
      this.setState({
        open: store.getState()["uiState"]["openEditDialog"],
        list: store.getState()["uiState"]["listToEdit"]
      });
    });
  }

  render() {
    return (
      <div>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Update List</DialogTitle>
          <DialogContent>
            <DialogContentText>Please Update List.</DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Title"
              multiline
              defaultValue={this.state.list.title}
              rowsMax="4"
              rows="1"
              fullWidth
              onChange={this.handleChangeTitle("multiline")}
            />
            <TextField
              autoFocus
              margin="dense"
              id="projectName"
              label="Project Name"
              multiline
              defaultValue={this.state.list.projectName}
              rowsMax="4"
              rows="1"
              fullWidth
              onChange={this.handleChangeProjectName("multiline")}
            />
            <TextField
              autoFocus
              margin="dense"
              id="skills"
              label="Skills"
              multiline
              defaultValue={this.state.list.skills}
              rowsMax="4"
              rows="1"
              fullWidth
              onChange={this.handleChangeSkills("multiline")}
            />
            <TextField
              autoFocus
              margin="dense"
              id="projectName"
              label="Project Name"
              multiline
              defaultValue={this.state.list.totalLogs}
              rowsMax="4"
              rows="1"
              fullWidth
              onChange={this.handleChangeTotalLogs("multiline")}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleSave} color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

