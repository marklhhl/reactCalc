import React, { Component } from 'react';
import './App.css';
import { Button, Container, Row, Col, Form } from 'react-bootstrap'

class App extends Component {
  render(){
    return (
      <div className="App">
        <Container>
          <Row>
            <Col md={12}><Form.Control id="calc-inputt" size="lg" placeholder="0" /></Col>
          </Row>
          <Row>
            <Col md={6}> <Button id="clear" bsPrefix="btn-primary container-fluid">C</Button></Col>
            <Col md={3}> <Button id="plusOrMinus" bsPrefix="btn-primary container-fluid">+/-</Button></Col>
            <Col md={3}> <Button id="divide" bsPrefix="btn-warning container-fluid">&divide;</Button></Col>
          </Row>
          <Row>
            <Col md={3}><Button id="seven" bsPrefix="btn-dark container-fluid">7</Button></Col>
            <Col md={3}><Button id="eight" bsPrefix="btn-dark container-fluid">8</Button></Col>
            <Col md={3}><Button id="nine" bsPrefix="btn-dark container-fluid">8</Button></Col>
            <Col md={3}><Button id="multiply" bsPrefix="btn-warning container-fluid">x</Button></Col>
          </Row>
          <Row>
            <Col md={3}><Button id="four" bsPrefix="btn-dark container-fluid">4</Button></Col>
            <Col md={3}><Button id="five" bsPrefix="btn-dark container-fluid">5</Button></Col>
            <Col md={3}><Button id="six" bsPrefix="btn-dark container-fluid">6</Button></Col>
            <Col md={3}><Button id="minus" bsPrefix="btn-warning container-fluid">-</Button></Col>
          </Row>
          <Row>
            <Col md={3}><Button id="one" bsPrefix="btn-dark container-fluid">1</Button></Col>
            <Col md={3}><Button id="two" bsPrefix="btn-dark container-fluid">2</Button></Col>
            <Col md={3}><Button id="three" bsPrefix="btn-dark container-fluid">3</Button></Col>
            <Col md={3}><Button id="plus" bsPrefix="btn-warning container-fluid">+</Button></Col>
          </Row>
          <Row>
            <Col md={6}> <Button id="zero" bsPrefix="btn-dark container-fluid">0</Button></Col>
            <Col md={3}> <Button id="dot" bsPrefix="btn-dark container-fluid">.</Button></Col>
            <Col md={3}> <Button id="equal" bsPrefix="btn-warning container-fluid">=</Button></Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
