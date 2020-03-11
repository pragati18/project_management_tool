import React, { Component } from 'react';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from 'reactstrap';

class Employee extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleFade() {
    this.setState((prevState) => { return { fadeIn: !prevState }});
  }
  

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" md="12">
            <Card>
              <CardHeader>
                <strong>Edit Employee</strong>
              </CardHeader>
              <CardBody>
                <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
                  <FormGroup row>
                    <Col md="3">
                      <strong><Label htmlFor="text-input">Username:</Label></strong>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="username" name="username" value ="Pragati18" placeholder="Enter Username" />
                     
                    </Col>
                    </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                    <strong><Label htmlFor="email-input">Email:</Label></strong>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="email" id="email" name="email" value="pragati@coditation.com" placeholder="Enter Email" autoComplete="email" disabled/>
                      
                    </Col>
                  </FormGroup>
                
                  <FormGroup row>
                    <Col md="3">
                      <strong><Label htmlFor="text-input">First name:</Label></strong>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="fname" name="fname" value="Pragati" placeholder="Enter First name" />
                    </Col>
                    </FormGroup>
                    <FormGroup row>
                    <Col md="3">
                      <strong><Label htmlFor="text-input">Last name:</Label></strong>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="lname" value="Gaikwad" name="lname" />
                      
                    </Col>
                    </FormGroup>
                    <FormGroup row>
                    <Col md="3">
                    <strong><Label htmlFor="select">Role</Label> </strong>
                    </Col>
                    <Col xs="12" md="9">
                    <Input type="text" id="role" name="role" Value="Admin" />
                    </Col>
                  </FormGroup>
  
                  <FormGroup row>
                    <Col md="3">
                      <strong><Label htmlFor="textarea-input">Skills</Label></strong>
                    </Col>
                    <Col xs="12" md="9">
                    <Input type="text" id="skills" name="skills" Value="{HTML, CSS, JAVA}" />
                    </Col>
                  </FormGroup>

              
              <CardFooter className="footer_button">
                <Button type="submit" size="xl" color="primary"><i className="nav-icon icon-check"></i> Update</Button>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Button type="reset" size="xl" color="danger"><i className="nav-icon icon-speedometer"></i> Cancel</Button>
              </CardFooter>

              </Form>
              </CardBody>
            </Card>
           
          </Col>
          
        </Row>
      </div>
    );
  }
}

export default Employee;
