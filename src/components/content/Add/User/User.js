import React, { Component } from 'react';
import {Button, Card, CardBody, CardFooter, CardHeader, Col, Form, FormGroup, FormText, Input, Label, Row} from 'reactstrap';

class User extends Component {
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
                <strong>Add New Employee</strong>
              </CardHeader>
              <CardBody>
                <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
                  <FormGroup row>
                    <Col md="3">
                      <strong><Label htmlFor="text-input">Username:</Label></strong>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="username" name="username" placeholder="Enter Username" />
                      <FormText color="muted">Enter Unique Username</FormText>
                    </Col>
                    </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                    <strong><Label htmlFor="email-input">Email:</Label></strong>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="email" id="email" name="email" placeholder="Enter Email" autoComplete="email"/>
                      <FormText className="help-block">Please enter your email</FormText>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                    <strong><Label htmlFor="password-input">Password</Label></strong>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="password" id="password-input" name="password-input" placeholder="Password" autoComplete="new-password" />
                      <FormText className="help-block">Please enter a password</FormText>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <strong><Label htmlFor="text-input">First name:</Label></strong>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="fname" name="fname" placeholder="Enter First name" />
                      <FormText color="muted">Enter first name</FormText>
                    </Col>
                    </FormGroup>
                    <FormGroup row>
                    <Col md="3">
                      <strong><Label htmlFor="text-input">Last name:</Label></strong>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="lname" name="lname" placeholder="Enter Last name" />
                      <FormText color="muted">Enter last name</FormText>
                    </Col>
                    </FormGroup>
                    <FormGroup row>
                    <Col md="3">
                    <strong><Label htmlFor="select">Select Role</Label> </strong>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="select" name="select" id="select">
                        <option value="0">Please select</option>
                        <option value="1">Super Admin</option>
                        <option value="2">Admin</option>
                        <option value="3">Project Management</option>
                        <option value="3">Employee</option>
                      </Input>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                    <strong><Label htmlFor="select">Select Project</Label> </strong>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="select" name="select" id="select">
                        <option value="0">Please select</option>
                        <option value="1">Tapclicks</option>
                        <option value="2">Project Management</option>
                        <option value="3">Internal Tool</option>
                      </Input>
                    </Col>
                  </FormGroup>

              
              <CardFooter className="footer_button">
                <Button type="submit" size="xl" color="primary"><i className="nav-icon icon-check"></i> Submit</Button>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Button type="reset" size="xl" color="danger"><i className="nav-icon icon-speedometer"></i> Reset</Button>
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

export default User;
