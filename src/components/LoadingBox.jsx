import React from "react";
import { CircularProgress, Typography } from "@material-ui/core";

export default function LoadingBox({ loading, error, errorMessage, children }) {
  return (
    <React.Fragment>
      {children}
      {loading && <CircularProgress />}
      {error && !loading && (
        <Typography variant="caption">
          {errorMessage || "Something went wrong."}
        </Typography>
      )}
    </React.Fragment>
  );
}
