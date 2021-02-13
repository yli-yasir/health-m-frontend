import React from "react";
import AppBar from "./AppBar";
import AppBarSpace from "./AppBar/AppBarSpace";

function Page(props) {
  return (
    <React.Fragment>
      <AppBar title={props.title} />
      <AppBarSpace />
      {props.children}
    </React.Fragment>
  );
}

export default Page;
