import React, { useEffect } from 'react';
import Main from '../src/Main';
import ReactGa from 'react-ga';

export default function App() {

  useEffect(() => {
    ReactGa.initialize('G-GE686WPV6X')

    //to report page view
    ReactGa.pageview('/')
  })

  return <Main />
}
