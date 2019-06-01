import React, { Component } from 'react';
import './App.css';
import { Button, Container, Row, Col, Form } from 'react-bootstrap'

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      equation: "",
      equalClass: "btn btn-warning btn-block"
    };
  }

  addToInput = val => {
    this.setState({ input: this.state.input + val, equation: this.state.equation + val });
    if (this.state.equation != 27) {
      this.setState({ equalClass: "btn btn-warning btn-block" });
    }
  };

  addDecimal = val => {
    // only add decimal if there is no current decimal point present in the input area
    if (this.state.input.indexOf(".") === -1) {
      this.setState({ equation: this.state.equation + "." });
    }
  };

  addZeroToInput = val => {
    // if this.state.input is not empty then add zero
    if (this.state.input !== "") {
      this.setState({ equation: this.state.equation + val });
    }
  };

  clearInput = () => {
    this.setState({ equation: "" });
  };

  add = () => {
    this.setState({ equation: this.state.equation + "+" });
  };

  subtract = () => {
    this.setState({ equation: this.state.equation + "-" });
  };
  
  multiply = () => {
    this.setState({ equation: this.state.equation + "*" });
  };

  divide = () => {
    this.setState({ equation: this.state.equation + "/" });
  };

  evaluate = () => {
    this.setState({ equation: eval(this.state.equation) });
    if (this.state.equation == "27") {
      this.setState({ equalClass: "btn btn-danger btn-block" });
    }
  }

  render(){
    return (
      <div className="App">
        <Container>
          <Row>
            <Col md={12}><Form.Control id="calc-inputt" size="lg" placeholder="0" value={this.state.equation} /></Col>
          </Row>
          <Row>
          <Col md={6}> <Button onClick={() => this.clearInput()} bsPrefix="btn btn-primary btn-block">C</Button></Col>
            <Col md={3}> <Button id="plusOrMinus" bsPrefix="btn btn-warning btn-block">+/-</Button></Col>
            <Col md={3}> <Button onClick={() => this.divide()} bsPrefix="btn btn-warning btn-block">&divide;</Button></Col>
          </Row>
          <Row>
            <Col md={3}><Button onClick={() => this.addToInput(7)} bsPrefix="btn btn-dark btn-block">7</Button></Col>
            <Col md={3}><Button onClick={() => this.addToInput(8)} bsPrefix="btn btn-dark btn-block">8</Button></Col>
            <Col md={3}><Button onClick={() => this.addToInput(9)} bsPrefix="btn btn-dark btn-block">9</Button></Col>
            <Col md={3}><Button onClick={() => this.multiply()} bsPrefix="btn btn-warning btn-block">x</Button></Col>
          </Row>
          <Row>
            <Col md={3}><Button onClick={() => this.addToInput(4)} bsPrefix="btn btn-dark btn-block">4</Button></Col>
            <Col md={3}><Button onClick={() => this.addToInput(5)} bsPrefix="btn btn-dark btn-block">5</Button></Col>
            <Col md={3}><Button onClick={() => this.addToInput(6)} bsPrefix="btn btn-dark btn-block">6</Button></Col>
            <Col md={3}><Button onClick={() => this.subtract()} bsPrefix="btn btn-warning btn-block">-</Button></Col>
          </Row>
          <Row>
            <Col md={3}><Button onClick={() => this.addToInput(1)} bsPrefix="btn btn-dark btn-block">1</Button></Col>
            <Col md={3}><Button onClick={() => this.addToInput(2)} bsPrefix="btn btn-dark btn-block">2</Button></Col>
            <Col md={3}><Button onClick={() => this.addToInput(3)} bsPrefix="btn btn-dark btn-block">3</Button></Col>
            <Col md={3}><Button onClick={() => this.add()} bsPrefix="btn btn-warning btn-block">+</Button></Col>
          </Row>
          <Row>
            <Col md={6}> <Button onClick={() => this.addToInput(0)} bsPrefix="btn btn-dark btn-block">0</Button></Col>
            <Col md={3}> <Button onClick={() => this.addDecimal()} bsPrefix="btn btn-dark btn-block">.</Button></Col>
            <Col md={3}> <Button onClick={() => this.evaluate()} bsPrefix={this.state.equalClass}>=</Button></Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
