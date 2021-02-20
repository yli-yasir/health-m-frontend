import FormSection from "../layout/Section";
import PedigreeChart from "../PedigreeChart";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Dialog, Button, Slide } from "@material-ui/core";
import { AppBar, Toolbar, IconButton } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import { PEDIGREE_CHART } from "./inputNames";

const useStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
}));

export default function PedigreeChartSection(props) {
  const { values, setFieldValue } = props.formikBag;
  const classes = useStyles();
  const [open, setOpen] = useState(false);

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
        <PedigreeChart
          chartData={values[PEDIGREE_CHART]}
          saveChart={(value) => setFieldValue(PEDIGREE_CHART, value)}
        />
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
            Pedigree Chart Editor
          </Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.toolbar}></div>
    </React.Fragment>
  );
}
