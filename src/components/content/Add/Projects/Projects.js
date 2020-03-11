import React, { Component } from 'react';
import {Button, Card, CardBody, CardFooter, CardHeader, Col, Form, FormGroup, FormText, Input, Row} from 'reactstrap';

class Projects extends Component {
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
                <strong>Add New Project</strong>
              </CardHeader>
              <CardBody>
              <h1>Upload the File Save All The</h1>
              <h2>Projects List</h2>
                <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
                <FormGroup row className="center">
                      <Col xs="12" md="12" >
                        <Input className="center-block " type="file" id="file-input" name="file-input" />
                      </Col>
                  </FormGroup>
                  <h2>OR</h2>
                 
                  <strong>You can also add the details using below form:</strong>
                  <hr/>
                  <FormGroup row>
                    
                    <Col xs="12" md="6">
                      <Input type="text" id="pname" name="pname" placeholder="Enter First name" />
                      <FormText color="muted">Enter project name</FormText>
                    </Col>

                    <Col xs="12" md="6">
                      <Input type="text" id="pm_name" name="pm_name" placeholder="Enter First name" />
                      <FormText color="muted">Enter project manager name</FormText>
                    </Col>

                    </FormGroup>

                  <FormGroup row>
                    <Col xs="12" md="6">
                      <Input type="date" id="start-date-input" name="start-date-input" placeholder="date" />
                      <FormText color="muted">Enter Start Date</FormText>
                    </Col>

                    <Col xs="12" md="6">
                      <Input type="date" id="end-date-input" name="end-date-input" placeholder="date" />
                      <FormText color="muted">Enter End Date</FormText>
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

export default Projects;
