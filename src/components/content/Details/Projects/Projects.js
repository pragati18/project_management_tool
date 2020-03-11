import React, { Component} from 'react';
import "react-datepicker/dist/react-datepicker.css";
import { Button } from 'reactstrap';
import { MDBDataTable } from 'mdbreact';
import Fdates from './Fdates';
import { Link} from 'react-router-dom';

class Projects extends Component {

  constructor(props) {
  super(props)
  this.clickHandler = () => {
    //this.props.onClick();
    alert("Great Shot!");
  }

  this.editclickHandler = () => {
    //this.props.onClick();
   }

  this.data = {
    columns: [
      {
        label: 'Sr.No',
        field: 'srno',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Project Name',
        field: 'name',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Start Date',
        field: 'start_date',
        sort: 'asc',
        width: 150
      },
      {
        label: 'End Date',
        field: 'end_date',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Project Manager Name',
        field: 'pname',
        sort: 'asc',
        width: 100
      },
    
      {
        label: 'View',
        field: 'view',
        sort: 'asc',
        width: 150
      },

      {
        label: 'Update',
        field: 'edit',
        sort: 'asc',
        width: 150
      },

      {
        label: 'Status',
        field: 'deactive',
        sort: 'asc',
        width: 150
      },

     
      
    ],
    rows: [
      {
        srno:'1',
        name: 'Tapclicks',
        start_date: '1st Jan 2020',
        end_date: '28th Feb 2020',
        pname: 'Rajesh',
        view: <Button className= "view_button" onClick={this.clickHandler}><i className="nav-icon icon-eye"></i>  View</Button>,
        edit: <Link to="/edit/project" className="nav-link"><Button className="edit_button"><i className="nav-icon icon-pencil"></i>  Edit</Button></Link>,
        deactive: <Button  className= "deactive_button" onClick={this.clickHandler}><i className="nav-icon icon-trash"></i>  Active</Button>
      },
       {
        srno:'2',
        name: 'Tapclicks Order',
        start_date: '1st Jan 2020',
        end_date: '28th Feb 2020',
        pname: 'Pragati',
        view: <Button className= "view_button" onClick={this.clickHandler}><i className="nav-icon icon-eye"></i>  View</Button>,
        edit: <Link to="/edit/project" className="nav-link"><Button className="edit_button"><i className="nav-icon icon-pencil"></i>  Edit</Button></Link>,
        deactive: <Button className= "deactive_button" onClick={this.clickHandler}><i className="nav-icon icon-trash"></i>  Deactive</Button>
      },
       {
         srno:'3',
        name: 'Tiger Nixon',
        start_date: '1st Jan 2020',
        end_date: '28th Feb 2020',
        pname: 'Pragati',
        view: <Button className= "view_button" onClick={this.clickHandler}><i className="nav-icon icon-eye"></i>  View</Button>,
        edit: <Link to="/edit/project" className="nav-link"><Button className="edit_button"><i className="nav-icon icon-pencil"></i>  Edit</Button></Link>,
        deactive: <Button  className= "deactive_button" onClick={this.clickHandler}><i className="nav-icon icon-trash"></i>  Active</Button>
      },
      
    ]
  };

  }

  

  render() {
    return [
      <Fdates />,
      <MDBDataTable
      striped
      hover
      data={this.data}
    />

    
    ];
  }
}



export default Projects;

