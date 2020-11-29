import { fabric } from "fabric/dist/fabric";
import deleteSvg from "../assets/delete.svg";
import FamilySvg from "../assets/family.svg";

// TODO: check if this is really needed
function makeImageElement(src) {
  const imgElement = document.createElement("img");
  imgElement.src = src;
  return imgElement;
}

const deleteImg = makeImageElement(deleteSvg);

const familyImg = makeImageElement(FamilySvg);

export function createDeleteControl(onClick){
  // -0.5 for x and y, means the top left corner.
  fabric.Object.prototype.controls.deleteControl = new fabric.Control({
    x: -0.5,
    y: -0.5,
    offsetY: -24,
    offsetX:-24,
    cursorStyle: "pointer",
    render: renderControl(deleteImg),
    mouseUpHandler: deleteFamilyNode,
    cornerSize: 40,
  });
}

export function createFamilyControl(onClick){
  fabric.Object.prototype.controls.familyControl = new fabric.Control({
    x: 0.5,
    y: -0.5,
    offsetY: -24,
    offsetX:24,
    cursorStyle: "pointer",
    render: renderControl(familyImg),
    mouseUpHandler: deleteFamilyNode,
    cornerSize: 40,
  });
}


function renderControl(icon) {
  return function renderControl(ctx, left, top, styleOverride, fabricObject) {
    var size = this.cornerSize;
    ctx.save();
    ctx.translate(left, top);
    ctx.rotate(fabric.util.degreesToRadians(fabricObject.angle));
    // Images are drawn from top left corner as the center
    // So we use -size/2 to center them
    ctx.drawImage(icon, -size / 2, -size / 2, size, size);
    ctx.restore();
  };
}

function deleteFamilyNode(eventData, target) {
  const canvas = target.canvas;
  canvas.remove(target);
  canvas.requestRenderAll();
}

export function createFamilyNode(fabricCanvas, gender) {
  var text = new fabric.IText("hello world", {
    left: 50,
    top: 100,
    fontFamily: "arial black",
    fill: "#333",
    fontSize: 50,
  });

  // var group = new fabric.Group([ circle, text ], {
  //   left: 150,
  //   top: 100,
  // });

  fabricCanvas.add(text);
}

export default fabric;
