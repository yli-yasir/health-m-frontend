import {
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@material-ui/core";

export default function InfoItem(props) {
  const PropIcon = props.icon;
  return (
    <ListItem>
      <ListItemIcon>
        <PropIcon />
      </ListItemIcon>
      <ListItemText>
        <Typography variant="h6">{props.title}</Typography>
        {props.content}
      </ListItemText>
    </ListItem>
  );
}
