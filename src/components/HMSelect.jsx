import {FormControl,InputLabel,Select,MenuItem} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles((theme)=>({
    formControl: {
        margin: theme.spacing(2,0),
        maxWidth: 150,
        display: 'flex'
      }
    
}));


export default function HMSelect(props) {
    const classes = useStyles();
  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel id="demo-simple-select-outlined-label">{props.label}</InputLabel>
      <Select
        labelId="demo-simple-select-outlined-label"
        id="demo-simple-select-outlined"
        value={props.value}
        onChange={props.onChange}
        label={props.label}
      >
        {props.items.map((item) => (
          <MenuItem key={item.value} value={item.value}>{item.label}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
