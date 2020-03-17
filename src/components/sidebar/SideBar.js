import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHome, faBriefcase,faImage, faCopy, faTimes} from "@fortawesome/free-solid-svg-icons";
import SubMenu from "./SubMenu";
import { Nav, Button } from "react-bootstrap";
import classNames from "classnames";
import {Router, NavLink } from 'react-router-dom';
import history from "../../services/history";
import logo from "../../logo.png";

class SideBar extends React.Component {
  render() {
    return (
      <div className={classNames("sidebar", { "is-open": this.props.isOpen })}>
        <div className="sidebar-header">
          <Button variant="link" onClick={this.props.toggle} style={{ color: "#fff" }} className="mt-4">
            <FontAwesomeIcon icon={faTimes} pull="right" size="xs" />
          </Button>
          <img className="img_logo" src = {logo} alt="Project Management " />
       </div>
       <Router history = {history}>
        <Nav className="flex-column pt-2">
         
          <NavLink to="/dashboard" activeStyle={{background: "#1985ac"}}>
            <Nav.Item className="mr-2-padding" >
              <FontAwesomeIcon icon={faHome} className="mr-2" />
              Project Details
            </Nav.Item>
          </NavLink>

          <SubMenu
            title="Project"
            icon={faCopy}
            items={["Project-List"]}
          />

          <SubMenu
            title="Employee"
            icon={faBriefcase}
            items={["Employee-List"]}
          />

          <SubMenu
            title="Leaves"
            icon={faImage}
            items={["Official", "Employee-leaves"]}
          />
          </Nav>
          </Router>
          </div>
          
    );
  }
}

  export default SideBar;
