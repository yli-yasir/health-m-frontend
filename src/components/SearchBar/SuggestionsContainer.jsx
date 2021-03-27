import React from 'react'
import { Paper } from "@material-ui/core";

const SuggestionsContainer  = React.forwardRef((props,ref)=>{
  return <Paper ref={ref} {...props}>{props.children}</Paper>;
})


export default SuggestionsContainer;
