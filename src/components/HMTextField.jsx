import {TextField} from "@material-ui/core"

function HMTextField(props){
    return (<TextField
    variant="outlined"
    color="secondary"
    fullWidth={true}
    margin='normal'
    {...props}
  />);

}

export default HMTextField;