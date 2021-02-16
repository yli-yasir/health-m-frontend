import React, { useState, useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Snackbar, Fab } from "@material-ui/core";
import { SaveOutlined } from "@material-ui/icons";
import FamilyNodeDialog from "./FamilyNodeDialog";
import PedigreeChartCanvas from "./pedigreeChart";


export default function PedigreeChart(props) {

  const [isFamilyDialogOpen, setFamilyDialogOpen] = useState(false);
  const [isSnackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");


  let canvasRef = useRef();
  //Holds a reference to the family node that opened the dialog
  let dialogOriginRef = useRef();

  useEffect(() => {

    const canvas = new PedigreeChartCanvas(
      "fabric-canvas",
      handleRemoveControlClick,
      handleAddControlClick
    );
    canvasRef.current = canvas;

    if (props.chartData){
      canvas.loadFromJSON(props.chartData);
    }
    else{
      canvas.addFamilyMemberNode("Eve", "female");
    }
   


    return ()=>{
      props.saveChart(JSON.stringify(canvas));
      }
  }, []);

  function handleRemoveControlClick(eventData, target) {
    try {
      canvasRef.current.removeFamilyMemberNode(target);
    } catch (e) {
      openSnackbar(e.message);
      console.log(e);
    }
  }

  function handleAddControlClick(eventData, target) {
    dialogOriginRef.current = target;
    setFamilyDialogOpen(true);
  }

  function openSnackbar(msg) {
    setSnackbarMessage(msg);
    setSnackbarOpen(true);
  }

  function closeSnackbar(event, reason) {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  }

  function createFamilyMemberNodeViaDialog(name, gender) {
    const canvas = canvasRef.current;
    const originNode = dialogOriginRef.current;
    try {
      canvas.addFamilyMemberNode(name, gender, originNode);
    } catch (e) {
      openSnackbar(e.message);
      console.log(e);
    }
  }

  return (
    <Box width="100%" paddingTop={2} display="flex" justifyContent="center">

      <canvas id="fabric-canvas" />
      

      <FamilyNodeDialog
        isOpen={isFamilyDialogOpen}
        onClose={() => setFamilyDialogOpen(false)}
        onConfirm={createFamilyMemberNodeViaDialog}
      ></FamilyNodeDialog>

      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        open={isSnackbarOpen}
        autoHideDuration={6000}
        onClose={closeSnackbar}
        message={snackbarMessage}
      />
    </Box>
  );
}
