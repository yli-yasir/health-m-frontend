import { fabric } from "fabric/dist/fabric";
import PedigreeChartCanvas from '../../pedigreeChartjs/pedigreeChartCanvas';
import { useEffect,useState } from "react";

export default function StaticPedigreeChart(props) {
  const {failComponent,...canvasProps} = props;
  const [loadFailed,setLoadFailed] = useState(false);
  useEffect(() => {
    if (!props.chartData){
      setLoadFailed(true);
      return;
    }
    const fabricCanvas = new fabric.StaticCanvas('fabric-canvas');
    fabricCanvas.setDimensions(PedigreeChartCanvas.DIMENSIONS);
    fabricCanvas.setBackgroundColor(PedigreeChartCanvas.BACKGROUND_COLOR);
    try{
    fabricCanvas.loadFromJSON(props.chartData)}
    catch(e){
      console.error(e);
      setLoadFailed(true);
    }
  }, []);
  return (!loadFailed ? <canvas id="fabric-canvas" {...canvasProps} /> : props.failComponent);
}
