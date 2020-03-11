import React, { Component } from 'react';

import {Button, Card, CardBody, CardFooter, CardHeader,Col,Form,FormGroup,Input,Row,} from 'reactstrap';

class Oleaves extends Component {

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" md="12">
            <Card>
              <CardHeader>
                <strong>Add Official Leaves</strong>
              </CardHeader>
              <CardBody>
              <h1>Upload the File Save All The</h1>
              <h2>Company Leaves Details</h2>
                <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">

                  <FormGroup row className="center">
                    <Col xs="12" md="12" >
                      <Input className="center-block " type="file" id="file-input" name="file-input" />
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

export default Oleaves;
