import { CircularProgress, Typography } from "@material-ui/core";
import { useAsync } from "react-use";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";


export default function Loader(props) {
  const { load, deps, ...otherProps } = props;

  const { error, loading, value } = useAsync(load, deps);
  return (
    <React.Fragment>
      {loading && <CircularProgress/>}
      {!loading && !error && props.render(value)}
      {error && <Typography variant='h6'>Something went wrong!</Typography>}
    </React.Fragment>
  );
}
