import { Waypoint } from "react-waypoint";
import { makeStyles } from "@material-ui/core/styles";
import React from 'react'
import catSvg from '../../assets/cat.svg';

const useStyles = makeStyles((theme) => ({
  waypoint: {
    position: "absolute",
    bottom: "-100px",
  },
}));

export default function BottomScollWaypoint(props) {
    const classes = useStyles();

    // Seems like Waypoint doesn't support styling
    // Wrap it in a div and apply the styling to the div
    // The browser allow scrolling unless this div has content which has size
    // Therefore we include another child which has size in the div

  return (<div className={classes.waypoint}>
    <span>&nbsp;</span>    
    <Waypoint onEnter={props.onEnter}/>
    {/* Elements above will suffice, line below can be removed */}
    <img src={catSvg} height='50px' width='50px' style={{marginBottom:'8px'}}></img>
  </div>);
}
