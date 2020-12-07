import React, { useState, useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import fabric, { addFamilyNode,removeFamilyNode } from "../utils/fabricUtils";
import { createRemoveFamilyNodeControl, createAddFamilyNodeControl } from "../utils/fabricUtils";
import FamilyNodeDialog from "../components/FamilyNodeDialog";

export default function PedigreeChart(props) {

  const [isFamilyDialogOpen, setFamilyDialogOpen] = useState(false);

  let canvasRef = useRef();

  useEffect(() => {
    const canvas = new fabric.Canvas("fabric-canvas");
    canvasRef.current = canvas;
    canvas.setBackgroundColor("#e0e0e0");
    canvas.setDimensions({ width: 1024, height: 576 });
    createRemoveFamilyNodeControl(removeFamilyNode);
    createAddFamilyNodeControl(() => setFamilyDialogOpen(true));
    addFamilyNode(canvas, "Eve","female");
  }, []);

  function createFamilyNodeViaDialog(canvas){
    return function(name,gender){
      addFamilyNode(canvas,name,gender)
    }
  }

  return (
    <Box width="100%" paddingTop={2} display="flex" justifyContent="center">
      <canvas id="fabric-canvas"></canvas>

      <FamilyNodeDialog
        isOpen={isFamilyDialogOpen}
        onClose={() => setFamilyDialogOpen(false)}
        onConfirm={createFamilyNodeViaDialog(canvasRef.current)}
      ></FamilyNodeDialog>
    </Box>
  );
}
