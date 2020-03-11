import React, { Component} from 'react';
import { Button } from 'reactstrap';
import { MDBDataTable } from 'mdbreact';
import Pdates from '../Employees/pdates';
import { Link} from 'react-router-dom';

class Admin extends Component {

  constructor(props) {
  super(props)
  this.clickHandler = () => {
    //this.props.onClick();
    alert("Great Shot!");
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
        label: 'Full Name',
        field: 'name',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Project Name',
        field: 'pname',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Skills',
        field: 'skills',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Total Logs(in Hr)',
        field: 'logs',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Update',
        field: 'edit',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Delete',
        field: 'delete',
        sort: 'asc',
        width: 150
      },

     
      
    ],
    rows: [
      {
        srno:'1',
        name: 'Pragati Gaikwad',
        pname: 'Project Management',
        logs: '25',
        skills: 'HTML, CSS, ReactJS',
        edit: <Link to="/edit/employee" className="nav-link"><Button className="edit_button"><i className="nav-icon icon-pencil"></i>  Edit</Button></Link>,
        delete: <Button className= "deactive_button" onClick={this.clickHandler}><i className="nav-icon icon-trash"></i>  Delete</Button>
      },
       {
        srno:'2',
        name: 'Rajesh Darak',
        pname: 'Project Management',
        logs: '35',
        skills: 'Ajax, CSS, HTML',
        edit: <Link to="/edit/employee" className="nav-link"><Button className="edit_button"><i className="nav-icon icon-pencil"></i>  Edit</Button></Link>,
        delete: <Button className= "deactive_button" onClick={this.clickHandler}><i className="nav-icon icon-trash"></i>  Delete</Button>
      },
      {
        srno:'3',
        name: 'Pragati Gaikwad',
        pname: 'Project Management',
        logs: '25',
        skills: 'HTML, CSS, ReactJS',
        edit: <Link to="/edit/employee" className="nav-link"><Button className="edit_button"><i className="nav-icon icon-pencil"></i>  Edit</Button></Link>,
        delete: <Button className= "deactive_button" onClick={this.clickHandler}><i className="nav-icon icon-trash"></i>  Delete</Button>
      },
       {
        srno:'4',
        name: 'Rajesh Darak',
        pname: 'Project Management',
        logs: '35',
        skills: 'Ajax, CSS, HTML',
        edit: <Link to="/edit/employee" className="nav-link"><Button className="edit_button"><i className="nav-icon icon-pencil"></i>  Edit</Button></Link>,
        delete: <Button className= "deactive_button" onClick={this.clickHandler}><i className="nav-icon icon-trash"></i>  Delete</Button>
      },
      {
        srno:'5',
        name: 'Pragati Gaikwad',
        pname: 'Project Management',
        logs: '25',
        skills: 'HTML, CSS, ReactJS',
        edit: <Link to="/edit/employee" className="nav-link"><Button className="edit_button"><i className="nav-icon icon-pencil"></i>  Edit</Button></Link>,
        delete: <Button className= "deactive_button" onClick={this.clickHandler}><i className="nav-icon icon-trash"></i>  Delete</Button>
      },
       {
        srno:'6',
        name: 'Rajesh Darak',
        pname: 'Project Management',
        logs: '35',
        skills: 'Ajax, CSS, HTML',
        edit: <Link to="/edit/employee" className="nav-link"><Button className="edit_button"><i className="nav-icon icon-pencil"></i>  Edit</Button></Link>,
        delete: <Button className= "deactive_button" onClick={this.clickHandler}><i className="nav-icon icon-trash"></i>  Delete</Button>
      },
      
     
      
    ]
  };

  }

  

  render() {
    return[ 
      <Pdates/>,
      <MDBDataTable
      striped
      hover
      data={this.data}
    />
    ];
  }
}



export default Admin;

