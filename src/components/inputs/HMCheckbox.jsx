import {FormControlLabel,Checkbox} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles((theme)=>({
  checkBoxRoot: {
    display: 'flex'
  }
}));

export default function HMCheckbox(props){
    const {label,...checkBoxProps} = props;
    const classes = useStyles();
    return   ( <FormControlLabel
    control={<Checkbox  {...checkBoxProps} />}
    label={label}
    classes={{root: classes.checkBoxRoot}}
  />);
}