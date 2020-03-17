import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import store from "../../store/project";
import { CLOSE_EDIT_FORM } from "../../constants/action-types";
import { UPDATE_LIST } from "../../constants/action-types";
window.store = store;

export default class FormDialog extends React.Component {
  state = {
    open: false,
    list: {
      title: "",
      projectManager:"",
      startDate:"",
      endDate:"",
      id: 0
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
  handleChangeProjectManager = name => event => {
    this.setState({
      newProjectManager: event.target.value
    });
  };
  handleChangeStartDate = name => event => {
    this.setState({
      newStartDate: event.target.value
    });
  };
  handleChangeEndDate = name => event => {
    this.setState({
      newEndDate: event.target.value    
    });
  };

  handleSave = () => {
    store.dispatch({
      type: UPDATE_LIST,
      payload: {
        title: this.state.newTitle ? this.state.newTitle : this.state.list.title,
        id: this.state.list.id,
        projectManager: this.state.newProjectManager ? this.state.newProjectManager : this.state.list.projectManager,
        startDate: this.state.newStartDate ? this.state.newStartDate : this.state.list.startDate,
        endDate:this.state.newEndDate ? this.state.newEndDate : this.state.list.endDate,
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
              id="projectManager"
              label="Project Project"
              multiline
              defaultValue={this.state.list.projectManager}
              rowsMax="4"
              rows="1"
              fullWidth
              onChange={this.handleChangeProjectManager("multiline")}
            />
            <TextField
              autoFocus
              margin="dense"
              id="startDate"
              label="Start Date"
              multiline
              defaultValue={this.state.list.startDate}
              rowsMax="4"
              rows="1"
              fullWidth
              onChange={this.handleChangeStartDate("multiline")}
            />
            <TextField
              autoFocus
              margin="dense"
              id="endDate"
              label="End Date"
              multiline
              defaultValue={this.state.list.endDate}
              rowsMax="4"
              rows="1"
              fullWidth
              onChange={this.handleChangeEndDate("multiline")}
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

