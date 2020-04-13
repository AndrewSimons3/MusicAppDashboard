import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Slider from '@material-ui/core/Slider';

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



const Volume = (props) => {
  const classes = useStyles();


return (
  
  <Card className={classes.root}>
    <CardContent>
      <div className={classes.title}>Master Volume</div>
      <br></br>
      <div>Overrides all other sound settings in this application</div>
    </CardContent>
    <CardActions>
    <Slider
        defaultValue={30}
        onChange={props.handleSliderVolume}
        // getAriaValueText={valueText}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={10}
        marks
        min={10}
        max={110}
      />
    </CardActions>
  </Card>
  
);
}

export default Volume;