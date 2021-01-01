import { ListItem,ListItemIcon,ListItemText, Typography } from "@material-ui/core";

export default function InfoItem(props){
    return (
        <ListItem>
            <ListItemIcon>
                <props.icon />
            </ListItemIcon>
            <ListItemText>
                <Typography variant='h6'>{props.title}</Typography>
                {props.content}
            </ListItemText>
        </ListItem>
    );

}