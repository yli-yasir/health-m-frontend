import ListItem from "./ListItem";
import { NavLink, Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  activeLink: {
    color: theme.palette.secondary.main,
  },
}));

export default function ListItemLink(props) {
  const classes = useStyles();

  const linkProps = props.nav
    ? { component: NavLink, activeClassName: classes.activeLink, exact: true }
    : { component: Link };

  return (
    <ListItem
      icon={props.icon}
      text={props.text}
      button={typeof props.button === 'undefined' ? true : props.button}
      to={props.to}
      onClick={props.onClick}
      {...linkProps}
    />)

}
