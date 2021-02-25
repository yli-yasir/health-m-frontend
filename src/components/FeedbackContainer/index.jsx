import React, { useEffect } from "react";
import Snackbar from "../Snackbar";
import { useState } from "react";
import { Redirect } from "react-router-dom";

export default function FeedbackContainer(props) {
  const [isMessageShown, setMessageShown] = useState(false);

  useEffect(() => {
    props.message && setMessageShown(true);
  }, [props.message]);

  return (
    <React.Fragment>
      {props.children}
      <Snackbar message={props.message} open={isMessageShown} setOpen={setMessageShown} />
    </React.Fragment>
  );
}
