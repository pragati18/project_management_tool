import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import store from "../../store/employee";
import { CLOSE_FORM } from "../../constants/action-types";
import { ADD_LIST } from "../../constants/action-types";
//import TagsInput from "./TagsInput";
window.store = store;

export default class FormDialog extends React.Component {
  state = {
    open: false,
    list: ""
  };

  handleClose = () => {
    store.dispatch({
      type: CLOSE_FORM,
      payload: {
        openFormDialog: false
      }
    });
  };

  handleChangeName = name => event => {
    this.setState({
      title: event.target.value
    });
  };

  handleChangeProjectName= name => event => {
    this.setState({
      projectName:event.target.value
    });
  };

  handleChangeSkills = name => event => {
    this.setState({
      skills: event.target.value
    });
  };

  handleChangeTotalLogs = name => event => {
    this.setState({
      totalLogs: event.target.value
    });
  }; 

  handleSaveEmployee = () => {
    store.dispatch({
      type: ADD_LIST,
      payload: {
      title: this.state.title,
      projectName:this.state.projectName,
      id: store.getState()["lists"].length,
      skills: this.state.skills,
      totalLogs: this.state.totalLogs,
        
      }
    });

    store.dispatch({
      type: CLOSE_FORM
    });
  };

  componentDidMount() {
    this.setState({
      open: store.getState()["uiState"]["openFormDialog"]
    });

    store.subscribe(() => {
  
      this.setState({
        open: store.getState()["uiState"]["openFormDialog"]
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
          <DialogTitle id="form-dialog-title">Add Employee</DialogTitle>
          <DialogContent>
            <form >
                  <label for="username">Name:</label>
                  <input type="text" class="form-control" id="name" placeholder="Enter Name" name="name" required onChange={this.handleChangeName("multiline")}/>               
                  
                  <label for="fname">Project Name:</label>
                  <input type="text" class="form-control" id="pname" placeholder="Enter Project" name="pname" required onChange={this.handleChangeProjectName("multiline")}/>                
                  
                  <label for="fname">Skills:</label>
                  <input type="text" class="form-control" id="skills" placeholder="Enter Skills sperated by ," name="skills" required onChange={this.handleChangeSkills("multiline")}/>                

                  <label for="fname">Log Time:</label>
                  <input type="text" class="form-control" id="totalLogs" placeholder="Enter Log Time" name="totalLogs" required onChange={this.handleChangeTotalLogs("multiline")}/>                
            </form>     
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleSaveEmployee} color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

