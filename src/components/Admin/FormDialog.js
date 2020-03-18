import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import store from "../../store/admin";
import { CLOSE_FORM } from "../../constants/action-types";
import { ADD_LIST } from "../../constants/action-types";
import {Col,Form,FormGroup,Input} from 'reactstrap';
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

  handleChangeUsername = name => event => {
    this.setState({
      username: event.target.value
    });
  };

  handleChangePassword = name => event => {
    this.setState({
      password: event.target.value
    });
  };

  handleChangeRole = name => event => {
    this.setState({
      role:event.target.value
    });
  };

  handleChangeEmail= name => event => {
    this.setState({
      email:event.target.value
    });
  };

  handleChangePname= name => event => {
    this.setState({
      project:event.target.value
    });
  };

  handleSave = () => {
    store.dispatch({
      type: ADD_LIST,
      payload: {
        title: this.state.title,
        id: store.getState()["lists"].length,
        date: new Date().toLocaleDateString(),
        email:this.state.email,
        role:this.state.role,
        
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
          <DialogTitle id="form-dialog-title">Add Users</DialogTitle>
          <DialogContent>
          <h1>Upload the File Save All The</h1>
              <h2>User Details</h2>
                <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">

                  <FormGroup row className="center">
                    <Col xs="12" md="12" >
                      <Input className="center-block " type="file" id="file-input" name="file-input" />
                    </Col>
                  </FormGroup>
                  </Form>
                  <h2>OR</h2>
            <form >
                  <label for="username">Username:</label>
                  <input type="text" class="form-control" id="username" placeholder="Enter Username" name="username" required onChange={this.handleChangeUsername("multiline")}/>                
                  
                  <label for="fname">Name:</label>
                  <input type="text" class="form-control" id="name" placeholder="Enter Name" name="fname" required onChange={this.handleChangeName("multiline")}/>                
                  
                  <label for="email">Email:</label>
                  <input type="email" class="form-control" id="email" placeholder="Enter email" name="email" required onChange={this.handleChangeEmail("multiline")}/>                
                  
                  <label for="pwd">Password:</label>
                  <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pwd" required onChange={this.handleChangePassword("multiline")}/>
                  
                  <label for="sel1">Select Role:</label>
                  <select class="form-control" id="role" name = "role" onChange={this.handleChangeRole("multiline")}>
                    <option>Admin</option>
                    <option>SuperAdmin</option>
                    <option>Project Manager</option>
                    <option>Employee</option>
                  </select>

                  <label for="pwd">Project Name:</label>
                  <input type="text" class="form-control" multiline rows="1" id="pname" placeholder="Enter Project Name" name="pname" onChange={this.handleChangePname("multiline")}/>                
            </form>     
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

