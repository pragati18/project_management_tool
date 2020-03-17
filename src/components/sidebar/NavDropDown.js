import React from "react";
import {Router, NavLink } from 'react-router-dom';
import history from "../../services/history";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHome} from "@fortawesome/free-solid-svg-icons";
import { Nav} from "react-bootstrap";

class NavDropDown extends React.Component {
    constructor(){
     super();
    
     this.state = {
           displayMenu: false,
         };
    
      this.showDropdownMenu = this.showDropdownMenu.bind(this);
      this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
    
    };
    
    showDropdownMenu(event) {
        event.preventDefault();
        this.setState({ displayMenu: true }, () => {
        document.addEventListener('click', this.hideDropdownMenu);
        });
      }
    
      hideDropdownMenu() {
        this.setState({ displayMenu: false }, () => {
          document.removeEventListener('click', this.hideDropdownMenu);
        });
    
      }
    
      render() {
        return (
            <div  className="dropdown css_dropdown">
             <div className="nav_dropdown" onClick={this.showDropdownMenu}> My Setting </div>
    
              { this.state.displayMenu ? (
              <ul className = "nav_ul nav_backgroud">
              <Router history = {history}>


              <li className="nav_li">
              <NavLink to="/admin_list" activeStyle={{background: "#1985ac"}}>
                <Nav.Item className="mr-2-padding" >
                 <FontAwesomeIcon icon={faHome} className="mr-2" />
                 User List
                </Nav.Item>
              </NavLink>
              </li>

              <li className="nav_li">
                <a href="/logout" className="mr-2-padding nav_a"> <FontAwesomeIcon icon={faHome} className="mr-2" /> Logout </a>
              </li>
              </Router>
             
              </ul>
            ):
            (
              null
            )
            }
    
           </div>
    
        );
      }
    }
export default NavDropDown;