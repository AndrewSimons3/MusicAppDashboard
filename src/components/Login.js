import React from 'react';
import TextField from '@material-ui/core/TextFIeld'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // const useStyles = makeStyles((theme) => ({
  //   root: {
  //     '& > *': {
  //       margin: theme.spacing(1),
  //     },
  //   },
  // }));

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
        <form>
          <div>
          <TextField id="standard-basic" label="First Name *" />
          </div>
          <div>
          <TextField id="standard-basic" label="Last Name *" />
          </div>
          <div>
          <Button onClick={this.props.loginFunc} variant="contained" color="primary">
            Login
          </Button>
          </div>
        </form>
      </Grid>
    </div>
  )
}
}

export default Login