import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Switch from '@material-ui/core/Switch';


const useStyles = makeStyles({
  root: {
    maxWidth: 275,
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  pos: {
    marginBottom: 12,
  },
});

const Online = (props) => {

const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <div className={classes.title}>Online Mode</div>
        <br></br>
        <div>Is this application connected to the internet?</div>
      </CardContent>
      <CardActions>
      <Switch
        checked={props.online}
        onChange={props.handleChangeOnline}
        name="checkedA"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
      </CardActions>
    </Card>
  );
}


export default Online;