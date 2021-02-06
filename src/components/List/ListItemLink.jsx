import ListItem from "./ListItem";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  activeLink: {
    color: theme.palette.secondary.main,
  },
  listItemRoot: {
    color: "inherit",
  },
}));

export default function ListItemLink(props) {
  const classes = useStyles();
  return (
    <li>
      <ListItem
        icon={props.icon}
        text={props.text}
        button
        component={NavLink}
        to={props.to}
        activeClassName={classes.activeLink}
        exact={true}
        onClick={props.onClick}
      />
    </li>
  );
}
