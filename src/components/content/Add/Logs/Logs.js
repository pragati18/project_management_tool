import React, { Component } from 'react';

import {Button, Card, CardBody, CardFooter, CardHeader, Col, Form, FormGroup, FormText, Input, Row} from 'reactstrap';

class Logs extends Component {
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
                <strong>Add Employees Logs</strong>
              </CardHeader>
              <CardBody>
              <h1>Upload the File Save All The</h1>
              <h2>Employee's Logs</h2>
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
                    <Col xs="12" md="4">
                      <Input type="select" name="select" id="select">
                        <option value="0">Select Name</option>
                        <option value="0">Pragati Gaikwad (ID - 12321)</option>
                        <option value="1">Rajesh Darak (ID - 12232)</option>
                        <option value="2">Saurabh Mahajan (ID -1234)</option>
                      </Input>
                      <FormText color="muted">Select Name</FormText>
                    </Col>
                    <Col xs="12" md="4">
                      <Input type="date" id="log-date-input" name="start-date-input" placeholder="date" />
                      <FormText color="muted">Select Date</FormText>
                    </Col>
                    <Col xs="12" md="4">
                    <Input type="number" id="logs" name="logs" placeholder="Enter Logs" />
                    <FormText color="muted">Enter Logs Hours</FormText>
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

export default Logs;
