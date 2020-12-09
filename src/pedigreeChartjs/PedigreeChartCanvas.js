import { fabric } from "fabric/dist/fabric";
import { makeImageElement } from "../utils/fabricUtils";
import removeIconSrc from "../assets/delete.svg";
import addIconSrc from "../assets/family.svg";

export default class PedigreeChartCanvas extends fabric.Canvas {

  static commonFamilyNodeConfig = { originX: "center", originY: "center" };
  static familyNodePadding = 16;
  static fontSize = 50;
  static fontFamily = "Roboto, sans-serif";
  static dimensions = { width: 1024, height: 576 };
  static backgroundColor = "#e0e0e0"; 

  init(onRemoveControlClick, onAddControlClick) {
    this.setBackgroundColor(PedigreeChartCanvas.backgroundColor);
    this.setDimensions(PedigreeChartCanvas.dimensions);
    this._createCustomControls(onRemoveControlClick, onAddControlClick);
  }

  _createCustomControls(onRemoveControlClick, onAddControlClick) {
    const removeIcon = makeImageElement(removeIconSrc);

    const addIcon = makeImageElement(addIconSrc);

    // -0.5 for x and y, means the top left corner.
    fabric.Object.prototype.controls.removeControl = new fabric.Control({
      x: -0.5,
      y: -0.5,
      offsetY: -24,
      offsetX: -24,
      cursorStyle: "pointer",
      render: this._renderControl(removeIcon),
      mouseUpHandler: onRemoveControlClick,
      cornerSize: 40,
    });

    fabric.Object.prototype.controls.addControl = new fabric.Control({
      x: 0.5,
      y: -0.5,
      offsetY: -24,
      offsetX: 24,
      cursorStyle: "pointer",
      render: this._renderControl(addIcon),
      mouseUpHandler: onAddControlClick,
      cornerSize: 40,
    });
  }

  _renderControl(icon) {
    return function renderControl(ctx, left, top, styleOverride, fabricObject) {
      let size = this.cornerSize;
      ctx.save();
      ctx.translate(left, top);
      ctx.rotate(fabric.util.degreesToRadians(fabricObject.angle));
      // Images are drawn from top left corner as the center
      // So we use -size/2 to center them
      ctx.drawImage(icon, -size / 2, -size / 2, size, size);
      ctx.restore();
    };
  }

  addFamilyMemberNode(name,gender,relatedMember){

    const label = new fabric.Text(name, {
      ...PedigreeChartCanvas.commonFamilyNodeConfig,
      fontSize: PedigreeChartCanvas.fontSize,
      fontFamily: PedigreeChartCanvas.fontFamily,
    });
  
    const shape = this._makeFamilyMemberNodeShape(label,gender);

  
    const familyMemberNode = new fabric.Group([shape, label], {
      ...PedigreeChartCanvas.commonFamilyNodeConfig,
      left: 150,
      top: 100,
      cornerSize: 25,
    });
  
    familyMemberNode.originConnectionLines = [];
    familyMemberNode.terminalConnectionLine = null;
  
    this.add(familyMemberNode);
  }

  _makeFamilyMemberNodeShape(label,gender){
    let shape;
    if (gender === "male") {
      shape = new fabric.Rect({
        ...PedigreeChartCanvas.commonFamilyNodeConfig,
        fill: "#7986cb",
        height: label.height + PedigreeChartCanvas.padding,
        width: label.width + PedigreeChartCanvas.padding,
        rx: 12,
        ry: 12,
      });
    } else {
      shape = new fabric.Circle({
        ...PedigreeChartCanvas.commonFamilyNodeConfig,
        fill: "#f06292",
        radius: label.width / 2 + 8,
      });
    }
    return shape;
  }


}
