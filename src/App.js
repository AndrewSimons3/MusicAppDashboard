import React from 'react';
import './App.css';
import NavBar from './components/NavBar'
import Login from './components/Login'
import Dashboard from './components/Dashboard'


class App extends React.Component {
  state = {
    loggedIn: false,
  }

  setHasLoggedIn(event) {
    console.log('test')
    event.preventDefault();
    this.setState({loggedIn: true})
  }
 
  
  render () {
    
    return (
      
      <div>
        <NavBar></NavBar>
        {!this.state.loggedIn && <Login loginFunc={this.setHasLoggedIn.bind(this)}></Login>}
        {this.state.loggedIn && <Dashboard></Dashboard>}
      </div>
    )
  }
};

export default App;
