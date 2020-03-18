import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import store from "../../store/project";
import { CLOSE_FORM } from "../../constants/action-types";
import { ADD_LIST } from "../../constants/action-types";
import {Col,Form,FormGroup,Input} from 'reactstrap';

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
  handleChangeProjectName= name => event => {
    this.setState({
      title:event.target.value
    });
  };

  handleChangeProjectManager= name => event => {
    this.setState({
      projectManager: event.target.value
    });
  };


  handleChangeStartDate = name => event => {
    this.setState({
      startDate: event.target.value
    });
  };

  handleChangeEndDate = name => event => {
    this.setState({
      endDate: event.target.value
    });
  };

  handleSaveEmployee = () => {
    store.dispatch({
      type: ADD_LIST,
      payload: {
      title: this.state.title,
      projectManager:this.state.projectManager,
      id: store.getState()["lists"].length,
      startDate: this.state.startDate,
      endDate: this.state.endDate,
        
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

          <h1>Upload the File Save All The</h1>
              <h2>Project Details</h2>
                <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">

                  <FormGroup row className="center">
                    <Col xs="12" md="12" >
                      <Input className="center-block " type="file" id="file-input" name="file-input" />
                    </Col>
                  </FormGroup>
                  </Form>
                  <h2>OR</h2>
            <form >
                  <label for="username">Project Name:</label>
                  <input type="text" class="form-control" id="name" placeholder="Enter Name" name="name" required onChange={this.handleChangeProjectName("multiline")}/>               
                  
                  <label for="pname">Project Manager:</label>
                  <input type="text" class="form-control" id="pname" placeholder="Enter Project" name="pname" required onChange={this.handleChangeProjectManager("multiline")}/>                
                  
                  <label for="satrtDate">Start Date:</label>
                  <input type="date" class="form-control" id="satrtDate" placeholder="Enter Start Date" name="satrtDate" required onChange={this.handleChangeStartDate("multiline")}/>                

                  <label for="endDate">End Date:</label>
                  <input type="date" class="form-control" id="endDate" placeholder="Enter End Date" name="endDate" required onChange={this.handleChangeEndDate("multiline")}/>                
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

