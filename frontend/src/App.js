import React from 'react';
import { Row, Col, Container, Form, Button } from 'react-bootstrap';
import {inject, observer, Provider} from "mobx-react";
import {toJS} from "mobx";
import './App.scss';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      text: '',
      results: []
    }

  }

  sendText = async () => {
    await this.props.store.sendText(this.state.text);
    this.setState({text: ''});
  }

  handleChange = (event) => {
      this.setState({[event.target.name]: event.target.value});
  }
  
  render() {
    return (
      <div className="App">
          <Container fluid="lg">
            <Row>
              <Col xs={6}>
                
                  <Form.Group>
                    <Form.Label>Text</Form.Label>
                    <Form.Control type="text"  onChange={this.handleChange} value={this.state.text} name="text" placeholder="Text" />
                  </Form.Group>
                  <Button variant="primary" type="button" onClick={this.sendText}>
                    Submit
                  </Button>
                
              </Col>
              <Col xs={6}>
                <h2>Words</h2>
                <ul>
                {toJS(this.props.store.getText).map(r => 
                  <li>{r}</li>
                 )}
                </ul>
              </Col>
            </Row>
          </Container>
      </div>
    );
  }
}

export default inject('store')(observer(App));
