import { fabric } from "fabric/dist/fabric";
import { makeImageElement } from "../utils/fabricUtils";
import removeIconSrc from "../assets/delete.svg";
import addIconSrc from "../assets/family.svg";

export default class PedigreeChartCanvas extends fabric.Canvas {
  static COMMON_FAMILY_NODE_CONFIG = { originX: "center", originY: "center" };
  static FAMILY_NODE_PADDING = 16;
  static FONT_SIZE = 50;
  static FONT_FAMILY = "Roboto, sans-serif";
  static DIMENSIONS = { width: 1024, height: 576 };
  static BACKGROUND_COLOR = "#e0e0e0";
  static CONNECTION_LINE_COLOR = "#282C34";

  init(onRemoveControlClick, onAddControlClick) {
    this.setBackgroundColor(PedigreeChartCanvas.BACKGROUND_COLOR);
    this.setDimensions(PedigreeChartCanvas.DIMENSIONS);
    this._createCustomControls(onRemoveControlClick, onAddControlClick);
    this.addFamilyMemberNode("Eve", "female");
    this.on("object:moving", this._trackFamilyMemberNodes);
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

  addFamilyMemberNode(name, gender, relatedFamilyMemberNode) {
    const familyMemberNode = this._makeFamilyMemberNode(name, gender);

    if (typeof relatedFamilyMemberNode !== "undefined") {
      const connectionLine = this._connectFamilyMemberNodes(
        familyMemberNode,
        relatedFamilyMemberNode
      );
      this.add(connectionLine);
      this.sendToBack(connectionLine);
    }

    this.add(familyMemberNode);
  }

  removeFamilyMemberNode(target) {

    // Nodes that shouldn't be removed
    if (this._isLoneNode(target)) {
      throw new Error("You can't remove lone nodes!");
    }
    if (this._isIntermediateNode(target)) {
      throw new Error("You can't remove intermediate nodes!");
    }
    //-----

    //Remove lines that terminate at this target
    if (this._hasTerminalConnectionLine(target)) {
      const terminalConnectionLine = target.terminalConnectionLine;

      this.remove(terminalConnectionLine);

      // We must also inform the node that line originated from of it its removal.
      const originNode = this._findFamilyMemberNodeById(
        terminalConnectionLine.fromNodeId
      );
      
      // This is done by removing it from that nodes originConnectionLines list.
      originNode.originConnectionLines = originNode.originConnectionLines.filter(
        (connectionLine) => connectionLine.toNodeId !== target.id
      );
    }


    this.remove(target);

    this.requestRenderAll();
  }

  _makeFamilyMemberNode(name, gender) {
    if (this._hasObjectWithId(name)) {
      throw new Error("A node with this name already exists!");
    }

    const label = new fabric.Text(name, {
      ...PedigreeChartCanvas.COMMON_FAMILY_NODE_CONFIG,
      fontSize: PedigreeChartCanvas.FONT_SIZE,
      fontFamily: PedigreeChartCanvas.FONT_FAMILY,
    });

    const shape = this._makeFamilyMemberNodeShape(label, gender);

    const familyMemberNode = new fabric.Group([shape, label], {
      ...PedigreeChartCanvas.COMMON_FAMILY_NODE_CONFIG,
      left: 150,
      top: 100,
      cornerSize: 25,
      id: name,
    });

    familyMemberNode.originConnectionLines = [];
    familyMemberNode.terminalConnectionLine = null;

    return familyMemberNode;
  }

  _makeFamilyMemberNodeShape(label, gender) {
    let shape;
    if (gender === "male") {
      shape = new fabric.Rect({
        ...PedigreeChartCanvas.COMMON_FAMILY_NODE_CONFIG,
        fill: "#7986cb",
        height: label.height + PedigreeChartCanvas.FAMILY_NODE_PADDING,
        width: label.width + PedigreeChartCanvas.FAMILY_NODE_PADDING,
        rx: 12,
        ry: 12,
      });
    } else {
      shape = new fabric.Circle({
        ...PedigreeChartCanvas.COMMON_FAMILY_NODE_CONFIG,
        fill: "#f06292",
        radius: label.width / 2 + PedigreeChartCanvas.FAMILY_NODE_PADDING,
      });
    }
    return shape;
  }

  _hasOriginConnectionLines(familyNode) {
    return familyNode.originConnectionLines.length > 0;
  }

  _hasTerminalConnectionLine(familyNode) {
    return Boolean(familyNode.terminalConnectionLine);
  }

  _isIntermediateNode(familyNode) {
    return (
      this._hasTerminalConnectionLine(familyNode) &&
      this._hasOriginConnectionLines(familyNode)
    );
  }

  _isLoneNode(familyNode) {
    return (
      !this._hasTerminalConnectionLine(familyNode) &&
      !this._hasOriginConnectionLines(familyNode)
    );
  }

  _trackFamilyMemberNodes(moveEvent) {
    const movingFamilyNode = moveEvent.target;
    const originLines = movingFamilyNode.originConnectionLines;
    const terminalLine = movingFamilyNode.terminalConnectionLine;

    if (this._hasOriginConnectionLines(movingFamilyNode)) {
      originLines.forEach((line) =>
        line.set({ x1: movingFamilyNode.left, y1: movingFamilyNode.top })
      );
    }

    if (this._hasTerminalConnectionLine(movingFamilyNode)) {
      terminalLine.set({ x2: movingFamilyNode.left, y2: movingFamilyNode.top });
    }

    this.renderAll();
  }

  _connectFamilyMemberNodes(fromNode, toNode) {
    const line = this._makeConnectionLine(
      [fromNode.left, fromNode.top, toNode.left, toNode.top],
      fromNode.id,
      toNode.id
    );

    // The connection lines that originate from this node
    // a Family node can have more than one origin connection line

    fromNode.originConnectionLines.push(line);

    // The connection line which terminates at this node
    //The toFamilyNode is drawn at the end (x2,y2) coords of this line.
    toNode.terminalConnectionLine = line;

    return line;
  }

  _hasObjectWithId(id) {
    return this.getObjects().filter((obj) => obj.id === id).length > 0;
  }

  _findFamilyMemberNodeById(id) {
    return this.getObjects().filter((obj) => obj.id === id)[0];
  }

  _makeConnectionLine(coords, fromNodeId, toNodeId) {
    return new fabric.Line(coords, {
      fill: PedigreeChartCanvas.CONNECTION_LINE_COLOR,
      stroke:PedigreeChartCanvas.CONNECTION_LINE_COLOR,
      strokeWidth: 5,
      selectable: false,
      evented: false,
      fromNodeId,
      toNodeId,
    });
  }
}
