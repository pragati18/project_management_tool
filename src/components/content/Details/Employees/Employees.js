import React, { Component } from "react";
import ListComponent from "../../../Employee/ListComponent";
import FormDialog from "../../../Employee/FormDialog";
import EditDialog from "../../../Employee/EditDialog";
import SimpleAppBar from "../../../Employee/SimpleAppBar";
import { OPEN_FORM } from "../../../../constants/action-types";
import store from "../../../../store/employee";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import Pdates from "./pdates";
window.store = store;

class Employees extends Component {
  openDialog = () => {
    store.dispatch({
      type: OPEN_FORM
    });
  };

  render() {
    return (
      <div>
      <Pdates/>
        <SimpleAppBar />
        
        <ListComponent />

        <FormDialog />
        <EditDialog />

        <Button
          variant="fab"
          style={{
            position: "absolute",
            bottom: 10,
            right: 10
          }}
          onClick={this.openDialog}
          color="secondary"
        >
          <AddIcon />
        </Button>
      </div>
    );
  }
}

export default Employees;

