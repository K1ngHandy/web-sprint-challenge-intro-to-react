import React, {useState, useEffect} from 'react';
// import axios from 'axios'
import styled from 'styled-components'
import Character from './components/Character'
import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <Container className="App">
      <Header className="Header">Characters</Header>
      <div><Character /></div>
    </Container>
  );
}

export default App;

const Container = styled.div`
border: solid darkGrey 3px;
background-color: lightGrey;
opacity: 0.6
`

const Header = styled.h1`
font-weight: bold;
color: maroon;
`

