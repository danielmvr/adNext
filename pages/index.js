import React from 'react';
import Main from '../src/Main';
import ReactGA from 'react-ga';

function initializeReactGA() {
  ReactGA.initialize('G-GE686WPV6X');
  ReactGA.pageview('/homepage');
  console.log('passei no google')
}initializeReactGA()

export default function App() {
  
  return <Main />
}
