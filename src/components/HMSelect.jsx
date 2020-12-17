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
      <InputLabel>{props.label}</InputLabel>
      <Select
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        label={props.label}
      >
        {props.items.map((item) => (
          <MenuItem key={item.key} value={item.value}>{item.label}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
