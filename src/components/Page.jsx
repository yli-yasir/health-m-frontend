import React from "react";
import AppBar from "./AppBar";
import AppBarSpace from "./AppBar/AppBarSpace";

function Page(props) {
  return (
    <React.Fragment>
      <AppBar title="Search Patients" />
      <AppBarSpace />
      {props.children}
    </React.Fragment>
  );
}

export default Page;
