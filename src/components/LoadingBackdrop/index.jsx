import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import Logo from '../icons/Logo';
import { Typography, LinearProgress, Zoom } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    backdrop: {
        alignItems: "flex-start",
        paddingTop: theme.spacing(12),
    },
    content:{
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
    },
    progress:{
        width:"75%",
    },
    logo:{
        margin:theme.spacing(4)
    }

}));

export default function LoadingBackdrop(props) {

    const classes = useStyles();

    return (
        <Backdrop className={classes.backdrop} open={props.open}>
            <Zoom in={true} timeout={1000}>
                <div className={classes.content}>
                    <Typography variant="h2">Health-M</Typography>
                    <Logo className={classes.logo} height="128px" width="128px" />
                    <LinearProgress color="secondary" className={classes.progress} />
                </div>
            </Zoom>
        </Backdrop>);
}