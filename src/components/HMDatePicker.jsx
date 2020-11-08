import { 
    KeyboardDatePicker} from '@material-ui/pickers'

export default function HMDatePicker(props){
    return (<KeyboardDatePicker
    disableToolbar
    variant="inline"
    format="MM/dd/yyyy"
    margin="normal"
    id="date-picker-inline"
    label={props.label}
    KeyboardButtonProps={{
      'aria-label': 'change date',
    }}
  />);
}