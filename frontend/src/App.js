import React from 'react';
import logo from './logo.svg';
import { Row, Col, Container, Form, Button } from 'react-bootstrap';
import { observer, inject } from 'mobx-react';
import './App.scss';

@inject('store')
@observer
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
                {this.state.results.map(r => 
                  <p>{r}</p>
                 )}
              </Col>
            </Row>
          </Container>
      </div>
    );
  }
}

export default App;
