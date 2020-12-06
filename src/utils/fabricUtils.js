import { fabric } from "fabric/dist/fabric";
import deleteSvg from "../assets/delete.svg";
import FamilySvg from "../assets/family.svg";

const deleteImg = makeImageElement(deleteSvg);

const familyImg = makeImageElement(FamilySvg);

function makeImageElement(src) {
  const imgElement = document.createElement("img");
  imgElement.src = src;
  return imgElement;
}

export function createRemoveFamilyNodeControl(onClick) {
  // -0.5 for x and y, means the top left corner.
  fabric.Object.prototype.controls.deleteControl = new fabric.Control({
    x: -0.5,
    y: -0.5,
    offsetY: -24,
    offsetX: -24,
    cursorStyle: "pointer",
    render: renderControl(deleteImg),
    mouseUpHandler: onClick,
    cornerSize: 40,
  });
}

export function createAddFamilyNodeControl(onClick) {
  fabric.Object.prototype.controls.familyControl = new fabric.Control({
    x: 0.5,
    y: -0.5,
    offsetY: -24,
    offsetX: 24,
    cursorStyle: "pointer",
    render: renderControl(familyImg),
    mouseUpHandler: onClick,
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

export function removeFamilyNode(eventData, target) {
  const canvas = target.canvas;
  canvas.remove(target);
  canvas.requestRenderAll();
}

export function addFamilyNode(fabricCanvas,name, gender) {

  const commonConfig = { originX: "center", originY: "center" };
  const padding = 16;
  let shape;

  let label = new fabric.Text(name, {
    ...commonConfig,
    fontSize: 50,
    fontFamily: 'Roboto, sans-serif'
  });

  if (gender === "male") {
    shape = new fabric.Rect({
      ...commonConfig,
      fill: '#7986cb',
      height:label.height + padding,
      width:label.width+ padding,
      rx:12,
      ry:12,
    })
  } else {
    shape= new fabric.Circle({
      ...commonConfig,
      fill:'#f06292',
      radius: label.width/2 + 8 
    })
  }

  var group = new fabric.Group([ shape, label ], {
    left: 150,
    top: 100,
    cornerSize:25
  });

  fabricCanvas.add(group);
}

export default fabric;
