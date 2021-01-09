import React from 'react';
import HMSnackbar from '../feedback/HMSnackbar';

import { useState } from "react";
import {Redirect} from 'react-router-dom';

export default function FeedbackContainer({onSuccessRedirectTo,render}) {
    const [isSuccessful, setSuccessful] = useState(false);
    const [failMessage, setfailMessage] = useState("");
    return (
      <React.Fragment>
        {render(setfailMessage,setSuccessful)}
        <HMSnackbar
          message={failMessage}
          clearMessage={() => setfailMessage("")}
        />
        {isSuccessful && onSuccessRedirectTo &&  <Redirect to={onSuccessRedirectTo} />}
      </React.Fragment>
    );

}
