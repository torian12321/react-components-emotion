import React from "react";
import { Row, Container, Button } from "./components/ui";
import Test from './components/hoc/test';
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Container>
          <Row>
            <Test />

            </Row>
          </Container>
          <Button caption="blablabla" />
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            Edit <code>src/App.js</code> and save to reload.
          </div>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
