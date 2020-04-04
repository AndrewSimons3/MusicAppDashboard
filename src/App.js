import React from 'react';
import './App.css';
import NavBar from './components/NavBar'
import Login from './components/Login'


class App extends React.Component {
 
  
  render () {

    return (
      <div>
        <NavBar></NavBar>
        <Login></Login>
      </div>
    )
  }
};

export default App;
