import { 
    KeyboardDatePicker} from '@material-ui/pickers'

export default function HMDatePicker(props){
    return (<KeyboardDatePicker
    disableToolbar
    variant="inline"
    format="MM/dd/yyyy"
    margin="normal"
    KeyboardButtonProps={{
      'aria-label': 'change date',
    }}
    {...props}
  />);
}