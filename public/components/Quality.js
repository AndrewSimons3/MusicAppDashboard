import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';



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
  }
});

const Quality = (props) => {
const classes = useStyles();

return (

  <Card className={classes.root}>
    <CardContent>
      <div className={classes.title}>Sound Quality</div>
      <br></br>
      <div>Manually control the music quality in the event of poor connection</div>
    </CardContent>
    <CardActions>
      <FormControl style={{ width: "180px" }}>
          <Select
            defaultValue={'normal'}
            onChange={props.handleQualitySelector}>
            <MenuItem value={'low'}>Low</MenuItem>
            <MenuItem value={'normal'}>Normal</MenuItem>
            <MenuItem value={'high'}>High</MenuItem>
          </Select>
        </FormControl>
    </CardActions>
  </Card>
);
}

export default Quality;