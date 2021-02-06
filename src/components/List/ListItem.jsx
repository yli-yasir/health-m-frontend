import {
  ListItem as MaterialListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";

function ListItem(props) {
  const { icon, text, ...otherProps } = props;
  return (
    <MaterialListItem {...otherProps}>
      {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
      <ListItemText primary={text} />
    </MaterialListItem>
  );
}

export default ListItem;
