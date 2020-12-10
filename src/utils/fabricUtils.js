import { fabric } from "fabric/dist/fabric";
import deleteSvg from "../assets/delete.svg";
import FamilySvg from "../assets/family.svg";

const deleteImg = makeImageElement(deleteSvg);

const familyImg = makeImageElement(FamilySvg);

export function makeImageElement(src) {
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
  if (target.terminalConnectionLine){
   canvas.remove(target.terminalConnectionLine) 
  }
  canvas.remove(target);

  canvas.requestRenderAll();
}

export function createFamilyNode(name, gender) {
  const commonConfig = { originX: "center", originY: "center" };
  const padding = 16;
  let shape;

  let label = new fabric.Text(name, {
    ...commonConfig,
    fontSize: 50,
    fontFamily: "Roboto, sans-serif",
  });

  if (gender === "male") {
    shape = new fabric.Rect({
      ...commonConfig,
      fill: "#7986cb",
      height: label.height + padding,
      width: label.width + padding,
      rx: 12,
      ry: 12,
    });
  } else {
    shape = new fabric.Circle({
      ...commonConfig,
      fill: "#f06292",
      radius: label.width / 2 + 8,
    });
  }

  var familyNode = new fabric.Group([shape, label], {
    ...commonConfig,
    left: 150,
    top: 100,
    cornerSize: 25,
  });

  familyNode.originConnectionLines = [];
  familyNode.terminalConnectionLine = null;

  return familyNode;
}

export function connectFamilyNodes(fromFamilyNode, toFamilyNode) {
  const line = createConnectionLine([
    fromFamilyNode.left,
    fromFamilyNode.top,
    toFamilyNode.left,
    toFamilyNode.top,
  ]);

  // The connection lines that originate from this node
  // a Family node can have more than one origin connection line

    fromFamilyNode.originConnectionLines.push(line);


  // The connection line which terminates at this node
  //The toFamilyNode is drawn at the end (x2,y2) coords of this line.
  toFamilyNode.terminalConnectionLine = line;

  return line;
}

// When a family node moves:
// All connection lines that originate form it  (originLines) should change x1, y1
// The line that terminates at it (terminalLine) should change x2, y2
export function trackFamilyNodeConnectionLines(movingFamilyNode) {
  const originLines = movingFamilyNode.originConnectionLines;
  const terminalLine = movingFamilyNode.terminalConnectionLine;

  if (hasOriginConnectionLines(movingFamilyNode)) {
    originLines.forEach((line) =>
      line.set({ x1: movingFamilyNode.left, y1: movingFamilyNode.top })
    );
  }

  if (hasTerminalConnectionLine(movingFamilyNode)) {
    terminalLine.set({x2: movingFamilyNode.left,y2:movingFamilyNode.top})
  }

}

function createConnectionLine(coords) {
  return new fabric.Line(coords, {
    fill: "red",
    strokeWidth: 5,
    selectable: false,
    evented: false,
  });
}


export function hasOriginConnectionLines(familyNode) {
  return familyNode.originConnectionLines.length > 0;
};

export function hasTerminalConnectionLine(familyNode){
  return Boolean(familyNode.terminalConnectionLine)
 }
export default fabric;
