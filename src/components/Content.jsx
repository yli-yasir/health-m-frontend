import React from "react";
import {Box} from '@material-ui/core';

export default function Sidebar(props) {

  return (
    <Box component='main' display='flex' flexDirection='column' alignItems='center' width='100%' p={2}>
      {props.children}
    </Box>
  );
}
