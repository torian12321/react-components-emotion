import React from "react";
import { Row, Container, Avatar, Button, Divider, Message, Note, Loader } from "./components/ui";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Container>
          <Row>
abc
            </Row>
          </Container>
          <Note caption='bla bla bla' />
          <Note caption='bla bla bla' type='info'/>
          <Note caption='bla bla bla' type='success'/>
          <Note caption='bla bla bla' type='error'/>
          <Note caption='bla bla bla' type='warning'/>
          <Button caption="blablabla" />
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            <Avatar />
            <Divider />
            <Loader />
            <Loader size='xs' />
            <Loader size='sm' />
            <Loader size='md' />
            <Loader size='lg' />
            <Message caption='bla bla bla' />
            <Message caption='bla bla bla' type='info'/>
            <Message caption='bla bla bla' type='success'/>
            <Message caption='bla bla bla' type='error'/>
            <Message caption='bla bla bla' type='warning'/>
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
