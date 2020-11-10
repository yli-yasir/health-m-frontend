import React, {useEffect, useRef} from 'react';
import {fabric} from 'fabric/dist/fabric'

export default function PedigreeChart(props){

    let canvas;

    useEffect(() => {
        canvas = new fabric.Canvas('fabric-canvas');

  var rect = new fabric.Rect({
          width: 200, height: 100, left: 0, top: 50, angle: 30,
          fill: 'rgba(255,0,0,0.5)'
        });

      canvas.add(rect);
      console.log('added')
      });


    return (<canvas  id="fabric-canvas" width="300" height="300"></canvas>
    )
}