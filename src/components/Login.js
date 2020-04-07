import React from 'react';
import TextField from '@material-ui/core/TextFIeld'
import Grid from '@material-ui/core/Grid'

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
   
    
  }

  render() {
    console.log(this.props)
  return (
    <div>
      <Grid container item xs={12} spacing={1}
        direction="center"
        justify="center"
        alignItems="center">
        <form onSubmit={this.props.loginFunc}>
          <div>
          <TextField id="standard-basic" label="First Name *" />
          </div>
          <div>
          <TextField id="standard-basic" label="Last Name *" />
          </div>
          <div>
          <input type="submit" value="Login"/>
          </div>
        </form>
      </Grid>
    </div>
  )
}
}

export default Login