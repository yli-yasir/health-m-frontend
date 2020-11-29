import React, { useState, useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {Box} from "@material-ui/core";
import fabric, { createFamilyNode } from "../utils/fabricUtils";
import {createDeleteControl,createFamilyControl} from "../utils/fabricUtils";


export default function PedigreeChart(props) {


  useEffect(() => {
    const fabricCanvas = new fabric.Canvas("fabric-canvas");
    initFabric(fabricCanvas);
    
  }, []);

  return (
    <Box width="100%" paddingTop={2} display="flex" justifyContent="center">
      <canvas
        id="fabric-canvas"
      ></canvas>
    </Box>
  );
}


function initFabric(canvas){
  canvas.setBackgroundColor("#A599E9");
  canvas.setDimensions({ width: 1024, height: 576 });
  createDeleteControl();
  createFamilyControl();
  createFamilyNode(canvas,'');
}
