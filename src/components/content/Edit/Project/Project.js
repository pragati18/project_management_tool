import React, { Component } from 'react';
import {Button, Card, CardBody, CardFooter, CardHeader, Col, Form, FormGroup, Input, Label, Row,} from 'reactstrap';

class Project extends Component {
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
                <strong>Edit Project</strong>
              </CardHeader>
              <CardBody>
                <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
                  <FormGroup row>
                    <Col md="3">
                      <strong><Label htmlFor="text-input">Project Name</Label></strong>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="pname" name="pname" placeholder="Enter First name" value="Tapclicks"/>
                      
                    </Col>
                    </FormGroup>
                    <FormGroup row>
                    <Col md="3">
                      <strong><Label htmlFor="text-input">Project Manager Name</Label></strong>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="pm_name" name="pm_name" placeholder="Enter First name" value="Rajesh" />
                    </Col>
                    </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                    <strong><Label htmlFor="date-input">Start Date </Label> </strong>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="date" id="start-date-input" name="start-date-input" placeholder="date" value="2000-05-05"/>
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="3">
                    <strong><Label htmlFor="date-input">End Date </Label> </strong>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="date" id="end-date-input" name="end-date-input" placeholder="date" value="2000-05-05"/>
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

export default Project;
