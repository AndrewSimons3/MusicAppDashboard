import React from 'react';
import TextField from '@material-ui/core/TextFIeld'
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';




class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
      
  }

  

  render() {

    const formStyle = {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: '5%'
    };

    return (
      <form style={formStyle}>
      <TextField
        variant="outlined"
        margin="normal"
        required
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        autoFocus
      />
      <TextField
        variant="outlined"
        margin="normal"
        required
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
      />
      <Button onClick={this.props.loginFunc}
        type="submit"
        variant="contained"
        color="primary"
      >
        Sign In
      </Button>
    </form>
    )
  }
}

export default Login;