import { Button,CircularProgress } from "@material-ui/core";

export function ProgressButton(props) {
    const {isLoading,...rest} = props;
  return (
    <Button {...rest}>
      {isLoading && <CircularProgress size={24}/>}
      {!isLoading  && props.children}
    </Button>
  );
}
