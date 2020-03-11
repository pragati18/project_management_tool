import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import SideBar from "./components/sidebar/SideBar";
//import Content from "./components/content/NavBar";
import {Router} from "react-router-dom"; 
import history from "./services/history";
 import Routes from "./routes";
 import { Container } from "react-bootstrap";
import NavBar from "./components/sidebar/Navbar";
import classNames from "classnames";


class App extends React.Component {
  constructor(props) {
    super(props);

    // Moblie first
    this.state = {
      isOpen: false,
      isMobile: true
    };

    this.previousWidth = -1;
  }

  updateWidth() {
    const width = window.innerWidth;
    const widthLimit = 576;
    const isMobile = width <= widthLimit;
    const wasMobile = this.previousWidth <= widthLimit;

    if (isMobile !== wasMobile) {
      this.setState({
        isOpen: !isMobile
      });
    }

    this.previousWidth = width;
  }

  /**
   * Add event listener
   */
  componentDidMount() {
    this.updateWidth();
    window.addEventListener("resize", this.updateWidth.bind(this));
  }

  /**
   * Remove event listener
   */
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWidth.bind(this));
  }

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <div className="App wrapper">
        <SideBar className="sidebar_css" toggle={this.toggle} isOpen={this.state.isOpen} />
          <Container
        fluid
        className={classNames("content")}
      >
        <NavBar toggle={this.toggle} isOpen={this.state.isOpen} />
     
        <Router history = {history} >
          <Routes />
        </Router>
        </Container>
       
      </div>
    );
  }
}

export default App;
