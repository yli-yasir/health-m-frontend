import React, { useState, useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import fabric, {
  createFamilyNode,
  removeFamilyNode,
} from "../utils/fabricUtils";
import {
  createRemoveFamilyNodeControl,
  createAddFamilyNodeControl,
  connectFamilyNodes,
  trackFamilyNodeConnectionLines
} from "../utils/fabricUtils";
import FamilyNodeDialog from "../components/FamilyNodeDialog";

export default function PedigreeChart(props) {
  const [isFamilyDialogOpen, setFamilyDialogOpen] = useState(false);

  let canvasRef = useRef();
  //Holds a reference to the family node that opened the dialog
  let dialogOriginRef = useRef();

  useEffect(() => {
    const canvas = new fabric.Canvas("fabric-canvas");
    canvasRef.current = canvas;
    canvas.setBackgroundColor("#e0e0e0");
    canvas.setDimensions({ width: 1024, height: 576 });
    createRemoveFamilyNodeControl(removeFamilyNode);
    createAddFamilyNodeControl(handleFamilyNodeControlClick);
    canvas.add(createFamilyNode("Eve", "female"));
    canvas.on('object:moving',(e)=>{
      trackFamilyNodeConnectionLines(e.target);
      canvas.renderAll();
    });
  }, []);

  function handleFamilyNodeControlClick(eventData, target) {
    setFamilyDialogOpen(true);
    dialogOriginRef.current = target;
  }

  function createFamilyNodeViaDialog(name, gender) {
    const canvas = canvasRef.current;
    const originNode = dialogOriginRef.current;
    const newNode = createFamilyNode(name, gender);
    const connectionLine = connectFamilyNodes(originNode,newNode);
    canvas.add(connectionLine);
    canvas.sendToBack(connectionLine);
    canvas.add(newNode);

  }

  return (
    <Box width="100%" paddingTop={2} display="flex" justifyContent="center">
      <canvas id="fabric-canvas"></canvas>

      <FamilyNodeDialog
        isOpen={isFamilyDialogOpen}
        onClose={() => setFamilyDialogOpen(false)}
        onConfirm={createFamilyNodeViaDialog}
      ></FamilyNodeDialog>
    </Box>
  );
}
