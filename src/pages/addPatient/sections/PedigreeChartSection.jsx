import FormSection from "../../../components/FormSection";
import PedigreeChart from "../../../components/PedigreeChart";
import React, { useState, useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Dialog, Button, Slide } from "@material-ui/core";
import { AppBar, Toolbar, IconButton } from "@material-ui/core";
import { Typography, Paper, Box } from "@material-ui/core";
import { Close } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
}));

export default function PedigreeChartSection() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <FormSection title="Pedigree Chart">
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open Pedigree Chart Editor
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Slide}
      >
        <PedigreeChartAppBar onClose={handleClose} classes={classes} />
        <PedigreeChart />
      </Dialog>
    </FormSection>
  );
}

function PedigreeChartAppBar({ onClose: handleClose, classes }) {
  return (
    <React.Fragment>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
          >
            <Close />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Pedigree Chart
          </Typography>
          {/* <Button autoFocus color="inherit" onClick={handleClose}>
        save
      </Button> */}
        </Toolbar>
      </AppBar>
      <div className={classes.toolbar}></div>
    </React.Fragment>
  );
}
