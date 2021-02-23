import React from "react";
import AppBar,{AppBarSpace} from "../AppBar";

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
