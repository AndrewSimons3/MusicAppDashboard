import React from 'react';
import TextField from '@material-ui/core/TextFIeld'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

const Login = () => {
  
  return (
    <div>
      <Grid container item xs={12} spacing={1}
        direction="center"
        justify="center"
        alignItems="center">
        <form>
          <TextField id="standard-basic" label="First Name *" /> <br></br>
          <TextField id="standard-basic" label="Last Name *" /> <br></br>
          <Button variant="contained" color="primary">Login</Button>
        </form>
      </Grid>
    </div>
  )
}

export default Login