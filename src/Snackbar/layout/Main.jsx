import { Box } from "@material-ui/core";

function Main(props) {
    const {children,...otherProps} = props; 
  return (
    <Box
      component="main"
      display="flex"
      flexDirection="column"
      alignItems="center"
      width="100%"
      p={2}
      {...otherProps}
    >{children}</Box>
  );
}

export default Main;
