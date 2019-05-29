import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

class Damn extends Component {
    render() {
        
        return (
            <Button bsPrefix="btn-dark container-fluid" variant="primary"></Button>
        );
    }
}

class Damned2 extends Component {
    render() {
        return (
            <Button bsPrefix="btn-warning container-fluid" variant="primary">Prdddimary</Button>
        );
    }
}

export {
    Damn,
    Damed2
}