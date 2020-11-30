import React, { useState, useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import fabric, { createFamilyNode } from "../utils/fabricUtils";
import { createDeleteControl, createFamilyControl } from "../utils/fabricUtils";
import FamilyNodeDialog from "../components/FamilyNodeDialog";

export default function PedigreeChart(props) {

  const [isFamilyDialogOpen, setFamilyDialogOpen] = useState(false);

  useEffect(() => {
    const canvas = new fabric.Canvas("fabric-canvas");
    canvas.setBackgroundColor("#7986cb");
    canvas.setDimensions({ width: 1024, height: 576 });
    createDeleteControl();
    createFamilyControl(() => setFamilyDialogOpen(true));
    createFamilyNode(canvas, "");
  }, []);


  return (
    <Box width="100%" paddingTop={2} display="flex" justifyContent="center">
      <canvas id="fabric-canvas"></canvas>

      <FamilyNodeDialog
        isOpen={isFamilyDialogOpen}
        onClose={() => setFamilyDialogOpen(false)}
      ></FamilyNodeDialog>
    </Box>
  );
}
