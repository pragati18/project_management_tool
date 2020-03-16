import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import store from "../store/index";
import { CLOSE_EDIT_FORM } from "../constants/action-types";
import { UPDATE_LIST } from "../constants/action-types";
window.store = store;

export default class FormDialog extends React.Component {
  state = {
    open: false,
    list: {
      title: "",
      id: 0,
      role: "",
      date: ""
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

  handleChangeRole = name => event => {
    this.setState({
      newRole: event.target.value    
    });
  };

  handleSave = () => {
    store.dispatch({
      type: UPDATE_LIST,
      payload: {
        title: this.state.newTitle ? this.state.newTitle : this.state.list.title,
        id: this.state.list.id,
        role: this.state.newRole ? this.state.newRole : this.state.list.role,
        date: this.state.list.date
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
              rows="4"
              fullWidth
              onChange={this.handleChangeTitle("multiline")}
            />
            <TextField
              autoFocus
              margin="dense"
              id="role"
              label="Role"
              multiline
              defaultValue={this.state.list.role}
              rowsMax="4"
              rows="4"
              fullWidth
              onChange={this.handleChangeRole("multiline")}
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

