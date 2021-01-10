import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { NavLink } from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    activeLink: {
      color: theme.palette.secondary.main 
    },
    listItemRoot: {
      color: 'inherit'
    }
  }));

export default function ListItemLink(props) {
    const {text, icon, to } = props;
    const classes =useStyles();
    return (
      <li>
        <ListItem
          button
          component={NavLink}
          to={to}
          activeClassName={classes.activeLink}
          exact={true}
        >
          {icon ? <ListItemIcon classes= {{root: classes.listItemRoot}}>{icon}</ListItemIcon> : null}
          <ListItemText primary={text} />
        </ListItem>
      </li>
    );
  }