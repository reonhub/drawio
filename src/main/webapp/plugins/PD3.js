/*****sidebar setting for digital triplet start *****/
Sidebar.prototype.init = function () {
  this.addSearchPalette(false);
  this.addD3TopicPalette(true);
  this.addD3InfoPalette(true);
  this.addD3PhysPalette(true);
};

/*****D3Topic start*****/
Sidebar.prototype.addD3TopicPalette = function (expand) {
  var sb = this;
  var fns = [
    this.createVertexTemplateEntry(
      "rounded=0;whiteSpace=wrap;html=1;pd3layer=topic;pd3type=action;fillColor=#ffe6cc;strokeColor=#d79b00;",
      120,
      60,
      "Function",
      "Function",
      null,
      null,
      "rect rectangle box"
    ),
    this.createVertexTemplateEntry(
      "rounded=0;whiteSpace=wrap;html=1;pd3layer=topic;pd3type=action;pd3action=start;fillColor=#ffe6cc;strokeColor=#d79b00;dashed=1;",
      120,
      60,
      "[Start]",
      "Start",
      null,
      null,
      "rect rectangle box"
    ),
    this.createVertexTemplateEntry(
      "rounded=0;whiteSpace=wrap;html=1;pd3layer=topic;fillColor=#ffe6cc;pd3type=action;pd3action=end;strokeColor=#d79b00;dashed=1;",
      120,
      60,
      "[End]",
      "End",
      null,
      null,
      "rect rectangle box"
    ),
    this.createVertexTemplateEntry(
      "text;html=1;strokeColor=none;pd3layer=topic;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;",
      40,
      20,
      "Text",
      "Text",
      null,
      null,
      "text textbox textarea label"
    ),
    this.createEdgeTemplateEntry('html=1;verticalAlign=bottom;endArrow=block;pd3layer=topic;pd3type=arrow;fillColor=#ffe6cc;strokeColor=#d79b00;', 80, 0, 'Input/Output', 'Input/Output', null, 'uml sequence message call invoke dispatch'),

    this.addEntry('uml relation', function () {
      var edge = new mxCell('Control', new mxGeometry(0, 0, 0, 0), 'endArrow=block;endFill=1;html=1;edgeStyle=orthogonalEdgeStyle;align=center;verticalAlign=bottom;pd3layer=topic;pd3type=arrow;fillColor=#ffe6cc;strokeColor=#d79b00;');
      edge.geometry.setTerminalPoint(new mxPoint(0, 0), true);
      edge.geometry.setTerminalPoint(new mxPoint(0, 50), false);
      edge.geometry.relative = true;
      edge.geometry.x = -1;
      edge.edge = true;

      var cell = new mxCell('Reason', new mxGeometry(0, 0, 0, 0), 'edgeLabel;resizable=0;html=1;align=left;verticalAlign=middle;');
      cell.geometry.relative = true;
      cell.setConnectable(false);
      cell.vertex = true;
      edge.insert(cell);

      return sb.createEdgeTemplateFromCells([edge], 0, 50, 'Control');
    }),
    this.addEntry('uml relation', function () {
      var edge = new mxCell('Mechanism', new mxGeometry(0, 0, 0, 0), 'endArrow=block;endFill=1;html=1;edgeStyle=orthogonalEdgeStyle;align=left;verticalAlign=middle;pd3layer=topic;pd3type=arrow;fillColor=#ffe6cc;strokeColor=#d79b00;');
      edge.geometry.setTerminalPoint(new mxPoint(0, 0), true);
      edge.geometry.setTerminalPoint(new mxPoint(0, -50), false);
      edge.geometry.relative = true;
      edge.edge = true;

      return sb.createEdgeTemplateFromCells([edge], 0, -50, 'Mechanism');
    }),
    this.createVertexTemplateEntry('swimlane;pd3layer=topic;pd3ytpe=container;fillColor=#ffe6cc;strokeColor=#d79b00;', 200, 200, 'Container', 'Container', null, null, 'container swimlane lane pool group'),

    this.addEntry('uml sequence invoke call delegation synchronous invocation activation', function () {
      var cell1 = new mxCell('Data Collect', new mxGeometry(0, 0, 120, 60), 'rounded=0;whiteSpace=wrap;html=1;pd3layer=topic;pd3type=action;pd3action=ECDC;fillColor=#ffe6cc;strokeColor=#d79b00;');
      cell1.vertex = true;
      var cell2 = new mxCell('Info Analyze', new mxGeometry(190, 0, 120, 60), 'rounded=0;whiteSpace=wrap;html=1;pd3layer=topic;pd3type=action;pd3action=ECIA;fillColor=#ffe6cc;strokeColor=#d79b00;');
      cell2.vertex = true;
      var cell3 = new mxCell('Evaluate', new mxGeometry(380, 0, 120, 60), 'rounded=0;whiteSpace=wrap;html=1;pd3layer=topic;pd3type=action;pd3action=ECEV;fillColor=#ffe6cc;strokeColor=#d79b00;');
      cell3.vertex = true;
      var cell4 = new mxCell('Decide', new mxGeometry(570, 0, 120, 60), 'rounded=0;whiteSpace=wrap;html=1;pd3layer=topic;pd3type=action;pd3action=ECD;fillColor=#ffe6cc;strokeColor=#d79b00;');
      cell4.vertex = true;
      var cell5 = new mxCell('Execute', new mxGeometry(760, 0, 120, 60), 'rounded=0;whiteSpace=wrap;html=1;pd3layer=topic;pd3type=action;pd3action=ECEX;fillColor=#ffe6cc;strokeColor=#d79b00;');
      cell5.vertex = true;

      var edge1 = new mxCell('input/output', new mxGeometry(0, 0, 0, 0), 'html=1;verticalAlign=bottom;endArrow=block;entryX=0;entryY=0.5;pd3layer=topic;pd3type=arrow;fillColor=#ffe6cc;strokeColor=#d79b00;');
      edge1.geometry.setTerminalPoint(new mxPoint(-70, 30), true);
      edge1.geometry.setTerminalPoint(new mxPoint(0, 30), false);
      edge1.geometry.relative = true;
      edge1.edge = true;

      var edge2 = new mxCell('input/output', new mxGeometry(0, 0, 0, 0), 'html=1;verticalAlign=bottom;endArrow=block;endSize=8;entryX=0;entryY=0.5;exitX=1;exitY=0.5;pd3layer=topic;pd3type=arrow;fillColor=#ffe6cc;strokeColor=#d79b00;');
      edge2.geometry.setTerminalPoint(new mxPoint(120, 30), true);
      edge2.geometry.setTerminalPoint(new mxPoint(190, 30), false);
      edge2.geometry.relative = true;
      edge2.edge = true;

      var edge3 = new mxCell('input/output', new mxGeometry(0, 0, 0, 0), 'html=1;verticalAlign=bottom;endArrow=block;endSize=8;entryX=0;entryY=0.5;exitX=1;exitY=0.5;pd3layer=topic;pd3type=arrow;fillColor=#ffe6cc;strokeColor=#d79b00;');
      edge3.geometry.setTerminalPoint(new mxPoint(310, 30), true);
      edge3.geometry.setTerminalPoint(new mxPoint(380, 30), false);
      edge3.geometry.relative = true;
      edge3.edge = true;

      var edge4 = new mxCell('input/output', new mxGeometry(0, 0, 0, 0), 'html=1;verticalAlign=bottom;endArrow=block;endSize=8;entryX=0;entryY=0.5;exitX=1;exitY=0.5;pd3layer=topic;pd3type=arrow;fillColor=#ffe6cc;strokeColor=#d79b00;');
      edge4.geometry.setTerminalPoint(new mxPoint(500, 30), true);
      edge4.geometry.setTerminalPoint(new mxPoint(570, 30), false);
      edge4.geometry.relative = true;
      edge4.edge = true;

      var edge5 = new mxCell('input/output', new mxGeometry(0, 0, 0, 0), 'html=1;verticalAlign=bottom;endArrow=block;endSize=8;entryX=0;entryY=0.5;exitX=1;exitY=0.5;pd3layer=topic;pd3type=arrow;fillColor=#ffe6cc;strokeColor=#d79b00;');
      edge5.geometry.setTerminalPoint(new mxPoint(690, 30), true);
      edge5.geometry.setTerminalPoint(new mxPoint(760, 30), false);
      edge5.geometry.relative = true;
      edge5.edge = true;

      var edge6 = new mxCell('input/output', new mxGeometry(0, 0, 0, 0), 'html=1;verticalAlign=bottom;endArrow=block;endSize=8;exitX=1;exitY=0.5;pd3layer=topic;pd3type=arrow;fillColor=#ffe6cc;strokeColor=#d79b00;');
      edge6.geometry.setTerminalPoint(new mxPoint(880, 30), true);
      edge6.geometry.setTerminalPoint(new mxPoint(950, 30), false);
      edge6.geometry.relative = true;
      edge6.edge = true;

      cell1.insertEdge(edge1, false);
      cell1.insertEdge(edge2, true);
      cell2.insertEdge(edge2, false);
      cell2.insertEdge(edge3, true);
      cell3.insertEdge(edge3, false);
      cell3.insertEdge(edge4, true);
      cell4.insertEdge(edge4, false);
      cell4.insertEdge(edge5, true);
      cell5.insertEdge(edge5, false);
      cell5.insertEdge(edge6, true);

      return sb.createVertexTemplateFromCells([cell1, cell2, cell3, cell4, cell5, edge1, edge2, edge3, edge4, edge5, edge6], 640, 60, 'Engineering Cycle');
    }),


  ];
  this.addPaletteFunctions("D3Topic", "D3Topic", null != expand ? expand : true, fns);
};
/*****D3Topic end*****/

/*****D3Info start*****/
Sidebar.prototype.addD3InfoPalette = function (expand) {
  var sb = this;
  var fns = [
    this.createVertexTemplateEntry(
      "rounded=0;whiteSpace=wrap;html=1;pd3layer=info;pd3type=action;fillColor=#dae8fc;strokeColor=#6c8ebf;",
      120,
      60,
      "Function",
      "Function",
      null,
      null,
      "rect rectangle box"
    ),
    this.createVertexTemplateEntry(
      "rounded=0;whiteSpace=wrap;html=1;pd3layer=info;pd3type=action;pd3action=start;fillColor=#dae8fc;strokeColor=#6c8ebf;dashed=1;",
      120,
      60,
      "[Start]",
      "Start",
      null,
      null,
      "rect rectangle box"
    ),
    this.createVertexTemplateEntry(
      "rounded=0;whiteSpace=wrap;html=1;pd3layer=info;pd3type=action;pd3action=end;fillColor=#dae8fc;strokeColor=#6c8ebf;dashed=1;",
      120,
      60,
      "[End]",
      "End",
      null,
      null,
      "rect rectangle box"
    ),
    this.createVertexTemplateEntry(
      "text;html=1;strokeColor=none;pd3layer=info;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;",
      40,
      20,
      "Text",
      "Text",
      null,
      null,
      "text textbox textarea label"
    ),
    this.createEdgeTemplateEntry('html=1;verticalAlign=bottom;endArrow=block;pd3layer=info;pd3type=arrow;fillColor=#dae8fc;strokeColor=#6c8ebf;', 80, 0, 'Input/Output', 'Input/Output', null, 'uml sequence message call invoke dispatch'),

    this.addEntry('uml relation', function () {
      var edge = new mxCell('Control', new mxGeometry(0, 0, 0, 0), 'endArrow=block;endFill=1;html=1;edgeStyle=orthogonalEdgeStyle;align=center;verticalAlign=bottom;pd3layer=info;pd3type=arrow;fillColor=#dae8fc;strokeColor=#6c8ebf;');
      edge.geometry.setTerminalPoint(new mxPoint(0, 0), true);
      edge.geometry.setTerminalPoint(new mxPoint(0, 50), false);
      edge.geometry.relative = true;
      edge.geometry.x = -1;
      edge.edge = true;

      var cell = new mxCell('Reason', new mxGeometry(0, 0, 0, 0), 'edgeLabel;resizable=0;html=1;align=left;verticalAlign=middle;');
      cell.geometry.relative = true;
      cell.setConnectable(false);
      cell.vertex = true;
      edge.insert(cell);

      return sb.createEdgeTemplateFromCells([edge], 0, 50, 'Control');
    }),
    this.addEntry('uml relation', function () {
      var edge = new mxCell('Mechanism', new mxGeometry(0, 0, 0, 0), 'endArrow=block;endFill=1;html=1;edgeStyle=orthogonalEdgeStyle;align=left;verticalAlign=middle;pd3layer=info;pd3type=arrow;fillColor=#dae8fc;strokeColor=#6c8ebf;');
      edge.geometry.setTerminalPoint(new mxPoint(0, 0), true);
      edge.geometry.setTerminalPoint(new mxPoint(0, -50), false);
      edge.geometry.relative = true;
      edge.edge = true;

      return sb.createEdgeTemplateFromCells([edge], 0, -50, 'Mechanism');
    }),
    this.createVertexTemplateEntry('swimlane;pd3layer=info;pd3type=container;fillColor=#dae8fc;strokeColor=#6c8ebf;', 200, 200, 'Container', 'Container', null, null, 'container swimlane lane pool group'),
  ];
  this.addPaletteFunctions("D3Info", "D3Info", null != expand ? expand : true, fns);
};
/*****D3Info end*****/

/*****D3Phys start*****/
Sidebar.prototype.addD3PhysPalette = function (expand) {
  var sb = this;
  var fns = [
    this.createVertexTemplateEntry(
      "rounded=0;whiteSpace=wrap;html=1;pd3layer=phys;pd3type=action;pd3action=start;fillColor=#d5e8d4;strokeColor=#82b366;",
      120,
      60,
      "Function",
      "Function",
      null,
      null,
      "rect rectangle box"
    ),
    this.createVertexTemplateEntry(
      "rounded=0;whiteSpace=wrap;html=1;pd3layer=phys;pd3type=action;pd3action=end;fillColor=#d5e8d4;strokeColor=#82b366;dashed=1;",
      120,
      60,
      "[Start]",
      "Start",
      null,
      null,
      "rect rectangle box"
    ),
    this.createVertexTemplateEntry(
      "rounded=0;whiteSpace=wrap;html=1;pd3layer=phys;pd3type=action;fillColor=#d5e8d4;strokeColor=#82b366;dashed=1;",
      120,
      60,
      "[End]",
      "End",
      null,
      null,
      "rect rectangle box"
    ),
    this.createVertexTemplateEntry(
      "text;html=1;strokeColor=none;pd3layer=phys;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;",
      40,
      20,
      "Text",
      "Text",
      null,
      null,
      "text textbox textarea label"
    ),
    this.createEdgeTemplateEntry('html=1;verticalAlign=bottom;endArrow=block;pd3layer=phys;pd3type=arrow;fillColor=#d5e8d4;strokeColor=#82b366;', 80, 0, 'Input/Output', 'Input/Output', null, 'uml sequence message call invoke dispatch'),

    this.addEntry('uml relation', function () {
      var edge = new mxCell('Control', new mxGeometry(0, 0, 0, 0), 'endArrow=block;endFill=1;html=1;edgeStyle=orthogonalEdgeStyle;align=center;verticalAlign=bottom;pd3layer=phys;pd3type=arrow;fillColor=#d5e8d4;strokeColor=#82b366;');
      edge.geometry.setTerminalPoint(new mxPoint(0, 0), true);
      edge.geometry.setTerminalPoint(new mxPoint(0, 50), false);
      edge.geometry.relative = true;
      edge.geometry.x = -1;
      edge.edge = true;

      var cell = new mxCell('Reason', new mxGeometry(0, 0, 0, 0), 'edgeLabel;resizable=0;html=1;align=left;verticalAlign=middle;');
      cell.geometry.relative = true;
      cell.setConnectable(false);
      cell.vertex = true;
      edge.insert(cell);

      return sb.createEdgeTemplateFromCells([edge], 0, 50, 'Control');
    }),
    this.addEntry('uml relation', function () {
      var edge = new mxCell('Mechanism', new mxGeometry(0, 0, 0, 0), 'endArrow=block;endFill=1;html=1;edgeStyle=orthogonalEdgeStyle;align=left;verticalAlign=middle;pd3layer=phys;pd3type=arrow;fillColor=#d5e8d4;strokeColor=#82b366;');
      edge.geometry.setTerminalPoint(new mxPoint(0, 0), true);
      edge.geometry.setTerminalPoint(new mxPoint(0, -50), false);
      edge.geometry.relative = true;
      edge.edge = true;

      return sb.createEdgeTemplateFromCells([edge], 0, -50, 'Mechanism');
    }),
    this.createVertexTemplateEntry('swimlane;pd3layer=phys;pd3type=container;fillColor=#d5e8d4;strokeColor=#82b366;', 200, 200, 'Container', 'Container', null, null, 'container swimlane lane pool group'),
  ];
  this.addPaletteFunctions("D3Phys", "D3Phys", null != expand ? expand : true, fns);
};
/*****D3Phys end*****/
/*****sidebar setting for digital triplet end *****/

/*****setting for "compressXml:false" start*****/
var menusInit = Menus.prototype.init;
Menus.prototype.init = function () {
  menusInit.apply(this, arguments);
  var editorUi = this.editorUi;
  var graph = editorUi.editor.graph;

  editorUi.actions.put('exportXml', new Action(mxResources.get('formatXml') + '...', function () {
    var div = document.createElement('div');
    div.style.whiteSpace = 'nowrap';
    var noPages = editorUi.pages == null || editorUi.pages.length <= 1;

    var hd = document.createElement('h3');
    mxUtils.write(hd, mxResources.get('formatXml'));
    hd.style.cssText = 'width:100%;text-align:center;margin-top:0px;margin-bottom:4px';
    div.appendChild(hd);

    var selection = editorUi.addCheckbox(div, mxResources.get('selectionOnly'),
      false, graph.isSelectionEmpty());
    var compressed = editorUi.addCheckbox(div, mxResources.get('compressed'), false);
    var pages = editorUi.addCheckbox(div, mxResources.get('allPages'), !noPages, noPages);
    pages.style.marginBottom = '16px';

    mxEvent.addListener(selection, 'change', function () {
      if (selection.checked) {
        pages.setAttribute('disabled', 'disabled');
      } else {
        pages.removeAttribute('disabled');
      }
    });

    var dlg = new CustomDialog(editorUi, div, mxUtils.bind(this, function () {
      editorUi.downloadFile('xml', !compressed.checked, null,
        !selection.checked, noPages || !pages.checked);
    }), null, mxResources.get('export'));

    editorUi.showDialog(dlg.container, 300, 180, true, true);
  }));
}
/*****setting of "compressXml:false" end*****/


/*****setting for the graph made through hover icon, partycularly connection edge start*****/
Graph.prototype.isCloneConnectSource = function (source) {
  var layout = null;

  if (this.layoutManager != null) {
    layout = this.layoutManager.getLayout(this.model.getParent(source));
  }

  return this.isTableRow(source) || this.isTableCell(source) ||
    (layout != null && layout.constructor == mxStackLayout);
};

/**
 * Adds a connection to the given vertex.
 */
Graph.prototype.connectVertex = function (source, direction, length, evt, forceClone, ignoreCellAt, createTarget, done) {
  ignoreCellAt = (ignoreCellAt) ? ignoreCellAt : false;

  // Ignores relative edge labels
  if (source.geometry.relative && this.model.isEdge(source.parent)) {
    return [];
  }

  // Uses parent for relative child cells
  while (source.geometry.relative && this.model.isVertex(source.parent)) {
    source = source.parent;
  }

  // Handles clone connect sources
  var cloneSource = this.isCloneConnectSource(source);
  var composite = (cloneSource) ? source : this.getCompositeParent(source);

  var pt = (source.geometry.relative && source.parent.geometry != null) ?
    new mxPoint(source.parent.geometry.width * source.geometry.x,
      source.parent.geometry.height * source.geometry.y) :
    new mxPoint(composite.geometry.x, composite.geometry.y);

  if (direction == mxConstants.DIRECTION_NORTH) {
    pt.x += composite.geometry.width / 2;
    pt.y -= length;
  } else if (direction == mxConstants.DIRECTION_SOUTH) {
    pt.x += composite.geometry.width / 2;
    pt.y += composite.geometry.height + length;
  } else if (direction == mxConstants.DIRECTION_WEST) {
    pt.x -= length;
    pt.y += composite.geometry.height / 2;
  } else {
    pt.x += composite.geometry.width + length;
    pt.y += composite.geometry.height / 2;
  }

  var parentState = this.view.getState(this.model.getParent(source));
  var s = this.view.scale;
  var t = this.view.translate;
  var dx = t.x * s;
  var dy = t.y * s;

  if (parentState != null && this.model.isVertex(parentState.cell)) {
    dx = parentState.x;
    dy = parentState.y;
  }

  // Workaround for relative child cells
  if (this.model.isVertex(source.parent) && source.geometry.relative) {
    pt.x += source.parent.geometry.x;
    pt.y += source.parent.geometry.y;
  }

  // Checks actual end point of edge for target cell
  var rect = (!ignoreCellAt) ? new mxRectangle(dx + pt.x * s, dy + pt.y * s).grow(40) : null;
  var tempCells = (rect != null) ? this.getCells(0, 0, 0, 0, null, null, rect) : null;
  var target = (tempCells != null && tempCells.length > 0) ? tempCells.reverse()[0] : null;
  var keepParent = false;

  if (target != null && this.model.isAncestor(target, source)) {
    keepParent = true;
    target = null;
  }

  // Checks for swimlane at drop location
  if (target == null) {
    var temp = this.getSwimlaneAt(dx + pt.x * s, dy + pt.y * s);

    if (temp != null) {
      keepParent = false;
      target = temp;
    }
  }

  // Checks if target or ancestor is locked
  var temp = target;

  while (temp != null) {
    if (this.isCellLocked(temp)) {
      target = null;
      break;
    }

    temp = this.model.getParent(temp);
  }

  // Checks if source and target intersect
  if (target != null) {
    var sourceState = this.view.getState(source);
    var targetState = this.view.getState(target);

    if (sourceState != null && targetState != null && mxUtils.intersects(sourceState, targetState)) {
      target = null;
    }
  }

  var duplicate = (!mxEvent.isShiftDown(evt) || mxEvent.isControlDown(evt)) || forceClone;

  if (duplicate) {
    if (direction == mxConstants.DIRECTION_NORTH) {
      pt.y -= source.geometry.height / 2;
    } else if (direction == mxConstants.DIRECTION_SOUTH) {
      pt.y += source.geometry.height / 2;
    } else if (direction == mxConstants.DIRECTION_WEST) {
      pt.x -= source.geometry.width / 2;
    } else {
      pt.x += source.geometry.width / 2;
    }
  }

  // Uses connectable parent vertex if one exists
  // TODO: Fix using target as parent for swimlane
  if (target != null && !this.isCellConnectable(target) && !this.isSwimlane(target)) {
    var parent = this.getModel().getParent(target);

    if (this.getModel().isVertex(parent) && this.isCellConnectable(parent)) {
      target = parent;
    }
  }

  if (target == source || this.model.isEdge(target) ||
    !this.isCellConnectable(target) &&
    !this.isSwimlane(target)) {
    target = null;
  }

  var result = [];
  var swimlane = target != null && this.isSwimlane(target);
  var realTarget = (!swimlane) ? target : null;

  var execute = mxUtils.bind(this, function (targetCell) {
    if (createTarget == null || targetCell != null || (target == null && cloneSource)) {
      this.model.beginUpdate();
      try {
        if (realTarget == null && duplicate) {
          // Handles relative children
          var cellToClone = (targetCell != null) ? targetCell : source;
          var geo = this.getCellGeometry(cellToClone);

          while (geo != null && geo.relative) {
            cellToClone = this.getModel().getParent(cellToClone);
            geo = this.getCellGeometry(cellToClone);
          }

          // Handles composite cells for cloning
          cellToClone = (cloneSource) ? source : this.getCompositeParent(cellToClone);
          realTarget = (targetCell != null) ? targetCell : this.duplicateCells([cellToClone], false)[0];

          if (targetCell != null) {
            this.addCells([realTarget], this.model.getParent(source), null, null, null, true);
          }

          var geo = this.getCellGeometry(realTarget);

          if (geo != null) {
            geo.x = pt.x - geo.width / 2;
            geo.y = pt.y - geo.height / 2;
          }

          if (swimlane) {
            this.addCells([realTarget], target, null, null, null, true);
            target = null;
          } else if (duplicate && target == null && !keepParent && !cloneSource) {
            this.addCells([realTarget], this.getDefaultParent(), null, null, null, true);
          }
        }

        var edge = ((mxEvent.isControlDown(evt) && mxEvent.isShiftDown(evt) && duplicate) ||
          (target == null && cloneSource)) ? null : this.insertEdge(this.model.getParent(source),
          null, '', source, realTarget, this.createCurrentEdgeStyle());

        /*****modification part for digital triplet start*****/
        var style = [];
        style = realTarget.style.split(';');
        var edgestyle = "";
        for (var i = 0; i < style.length; i++) {
          if (style[i].indexOf('pd3layer') !== -1 || style[i].indexOf('fillColor') !== -1 || style[i].indexOf('strokeColor') !== -1) {
            edgestyle = edgestyle + style[i] + ";";
          }
        }
        edgestyle = edgestyle + "pd3type=arrow";
        edge.style = edge.style + edgestyle;
        /*****modification part for digital triplet end*****/
        // Inserts edge before source
        if (edge != null && this.connectionHandler.insertBeforeSource) {
          var index = null;
          var tmp = source;

          while (tmp.parent != null && tmp.geometry != null &&
            tmp.geometry.relative && tmp.parent != edge.parent) {
            tmp = this.model.getParent(tmp);
          }

          if (tmp != null && tmp.parent != null && tmp.parent == edge.parent) {
            var index = tmp.parent.getIndex(tmp);
            this.model.add(tmp.parent, edge, index);
          }
        }

        // Special case: Click on west icon puts clone before cell
        if (target == null && realTarget != null && source.parent != null &&
          cloneSource && direction == mxConstants.DIRECTION_WEST) {
          var index = source.parent.getIndex(source);
          this.model.add(source.parent, realTarget, index);
        }

        if (edge != null) {
          result.push(edge);
        }

        if (target == null && realTarget != null) {
          result.push(realTarget);
        }

        if (realTarget == null && edge != null) {
          edge.geometry.setTerminalPoint(pt, false);
        }

        if (edge != null) {
          this.fireEvent(new mxEventObject('cellsInserted', 'cells', [edge]));
        }
      } finally {
        this.model.endUpdate();
      }
    }

    if (done != null) {
      done(result);
    } else {
      return result;
    }
  });

  if (createTarget != null && realTarget == null && duplicate &&
    (target != null || !cloneSource)) {
    createTarget(dx + pt.x * s, dy + pt.y * s, execute);
  } else {
    return execute(realTarget);
  }
};

HoverIcons.prototype.drag = function (evt, x, y) {
  this.graph.currentEdgeStyle.pd3type='';
  this.graph.currentEdgeStyle.pd3layer='';
  this.graph.popupMenuHandler.hideMenu();
  this.graph.stopEditing(false);

  // Checks if state was removed in call to stopEditing above
  if (this.currentState != null) {
    this.graph.connectionHandler.start(this.currentState, x, y);
    this.graph.isMouseTrigger = mxEvent.isMouseEvent(evt);
    this.graph.isMouseDown = true;

    var handler = this.graph.selectionCellsHandler.getHandler(this.currentState.cell);

    var style = [];
    var pd3layer_source = "",
      fillColor_source = "",
      strokeColor_source = "";
    style = this.currentState.cell.style.split(';');
    for (var i = 0; i < style.length; i++) {
      if (style[i].indexOf('pd3layer') !== -1) {
        pd3layer_source = style[i].replace('pd3layer=', '');
      } else if (style[i].indexOf('fillColor') !== -1) {
        fillColor_source = style[i].replace('fillColor=', '');
      } else if (style[i].indexOf('strokeColor') !== -1) {
        strokeColor_source = style[i].replace('strokeColor=', '');
      }
    }

    // Ctrl+shift drag sets source constraint
    var es = this.graph.connectionHandler.edgeState;

    this.graph.currentEdgeStyle.pd3layer = pd3layer_source;
    this.graph.currentEdgeStyle.fillColor = fillColor_source;
    this.graph.currentEdgeStyle.strokeColor = strokeColor_source;
    this.graph.currentEdgeStyle.pd3type = "arrow"

    es.style.pd3layer = pd3layer_source;
    es.style.fillColor = fillColor_source;
    es.style.strokeColor = strokeColor_source;
    es.style.pd3type = "arrow";

    es.cell.style = es.cell.style+"pd3layer="+pd3layer_source+";" + "pd3type=arrow;"+"fillColor="+fillColor_source+";"+"strokeColor="+strokeColor_source+";";

    if (handler != null) {
      handler.setHandlesVisible(false);
    }

    if (evt != null && mxEvent.isShiftDown(evt) && mxEvent.isControlDown(evt) && es != null &&
      mxUtils.getValue(es.style, mxConstants.STYLE_EDGE, null) === 'orthogonalEdgeStyle') {
      var direction = this.getDirection();
      es.cell.style = mxUtils.setStyle(es.cell.style, 'sourcePortConstraint', direction);
      es.style['sourcePortConstraint'] = direction;
    }
    
  }
};
/*****setting for the graph made through hover icon, partycularly connection edge end*****/
mxConnectionHandler.prototype.mouseDown = function (a, b) {
  this.mouseDownCounter++;
  if (this.isEnabled() && this.graph.isEnabled() && !b.isConsumed() && !this.isConnecting() && this.isStartEvent(b)) {
    null != this.constraintHandler.currentConstraint && null != this.constraintHandler.currentFocus && null != this.constraintHandler.currentPoint ? (this.sourceConstraint = this.constraintHandler.currentConstraint, this.previous = this.constraintHandler.currentFocus, this.first = this.constraintHandler.currentPoint.clone()) : this.first = new mxPoint(b.getGraphX(), b.getGraphY());
    var pd3layer_source = "",
      fillColor_source = "",
      strokeColor_source = "";
    pd3layer_source = b.sourceState.style['pd3layer'];
    fillColor_source = b.sourceState.style['fillColor'];
    strokeColor_source = b.sourceState.style['strokeColor'];
    this.edgeState = this.createEdgeState(b);
    this.graph.connectionHandler.edgeState['style'].pd3layer = pd3layer_source;
    this.graph.connectionHandler.edgeState['style'].fillColor = fillColor_source;
    this.graph.connectionHandler.edgeState['style'].strokeColor = strokeColor_source;
    this.graph.currentEdgeStyle.pd3layer = pd3layer_source;
    this.graph.currentEdgeStyle.fillColor = fillColor_source;
    this.graph.currentEdgeStyle.strokeColor = strokeColor_source;
    this.mouseDownCounter = 1;
    this.waypointsEnabled && null == this.shape && (this.waypoints = null, this.shape = this.createShape(), null != this.edgeState && this.shape.apply(this.edgeState));
    if (null == this.previous && null != this.edgeState) {
      var c = this.graph.getPointForEvent(b.getEvent());
      this.edgeState.cell.geometry.setTerminalPoint(c, !0)
    }
    this.fireEvent(new mxEventObject(mxEvent.START, "state", this.previous));
    b.consume()
  }
  this.selectedIcon = this.icon;
  this.icon = null
};

EditorUi.prototype.updateActionStates = function () {
  var a = this.editor.graph,
    c = !a.isSelectionEmpty(),
    d = !1,
    b = !1,
    f = !1,
    e = a.getSelectionCells();
  if (null != e)
    for (var h = 0; h < e.length; h++) {
      var g = e[h];
      a.getModel().isEdge(g) && (f = !0);
      a.getModel().isVertex(g) && (d = !0, 0 < a.getModel().getChildCount(g) || a.isContainer(g)) && (b = !0);
      if (f && d) break
    }
  e = "cut copy bold italic underline delete duplicate editStyle editTooltip editLink backgroundColor borderColor edit toFront toBack lockUnlock solid dashed pasteSize dotted fillColor gradientColor shadow fontColor formattedText rounded toggleRounded sharp strokeColor".split(" ");
  for (h = 0; h < e.length; h++) this.actions.get(e[h]).setEnabled(c);
  this.actions.get("setAsDefaultStyle").setEnabled(1 == a.getSelectionCount());
  this.actions.get("setContainerIntheSameLayer").setEnabled(1 == a.getSelectionCount());
  this.actions.get("clearWaypoints").setEnabled(!a.isSelectionEmpty());
  this.actions.get("copySize").setEnabled(1 == a.getSelectionCount());
  this.actions.get("turn").setEnabled(!a.isSelectionEmpty());
  this.actions.get("curved").setEnabled(f);
  this.actions.get("rotation").setEnabled(d);
  this.actions.get("wordWrap").setEnabled(d);
  this.actions.get("autosize").setEnabled(d);
  f = d && 1 == a.getSelectionCount();
  this.actions.get("group").setEnabled(1 < a.getSelectionCount() || f && !a.isContainer(a.getSelectionCell()));
  this.actions.get("ungroup").setEnabled(b);
  this.actions.get("removeFromGroup").setEnabled(f && a.getModel().isVertex(a.getModel().getParent(a.getSelectionCell())));
  a.view.getState(a.getSelectionCell());
  this.menus.get("navigation").setEnabled(c || null != a.view.currentRoot);
  this.actions.get("collapsible").setEnabled(d && (a.isContainer(a.getSelectionCell()) || 0 < a.model.getChildCount(a.getSelectionCell())));
  this.actions.get("home").setEnabled(null != a.view.currentRoot);
  this.actions.get("exitGroup").setEnabled(null != a.view.currentRoot);
  this.actions.get("enterGroup").setEnabled(1 == a.getSelectionCount() && a.isValidRoot(a.getSelectionCell()));
  c = 1 == a.getSelectionCount() && a.isCellFoldable(a.getSelectionCell());
  this.actions.get("expand").setEnabled(c);
  this.actions.get("collapse").setEnabled(c);
  this.actions.get("editLink").setEnabled(1 == a.getSelectionCount());
  this.actions.get("openLink").setEnabled(1 == a.getSelectionCount() && null != a.getLinkForCell(a.getSelectionCell()));
  this.actions.get("guides").setEnabled(a.isEnabled());
  this.actions.get("grid").setEnabled(!this.editor.chromeless || this.editor.editable);
  c = a.isEnabled() && !a.isCellLocked(a.getDefaultParent());
  this.menus.get("layout").setEnabled(c);
  this.menus.get("insert").setEnabled(c);
  this.menus.get("direction").setEnabled(c && d);
  this.menus.get("align").setEnabled(c && d && 1 < a.getSelectionCount());
  this.menus.get("distribute").setEnabled(c && d && 1 < a.getSelectionCount());
  this.actions.get("selectVertices").setEnabled(c);
  this.actions.get("selectEdges").setEnabled(c);
  this.actions.get("selectAll").setEnabled(c);
  this.actions.get("selectNone").setEnabled(c);
  this.updatePasteActionStates()
};

EditorUi.prototype.createKeyHandler = function (a) {
  function c(a, c, d) {
    h.push(function () {
      if (!b.isSelectionEmpty() && b.isEnabled())
        if (c = null != c ? c : 1, d) {
          b.getModel().beginUpdate();
          try {
            for (var e = b.getSelectionCells(), f = 0; f < e.length; f++)
              if (b.getModel().isVertex(e[f]) && b.isCellResizable(e[f])) {
                var g = b.getCellGeometry(e[f]);
                null != g && (g = g.clone(), 37 == a ? g.width = Math.max(0, g.width - c) : 38 == a ? g.height = Math.max(0, g.height - c) : 39 == a ? g.width += c : 40 == a && (g.height += c), b.getModel().setGeometry(e[f], g))
              }
          } finally {
            b.getModel().endUpdate()
          }
        } else {
          var h = b.getSelectionCell(),
            g = b.model.getParent(h),
            e = null;
          1 == b.getSelectionCount() && b.model.isVertex(h) && null != b.layoutManager && !b.isCellLocked(h) && (e = b.layoutManager.getLayout(g));
          if (null != e && e.constructor == mxStackLayout) e = g.getIndex(h), 37 == a || 38 == a ? b.model.add(g, h, Math.max(0, e - 1)) : 39 != a && 40 != a || b.model.add(g, h, Math.min(b.model.getChildCount(g), e + 1));
          else {
            e = b.getMovableCells(b.getSelectionCells());
            h = [];
            for (f = 0; f < e.length; f++) g = b.getCurrentCellStyle(e[f]), "1" == mxUtils.getValue(g, "part", "0") ? (g = b.model.getParent(e[f]), b.model.isVertex(g) && 0 > mxUtils.indexOf(e, g) && h.push(g)) : h.push(e[f]);
            0 < h.length && (e = g = 0, 37 == a ? g = -c : 38 == a ? e = -c : 39 == a ? g = c : 40 == a && (e = c), b.moveCells(h, g, e))
          }
        }
    });
    null != g && window.clearTimeout(g);
    g = window.setTimeout(function () {
      if (0 < h.length) {
        b.getModel().beginUpdate();
        try {
          for (var a = 0; a < h.length; a++) h[a]();
          h = []
        } finally {
          b.getModel().endUpdate()
        }
      }
    }, 200)
  }
  var d = this,
    b = this.editor.graph,
    f = new mxKeyHandler(b),
    e = f.isEventIgnored;
  f.isEventIgnored = function (a) {
    return !(mxEvent.isShiftDown(a) && 9 == a.keyCode) && (!this.isControlDown(a) || mxEvent.isShiftDown(a) || 90 != a.keyCode && 89 != a.keyCode && 188 != a.keyCode && 190 != a.keyCode && 85 != a.keyCode) && (66 != a.keyCode && 73 != a.keyCode || !this.isControlDown(a) || this.graph.cellEditor.isContentEditing() && !mxClient.IS_FF && !mxClient.IS_SF) && e.apply(this, arguments)
  };
  f.isEnabledForEvent = function (a) {
    return !mxEvent.isConsumed(a) && this.isGraphEvent(a) && this.isEnabled() && (null == d.dialogs || 0 == d.dialogs.length)
  };
  f.isControlDown = function (a) {
    return mxEvent.isControlDown(a) || mxClient.IS_MAC && a.metaKey
  };
  var h = [],
    g = null,
    k = {
      37: mxConstants.DIRECTION_WEST,
      38: mxConstants.DIRECTION_NORTH,
      39: mxConstants.DIRECTION_EAST,
      40: mxConstants.DIRECTION_SOUTH
    },
    l = f.getFunction;
  mxKeyHandler.prototype.getFunction = function (a) {
    if (b.isEnabled()) {
      if (mxEvent.isShiftDown(a) && mxEvent.isAltDown(a)) {
        var e = d.actions.get(d.altShiftActions[a.keyCode]);
        if (null != e) return e.funct
      }
      if (9 == a.keyCode && mxEvent.isAltDown(a)) return b.cellEditor.isContentEditing() ? function () {
        document.execCommand("outdent", !1, null)
      } : mxEvent.isShiftDown(a) ? function () {
        b.selectParentCell()
      } : function () {
        b.selectChildCell()
      };
      if (null != k[a.keyCode] && !b.isSelectionEmpty())
        if (!this.isControlDown(a) && mxEvent.isShiftDown(a) && mxEvent.isAltDown(a)) {
          if (b.model.isVertex(b.getSelectionCell())) return function () {
            var c = b.connectVertex(b.getSelectionCell(), k[a.keyCode], b.defaultEdgeLength, a, !0);
            null != c && 0 < c.length && (1 == c.length && b.model.isEdge(c[0]) ? b.setSelectionCell(b.model.getTerminal(c[0], !1)) : b.setSelectionCell(c[c.length - 1]), b.scrollCellToVisible(b.getSelectionCell()), null != d.hoverIcons && d.hoverIcons.update(b.view.getState(b.getSelectionCell())))
          }
        } else return this.isControlDown(a) ? function () {
          c(a.keyCode, mxEvent.isShiftDown(a) ? b.gridSize : null, !0)
        } : function () {
          c(a.keyCode, mxEvent.isShiftDown(a) ? b.gridSize : null)
        }
    }
    return l.apply(this, arguments)
  };
  f.bindAction = mxUtils.bind(this, function (a, b, c, d) {
    var e = this.actions.get(c);
    null != e && (c = function () {
      e.isEnabled() && e.funct()
    }, b ? d ? f.bindControlShiftKey(a, c) : f.bindControlKey(a, c) : d ? f.bindShiftKey(a, c) : f.bindKey(a, c))
  });
  var n = this,
    m = f.escape;
  f.escape = function (a) {
    m.apply(this, arguments)
  };
  f.enter = function () {};
  f.bindControlShiftKey(36, function () {
    b.exitGroup()
  });
  f.bindControlShiftKey(35, function () {
    b.enterGroup()
  });
  f.bindShiftKey(36, function () {
    b.home()
  });
  f.bindKey(35, function () {
    b.refresh()
  });
  f.bindAction(107, !0, "zoomIn");
  f.bindAction(109, !0, "zoomOut");
  f.bindAction(80, !0, "print");
  f.bindAction(79, !0, "outline", !0);
  if (!this.editor.chromeless || this.editor.editable) f.bindControlKey(36, function () {
      b.isEnabled() && b.foldCells(!0)
    }), f.bindControlKey(35, function () {
      b.isEnabled() && b.foldCells(!1)
    }), f.bindControlKey(13, function () {
      n.ctrlEnter()
    }), f.bindAction(8, !1, "delete"),
    f.bindAction(8, !0, "deleteAll"), f.bindAction(46, !1, "delete"), f.bindAction(46, !0, "deleteAll"), f.bindAction(36, !1, "resetView"), f.bindAction(72, !0, "fitWindow", !0), f.bindAction(74, !0, "fitPage"), f.bindAction(74, !0, "fitTwoPages", !0), f.bindAction(48, !0, "customZoom"), f.bindAction(82, !0, "turn"), f.bindAction(82, !0, "clearDefaultStyle", !0), f.bindAction(83, !0, "save"), f.bindAction(83, !0, "saveAs", !0), f.bindAction(65, !0, "selectAll"), f.bindAction(65, !0, "selectNone", !0), f.bindAction(73, !0, "selectVertices", !0), f.bindAction(69, !0, "selectEdges", !0), f.bindAction(69, !0, "editStyle"), f.bindAction(66, !0, "bold"), f.bindAction(66, !0, "toBack", !0), f.bindAction(70, !0, "toFront", !0), f.bindAction(68, !0, "duplicate"), f.bindAction(68, !0, "setAsDefaultStyle", !0), f.bindAction(90, !0, "undo"), f.bindAction(89, !0, "autosize", !0), f.bindAction(88, !0, "cut"), f.bindAction(67, !0, "copy"), f.bindAction(188, !0, "setContainerIntheSameLayer", !0), f.bindAction(86, !0, "paste"), f.bindAction(71, !0, "group"), f.bindAction(77, !0, "editData"), f.bindAction(71, !0, "grid", !0), f.bindAction(73, !0, "italic"), f.bindAction(76, !0, "lockUnlock"),
    f.bindAction(76, !0, "layers", !0), f.bindAction(80, !0, "formatPanel", !0), f.bindAction(85, !0, "underline"), f.bindAction(85, !0, "ungroup", !0), f.bindAction(190, !0, "superscript"), f.bindAction(188, !0, "subscript"), f.bindAction(9, !1, "indent", !0), f.bindKey(13, function () {
      b.isEnabled() && b.startEditingAtCell()
    }), f.bindKey(113, function () {
      b.isEnabled() && b.startEditingAtCell()
    });
  mxClient.IS_WIN ? f.bindAction(89, !0, "redo") : f.bindAction(90, !0, "redo", !0);
  return f
};

Actions.prototype.init = function () {
  function a(a) {
    b.escape();
    a = b.deleteCells(b.getDeletableCells(b.getSelectionCells()), a);
    null != a && b.setSelectionCells(a)
  }
  var c = this.editorUi,
    d = c.editor,
    b = d.graph,
    f = function () {
      return Action.prototype.isEnabled.apply(this, arguments) && b.isEnabled()
    };
  this.addAction("new...", function () {
    b.openLink(c.getUrl())
  });
  this.addAction("open...", function () {
    window.openNew = !0;
    window.openKey = "open";
    c.openFile()
  });
  this.addAction("import...", function () {
    window.openNew = !1;
    window.openKey = "import";
    window.openFile = new OpenFile(mxUtils.bind(this, function () {
      c.hideDialog()
    }));
    window.openFile.setConsumer(mxUtils.bind(this, function (a, b) {
      try {
        var c = mxUtils.parseXml(a);
        d.graph.setSelectionCells(d.graph.importGraphModel(c.documentElement))
      } catch (n) {
        mxUtils.alert(mxResources.get("invalidOrMissingFile") + ": " + n.message)
      }
    }));
    c.showDialog((new OpenDialog(this)).container, 320, 220, !0, !0, function () {
      window.openFile = null
    })
  }).isEnabled = f;
  this.addAction("save", function () {
    c.saveFile(!1)
  }, null, null, Editor.ctrlKey + "+S").isEnabled = f;
  this.addAction("saveAs...", function () {
    c.saveFile(!0)
  }, null, null, Editor.ctrlKey + "+Shift+S").isEnabled = f;
  this.addAction("export...", function () {
    c.showDialog((new ExportDialog(c)).container, 300, 296, !0, !0)
  });
  this.addAction("editDiagram...", function () {
    var a = new EditDiagramDialog(c);
    c.showDialog(a.container, 620, 420, !0, !1);
    a.init()
  });
  this.addAction("pageSetup...", function () {
    c.showDialog((new PageSetupDialog(c)).container, 320, 220, !0, !0)
  }).isEnabled = f;
  this.addAction("print...", function () {
    c.showDialog((new PrintDialog(c)).container, 300, 180, !0, !0)
  }, null, "sprite-print", Editor.ctrlKey + "+P");
  this.addAction("preview", function () {
    mxUtils.show(b, null, 10, 10)
  });
  this.addAction("undo", function () {
    c.undo()
  }, null, "sprite-undo", Editor.ctrlKey + "+Z");
  this.addAction("redo", function () {
    c.redo()
  }, null, "sprite-redo", mxClient.IS_WIN ? Editor.ctrlKey + "+Y" : Editor.ctrlKey + "+Shift+Z");
  this.addAction("cut", function () {
    mxClipboard.cut(b)
  }, null, "sprite-cut", Editor.ctrlKey + "+X");
  this.addAction("copy", function () {
    try {
      mxClipboard.copy(b)
    } catch (g) {
      c.handleError(g)
    }
  }, null, "sprite-copy", Editor.ctrlKey + "+C");
  this.addAction("paste", function () {
    b.isEnabled() && !b.isCellLocked(b.getDefaultParent()) && mxClipboard.paste(b)
  }, !1, "sprite-paste", Editor.ctrlKey + "+V");
  this.addAction("pasteHere", function (a) {
    if (b.isEnabled() && !b.isCellLocked(b.getDefaultParent())) {
      b.getModel().beginUpdate();
      try {
        var c = mxClipboard.paste(b);
        if (null != c) {
          a = !0;
          for (var d = 0; d < c.length && a; d++) a = a && b.model.isEdge(c[d]);
          var e = b.view.translate,
            f = b.view.scale,
            g = e.x,
            h = e.y,
            e = null;
          if (1 == c.length && a) {
            var t = b.getCellGeometry(c[0]);
            null != t && (e = t.getTerminalPoint(!0))
          }
          e = null != e ? e : b.getBoundingBoxFromGeometry(c, a);
          if (null != e) {
            var v = Math.round(b.snap(b.popupMenuHandler.triggerX / f - g)),
              u = Math.round(b.snap(b.popupMenuHandler.triggerY / f - h));
            b.cellsMoved(c, v - e.x, u - e.y)
          }
        }
      } finally {
        b.getModel().endUpdate()
      }
    }
  });
  this.addAction("copySize", function (a) {
    a = b.getSelectionCell();
    b.isEnabled() && null != a && b.getModel().isVertex(a) && (a = b.getCellGeometry(a), null != a && (c.copiedSize = new mxRectangle(a.x, a.y, a.width, a.height)))
  }, null, null, "Alt+Shift+X");
  this.addAction("pasteSize", function (a) {
    if (b.isEnabled() && !b.isSelectionEmpty() && null != c.copiedSize) {
      b.getModel().beginUpdate();
      try {
        var d = b.getSelectionCells();
        for (a = 0; a < d.length; a++)
          if (b.getModel().isVertex(d[a])) {
            var e = b.getCellGeometry(d[a]);
            null != e && (e = e.clone(), e.width = c.copiedSize.width, e.height = c.copiedSize.height, b.getModel().setGeometry(d[a], e))
          }
      } finally {
        b.getModel().endUpdate()
      }
    }
  }, null, null, "Alt+Shift+V");
  this.addAction("delete", function (b) {
    a(null != b && mxEvent.isShiftDown(b))
  }, null, null, "Delete");
  this.addAction("deleteAll", function () {
    a(!0)
  }, null, null, Editor.ctrlKey + "+Delete");
  this.addAction("duplicate", function () {
    try {
      b.setSelectionCells(b.duplicateCells()),
        b.scrollCellToVisible(b.getSelectionCell())
    } catch (g) {
      c.handleError(g)
    }
  }, null, null, Editor.ctrlKey + "+D");
  this.put("turn", new Action(mxResources.get("turn") + " / " + mxResources.get("reverse"), function (a) {
    b.turnShapes(b.getSelectionCells(), null != a ? mxEvent.isShiftDown(a) : !1)
  }, null, null, Editor.ctrlKey + "+R"));
  this.addAction("selectVertices", function () {
    b.selectVertices(null, !0)
  }, null, null, Editor.ctrlKey + "+Shift+I");
  this.addAction("selectEdges", function () {
    b.selectEdges()
  }, null, null, Editor.ctrlKey + "+Shift+E");
  this.addAction("selectAll", function () {
    b.selectAll(null, !0)
  }, null, null, Editor.ctrlKey + "+A");
  this.addAction("selectNone", function () {
    b.clearSelection()
  }, null, null, Editor.ctrlKey + "+Shift+A");
  this.addAction("lockUnlock", function () {
    if (!b.isSelectionEmpty()) {
      b.getModel().beginUpdate();
      try {
        var a = b.isCellMovable(b.getSelectionCell()) ? 1 : 0;
        b.toggleCellStyles(mxConstants.STYLE_MOVABLE, a);
        b.toggleCellStyles(mxConstants.STYLE_RESIZABLE, a);
        b.toggleCellStyles(mxConstants.STYLE_ROTATABLE, a);
        b.toggleCellStyles(mxConstants.STYLE_DELETABLE, a);
        b.toggleCellStyles(mxConstants.STYLE_EDITABLE, a);
        b.toggleCellStyles("connectable", a)
      } finally {
        b.getModel().endUpdate()
      }
    }
  }, null, null, Editor.ctrlKey + "+L");
  this.addAction("home", function () {
    b.home()
  }, null, null, "Shift+Home");
  this.addAction("exitGroup", function () {
    b.exitGroup()
  }, null, null, Editor.ctrlKey + "+Shift+Home");
  this.addAction("enterGroup", function () {
    b.enterGroup()
  }, null, null, Editor.ctrlKey + "+Shift+End");
  this.addAction("collapse", function () {
    b.foldCells(!0)
  }, null, null, Editor.ctrlKey + "+Home");
  this.addAction("expand", function () {
    b.foldCells(!1)
  }, null, null, Editor.ctrlKey + "+End");
  this.addAction("toFront", function () {
    b.orderCells(!1)
  }, null, null, Editor.ctrlKey + "+Shift+F");
  this.addAction("toBack", function () {
    b.orderCells(!0)
  }, null, null, Editor.ctrlKey + "+Shift+B");
  this.addAction("group", function () {
    1 == b.getSelectionCount() ? b.setCellStyles("container", "1") : b.setSelectionCell(b.groupCells(null, 0))
  }, null, null, Editor.ctrlKey + "+G");
  this.addAction("ungroup", function () {
    if (b.isEnabled() && !b.isSelectionEmpty()) {
      var a = b.getSelectionCells();
      b.model.beginUpdate();
      try {
        var c = b.ungroupCells();
        if (null != a)
          for (var d = 0; d < a.length; d++) b.model.contains(a[d]) && (0 == b.model.getChildCount(a[d]) && b.model.isVertex(a[d]) && b.setCellStyles("container", "0", [a[d]]), c.push(a[d]))
      } finally {
        b.model.endUpdate()
      }
      b.setSelectionCells(c)
    }
  }, null, null, Editor.ctrlKey + "+Shift+U");
  this.addAction("removeFromGroup", function () {
    b.removeCellsFromParent()
  });
  this.addAction("edit", function () {
    b.isEnabled() && b.startEditingAtCell()
  }, null, null, "F2/Enter");
  this.addAction("editData...", function () {
    var a = b.getSelectionCell() || b.getModel().getRoot();
    c.showDataDialog(a)
  }, null, null, Editor.ctrlKey + "+M");
  this.addAction("editTooltip...", function () {
    if (b.isEnabled() && !b.isSelectionEmpty()) {
      var a = b.getSelectionCell(),
        d = "";
      if (mxUtils.isNode(a.value)) {
        var e = a.value.getAttribute("tooltip");
        null != e && (d = e)
      }
      d = new TextareaDialog(c, mxResources.get("editTooltip") + ":", d, function (c) {
        b.setTooltipForCell(a, c)
      });
      c.showDialog(d.container, 320, 200, !0, !0);
      d.init()
    }
  }, null, null, "Alt+Shift+T");
  this.addAction("openLink", function () {
    var a = b.getLinkForCell(b.getSelectionCell());
    null != a && b.openLink(a)
  });
  this.addAction("editLink...", function () {
    if (b.isEnabled() && !b.isSelectionEmpty()) {
      var a = b.getSelectionCell(),
        d = b.getLinkForCell(a) || "";
      c.showLinkDialog(d, mxResources.get("apply"), function (c) {
        c = mxUtils.trim(c);
        b.setLinkForCell(a, 0 < c.length ? c : null)
      })
    }
  }, null, null, "Alt+Shift+L");
  this.put("insertImage", new Action(mxResources.get("image") + "...", function () {
    b.isEnabled() && !b.isCellLocked(b.getDefaultParent()) && (b.clearSelection(), c.actions.get("image").funct())
  })).isEnabled = f;
  this.put("insertLink", new Action(mxResources.get("link") + "...", function () {
    b.isEnabled() && !b.isCellLocked(b.getDefaultParent()) && c.showLinkDialog("", mxResources.get("insert"), function (a, c) {
      a = mxUtils.trim(a);
      if (0 < a.length) {
        var d = null,
          e = b.getLinkTitle(a);
        null != c && 0 < c.length && (d = c[0].iconUrl, e = c[0].name || c[0].type, e = e.charAt(0).toUpperCase() + e.substring(1), 30 < e.length && (e = e.substring(0, 30) + "..."));
        d = new mxCell(e, new mxGeometry(0, 0, 100, 40), "fontColor=#0000EE;fontStyle=4;rounded=1;overflow=hidden;" + (null != d ? "shape=label;imageWidth=16;imageHeight=16;spacingLeft=26;align=left;image=" + d : "spacing=10;"));
        d.vertex = !0;
        e = b.getCenterInsertPoint(b.getBoundingBoxFromGeometry([d], !0));
        d.geometry.x = e.x;
        d.geometry.y = e.y;
        b.setLinkForCell(d, a);
        b.cellSizeUpdated(d, !0);
        b.getModel().beginUpdate();
        try {
          d = b.addCell(d), b.fireEvent(new mxEventObject("cellsInserted", "cells", [d]))
        } finally {
          b.getModel().endUpdate()
        }
        b.setSelectionCell(d);
        b.scrollCellToVisible(b.getSelectionCell())
      }
    })
  })).isEnabled = f;
  this.addAction("link...", mxUtils.bind(this, function () {
    if (b.isEnabled())
      if (b.cellEditor.isContentEditing()) {
        var a = b.getSelectedElement(),
          d = b.getParentByName(a, "A", b.cellEditor.textarea),
          e = "";
        if (null == d && null != a && null != a.getElementsByTagName)
          for (var f = a.getElementsByTagName("a"), h = 0; h < f.length && null == d; h++) f[h].textContent == a.textContent && (d = f[h]);
        null != d && "A" == d.nodeName && (e = d.getAttribute("href") || "", b.selectNode(d));
        var p = b.cellEditor.saveSelection();
        c.showLinkDialog(e, mxResources.get("apply"), mxUtils.bind(this, function (a) {
          b.cellEditor.restoreSelection(p);
          null != a && b.insertLink(a)
        }))
      } else b.isSelectionEmpty() ? this.get("insertLink").funct() : this.get("editLink").funct()
  })).isEnabled = f;
  this.addAction("autosize", function () {
    var a = b.getSelectionCells();
    if (null != a) {
      b.getModel().beginUpdate();
      try {
        for (var c = 0; c < a.length; c++) {
          var d = a[c];
          if (b.getModel().getChildCount(d)) b.updateGroupBounds([d], 20);
          else {
            var e = b.view.getState(d),
              f = b.getCellGeometry(d);
            b.getModel().isVertex(d) && null != e && null != e.text && null != f && b.isWrapping(d) ? (f = f.clone(), f.height = e.text.boundingBox.height / b.view.scale, b.getModel().setGeometry(d, f)) : b.updateCellSize(d)
          }
        }
      } finally {
        b.getModel().endUpdate()
      }
    }
  }, null, null, Editor.ctrlKey + "+Shift+Y");
  this.addAction("formattedText", function () {
    var a = b.getView().getState(b.getSelectionCell());
    if (null != a) {
      b.stopEditing();
      a = "1" == a.style.html ? null : "1";
      b.getModel().beginUpdate();
      try {
        for (var d = b.getSelectionCells(), e = 0; e < d.length; e++)
          if (state = b.getView().getState(d[e]), null != state) {
            var f = mxUtils.getValue(state.style, "html", "0");
            if ("1" == f && null == a) {
              var h = b.convertValueToString(state.cell);
              "0" != mxUtils.getValue(state.style, "nl2Br", "1") && (h = h.replace(/\n/g, "").replace(/<br\s*.?>/g, "\n"));
              var p = document.createElement("div");
              p.innerHTML = b.sanitizeHtml(h);
              h = mxUtils.extractTextWithWhitespace(p.childNodes);
              b.cellLabelChanged(state.cell, h);
              b.setCellStyles("html", a, [d[e]])
            } else "0" == f && "1" == a && (h = mxUtils.htmlEntities(b.convertValueToString(state.cell), !1), "0" != mxUtils.getValue(state.style, "nl2Br", "1") && (h = h.replace(/\n/g, "<br/>")), b.cellLabelChanged(state.cell, b.sanitizeHtml(h)), b.setCellStyles("html", a, [d[e]]))
          }
        c.fireEvent(new mxEventObject("styleChanged", "keys", ["html"], "values", [null != a ? a : "0"], "cells", d))
      } finally {
        b.getModel().endUpdate()
      }
    }
  });
  this.addAction("wordWrap", function () {
    var a = b.getView().getState(b.getSelectionCell()),
      c = "wrap";
    b.stopEditing();
    null != a && "wrap" == a.style[mxConstants.STYLE_WHITE_SPACE] && (c = null);
    b.setCellStyles(mxConstants.STYLE_WHITE_SPACE, c)
  });
  this.addAction("rotation", function () {
    var a = "0",
      d = b.getView().getState(b.getSelectionCell());
    null != d && (a = d.style[mxConstants.STYLE_ROTATION] || a);
    a = new FilenameDialog(c, a, mxResources.get("apply"), function (a) {
      null != a && 0 < a.length && b.setCellStyles(mxConstants.STYLE_ROTATION, a)
    }, mxResources.get("enterValue") + " (" + mxResources.get("rotation") + " 0-360)");
    c.showDialog(a.container, 375, 80, !0, !0);
    a.init()
  });
  this.addAction("resetView", function () {
    b.zoomTo(1);
    c.resetScrollbars()
  }, null, null, "Home");
  this.addAction("zoomIn", function (a) {
    b.isFastZoomEnabled() ? b.lazyZoom(!0, !0, c.buttonZoomDelay) : b.zoomIn()
  }, null, null, Editor.ctrlKey + " + (Numpad) / Alt+Mousewheel");
  this.addAction("zoomOut", function (a) {
    b.isFastZoomEnabled() ? b.lazyZoom(!1, !0, c.buttonZoomDelay) : b.zoomOut()
  }, null, null, Editor.ctrlKey + " - (Numpad) / Alt+Mousewheel");
  this.addAction("fitWindow", function () {
    var a = b.isSelectionEmpty() ? b.getGraphBounds() : b.getBoundingBox(b.getSelectionCells()),
      d = b.view.translate,
      e = b.view.scale;
    a.x = a.x / e - d.x;
    a.y = a.y / e - d.y;
    a.width /= e;
    a.height /= e;
    null != b.backgroundImage && a.add(new mxRectangle(0, 0, b.backgroundImage.width, b.backgroundImage.height));
    0 == a.width || 0 == a.height ? (b.zoomTo(1), c.resetScrollbars()) : b.fitWindow(a)
  }, null, null, Editor.ctrlKey + "+Shift+H");
  this.addAction("fitPage", mxUtils.bind(this, function () {
    b.pageVisible || this.get("pageView").funct();
    var a = b.pageFormat,
      c = b.pageScale;
    b.zoomTo(Math.floor(20 * Math.min((b.container.clientWidth - 10) / a.width / c, (b.container.clientHeight - 10) / a.height / c)) / 20);
    mxUtils.hasScrollbars(b.container) && (a = b.getPagePadding(), b.container.scrollTop = a.y * b.view.scale - 1, b.container.scrollLeft = Math.min(a.x * b.view.scale, (b.container.scrollWidth - b.container.clientWidth) / 2) - 1)
  }), null, null, Editor.ctrlKey + "+J");
  this.addAction("fitTwoPages", mxUtils.bind(this, function () {
    b.pageVisible || this.get("pageView").funct();
    var a = b.pageFormat,
      c = b.pageScale;
    b.zoomTo(Math.floor(20 * Math.min((b.container.clientWidth - 10) / (2 * a.width) / c, (b.container.clientHeight - 10) / a.height / c)) / 20);
    mxUtils.hasScrollbars(b.container) && (a = b.getPagePadding(), b.container.scrollTop = Math.min(a.y, (b.container.scrollHeight - b.container.clientHeight) / 2), b.container.scrollLeft = Math.min(a.x, (b.container.scrollWidth - b.container.clientWidth) / 2))
  }), null, null, Editor.ctrlKey + "+Shift+J");
  this.addAction("fitPageWidth", mxUtils.bind(this, function () {
    b.pageVisible || this.get("pageView").funct();
    b.zoomTo(Math.floor(20 * (b.container.clientWidth - 10) / b.pageFormat.width / b.pageScale) / 20);
    if (mxUtils.hasScrollbars(b.container)) {
      var a = b.getPagePadding();
      b.container.scrollLeft = Math.min(a.x * b.view.scale, (b.container.scrollWidth - b.container.clientWidth) / 2)
    }
  }));
  this.put("customZoom", new Action(mxResources.get("custom") + "...", mxUtils.bind(this, function () {
    var a = new FilenameDialog(this.editorUi, parseInt(100 * b.getView().getScale()), mxResources.get("apply"), mxUtils.bind(this, function (a) {
      a = parseInt(a);
      !isNaN(a) && 0 < a && b.zoomTo(a / 100)
    }), mxResources.get("zoom") + " (%)");
    this.editorUi.showDialog(a.container, 300, 80, !0, !0);
    a.init()
  }), null, null, Editor.ctrlKey + "+0"));
  this.addAction("pageScale...", mxUtils.bind(this, function () {
    var a = new FilenameDialog(this.editorUi, parseInt(100 * b.pageScale), mxResources.get("apply"), mxUtils.bind(this, function (a) {
      a = parseInt(a);
      !isNaN(a) && 0 < a && (a = new ChangePageSetup(c, null, null, null, a / 100), a.ignoreColor = !0, a.ignoreImage = !0, b.model.execute(a))
    }), mxResources.get("pageScale") + " (%)");
    this.editorUi.showDialog(a.container, 300, 80, !0, !0);
    a.init()
  }));
  var e = null,
    e = this.addAction("grid", function () {
      b.setGridEnabled(!b.isGridEnabled());
      c.fireEvent(new mxEventObject("gridEnabledChanged"))
    }, null, null, Editor.ctrlKey + "+Shift+G");
  e.setToggleAction(!0);
  e.setSelectedCallback(function () {
    return b.isGridEnabled()
  });
  e.setEnabled(!1);
  e = this.addAction("guides", function () {
    b.graphHandler.guidesEnabled = !b.graphHandler.guidesEnabled;
    c.fireEvent(new mxEventObject("guidesEnabledChanged"))
  });
  e.setToggleAction(!0);
  e.setSelectedCallback(function () {
    return b.graphHandler.guidesEnabled
  });
  e.setEnabled(!1);
  e = this.addAction("tooltips", function () {
    b.tooltipHandler.setEnabled(!b.tooltipHandler.isEnabled());
    c.fireEvent(new mxEventObject("tooltipsEnabledChanged"))
  });
  e.setToggleAction(!0);
  e.setSelectedCallback(function () {
    return b.tooltipHandler.isEnabled()
  });
  e = this.addAction("collapseExpand", function () {
    var a = new ChangePageSetup(c);
    a.ignoreColor = !0;
    a.ignoreImage = !0;
    a.foldingEnabled = !b.foldingEnabled;
    b.model.execute(a)
  });
  e.setToggleAction(!0);
  e.setSelectedCallback(function () {
    return b.foldingEnabled
  });
  e.isEnabled = f;
  e = this.addAction("scrollbars", function () {
    c.setScrollbars(!c.hasScrollbars())
  });
  e.setToggleAction(!0);
  e.setSelectedCallback(function () {
    return b.scrollbars
  });
  e = this.addAction("pageView", mxUtils.bind(this, function () {
    c.setPageVisible(!b.pageVisible)
  }));
  e.setToggleAction(!0);
  e.setSelectedCallback(function () {
    return b.pageVisible
  });
  e = this.addAction("connectionArrows", function () {
    b.connectionArrowsEnabled = !b.connectionArrowsEnabled;
    c.fireEvent(new mxEventObject("connectionArrowsChanged"))
  }, null, null, "Alt+Shift+A");
  e.setToggleAction(!0);
  e.setSelectedCallback(function () {
    return b.connectionArrowsEnabled
  });
  e = this.addAction("connectionPoints", function () {
    b.setConnectable(!b.connectionHandler.isEnabled());
    c.fireEvent(new mxEventObject("connectionPointsChanged"))
  }, null, null, "Alt+Shift+P");
  e.setToggleAction(!0);
  e.setSelectedCallback(function () {
    return b.connectionHandler.isEnabled()
  });
  e = this.addAction("copyConnect", function () {
    b.connectionHandler.setCreateTarget(!b.connectionHandler.isCreateTarget());
    c.fireEvent(new mxEventObject("copyConnectChanged"))
  });
  e.setToggleAction(!0);
  e.setSelectedCallback(function () {
    return b.connectionHandler.isCreateTarget()
  });
  e.isEnabled = f;
  e = this.addAction("autosave", function () {
    c.editor.setAutosave(!c.editor.autosave)
  });
  e.setToggleAction(!0);
  e.setSelectedCallback(function () {
    return c.editor.autosave
  });
  e.isEnabled = f;
  e.visible = !1;
  this.addAction("help", function () {
    var a = "";
    mxResources.isLanguageSupported(mxClient.language) && (a = "_" + mxClient.language);
    b.openLink(RESOURCES_PATH + "/help" + a + ".html")
  });
  var h = !1;
  this.put("about", new Action(mxResources.get("about") + " Graph Editor...", function () {
    h || (c.showDialog((new AboutDialog(c)).container, 320, 280, !0, !0, function () {
      h = !1
    }), h = !0)
  }));
  e = mxUtils.bind(this, function (a, c, d, e) {
    return this.addAction(a, function () {
      if (null != d && b.cellEditor.isContentEditing()) d();
      else {
        b.stopEditing(!1);
        b.getModel().beginUpdate();
        try {
          var a = b.getSelectionCells();
          b.toggleCellStyleFlags(mxConstants.STYLE_FONTSTYLE, c, a);
          (c & mxConstants.FONT_BOLD) == mxConstants.FONT_BOLD ? b.updateLabelElements(b.getSelectionCells(), function (a) {
            a.style.fontWeight = null;
            "B" == a.nodeName && b.replaceElement(a)
          }) : (c & mxConstants.FONT_ITALIC) == mxConstants.FONT_ITALIC ? b.updateLabelElements(b.getSelectionCells(), function (a) {
            a.style.fontStyle = null;
            "I" == a.nodeName && b.replaceElement(a)
          }) : (c & mxConstants.FONT_UNDERLINE) == mxConstants.FONT_UNDERLINE && b.updateLabelElements(b.getSelectionCells(), function (a) {
            a.style.textDecoration = null;
            "U" == a.nodeName && b.replaceElement(a)
          });
          for (var e = 0; e < a.length; e++) 0 == b.model.getChildCount(a[e]) && b.autoSizeCell(a[e], !1)
        } finally {
          b.getModel().endUpdate()
        }
      }
    }, null, null, e)
  });
  e("bold", mxConstants.FONT_BOLD, function () {
    document.execCommand("bold", !1, null)
  }, Editor.ctrlKey + "+B");
  e("italic", mxConstants.FONT_ITALIC, function () {
    document.execCommand("italic", !1, null)
  }, Editor.ctrlKey + "+I");
  e("underline", mxConstants.FONT_UNDERLINE, function () {
    document.execCommand("underline", !1, null)
  }, Editor.ctrlKey + "+U");
  this.addAction("fontColor...", function () {
    c.menus.pickColor(mxConstants.STYLE_FONTCOLOR, "forecolor", "000000")
  });
  this.addAction("strokeColor...", function () {
    c.menus.pickColor(mxConstants.STYLE_STROKECOLOR)
  });
  this.addAction("fillColor...", function () {
    c.menus.pickColor(mxConstants.STYLE_FILLCOLOR)
  });
  this.addAction("gradientColor...", function () {
    c.menus.pickColor(mxConstants.STYLE_GRADIENTCOLOR)
  });
  this.addAction("backgroundColor...", function () {
    c.menus.pickColor(mxConstants.STYLE_LABEL_BACKGROUNDCOLOR, "backcolor")
  });
  this.addAction("borderColor...", function () {
    c.menus.pickColor(mxConstants.STYLE_LABEL_BORDERCOLOR)
  });
  this.addAction("vertical", function () {
    c.menus.toggleStyle(mxConstants.STYLE_HORIZONTAL, !0)
  });
  this.addAction("shadow", function () {
    c.menus.toggleStyle(mxConstants.STYLE_SHADOW)
  });
  this.addAction("solid", function () {
    b.getModel().beginUpdate();
    try {
      b.setCellStyles(mxConstants.STYLE_DASHED, null), b.setCellStyles(mxConstants.STYLE_DASH_PATTERN, null), c.fireEvent(new mxEventObject("styleChanged", "keys", [mxConstants.STYLE_DASHED, mxConstants.STYLE_DASH_PATTERN], "values", [null, null], "cells", b.getSelectionCells()))
    } finally {
      b.getModel().endUpdate()
    }
  });
  this.addAction("dashed", function () {
    b.getModel().beginUpdate();
    try {
      b.setCellStyles(mxConstants.STYLE_DASHED, "1"), b.setCellStyles(mxConstants.STYLE_DASH_PATTERN, null), c.fireEvent(new mxEventObject("styleChanged", "keys", [mxConstants.STYLE_DASHED,
        mxConstants.STYLE_DASH_PATTERN
      ], "values", ["1", null], "cells", b.getSelectionCells()))
    } finally {
      b.getModel().endUpdate()
    }
  });
  this.addAction("dotted", function () {
    b.getModel().beginUpdate();
    try {
      b.setCellStyles(mxConstants.STYLE_DASHED, "1"), b.setCellStyles(mxConstants.STYLE_DASH_PATTERN, "1 4"), c.fireEvent(new mxEventObject("styleChanged", "keys", [mxConstants.STYLE_DASHED, mxConstants.STYLE_DASH_PATTERN], "values", ["1", "1 4"], "cells", b.getSelectionCells()))
    } finally {
      b.getModel().endUpdate()
    }
  });
  this.addAction("sharp", function () {
    b.getModel().beginUpdate();
    try {
      b.setCellStyles(mxConstants.STYLE_ROUNDED, "0"), b.setCellStyles(mxConstants.STYLE_CURVED, "0"), c.fireEvent(new mxEventObject("styleChanged", "keys", [mxConstants.STYLE_ROUNDED, mxConstants.STYLE_CURVED], "values", ["0", "0"], "cells", b.getSelectionCells()))
    } finally {
      b.getModel().endUpdate()
    }
  });
  this.addAction("rounded", function () {
    b.getModel().beginUpdate();
    try {
      b.setCellStyles(mxConstants.STYLE_ROUNDED, "1"), b.setCellStyles(mxConstants.STYLE_CURVED, "0"), c.fireEvent(new mxEventObject("styleChanged", "keys", [mxConstants.STYLE_ROUNDED, mxConstants.STYLE_CURVED], "values", ["1", "0"], "cells", b.getSelectionCells()))
    } finally {
      b.getModel().endUpdate()
    }
  });
  this.addAction("toggleRounded", function () {
    if (!b.isSelectionEmpty() && b.isEnabled()) {
      b.getModel().beginUpdate();
      try {
        var a = b.getSelectionCells(),
          d = b.getCurrentCellStyle(a[0]),
          e = "1" == mxUtils.getValue(d, mxConstants.STYLE_ROUNDED, "0") ? "0" : "1";
        b.setCellStyles(mxConstants.STYLE_ROUNDED, e);
        b.setCellStyles(mxConstants.STYLE_CURVED, null);
        c.fireEvent(new mxEventObject("styleChanged", "keys", [mxConstants.STYLE_ROUNDED, mxConstants.STYLE_CURVED], "values", [e, "0"], "cells", b.getSelectionCells()))
      } finally {
        b.getModel().endUpdate()
      }
    }
  });
  this.addAction("curved", function () {
    b.getModel().beginUpdate();
    try {
      b.setCellStyles(mxConstants.STYLE_ROUNDED, "0"), b.setCellStyles(mxConstants.STYLE_CURVED, "1"), c.fireEvent(new mxEventObject("styleChanged", "keys", [mxConstants.STYLE_ROUNDED, mxConstants.STYLE_CURVED], "values", ["0", "1"], "cells", b.getSelectionCells()))
    } finally {
      b.getModel().endUpdate()
    }
  });
  this.addAction("collapsible", function () {
    var a = b.view.getState(b.getSelectionCell()),
      d = "1";
    null != a && null != b.getFoldingImage(a) && (d = "0");
    b.setCellStyles("collapsible", d);
    c.fireEvent(new mxEventObject("styleChanged", "keys", ["collapsible"], "values", [d], "cells", b.getSelectionCells()))
  });
  this.addAction("editStyle...", mxUtils.bind(this, function () {
    var a = b.getSelectionCells();
    if (null != a && 0 < a.length) {
      var c = b.getModel(),
        c = new TextareaDialog(this.editorUi, mxResources.get("editStyle") + ":", c.getStyle(a[0]) || "", function (c) {
          null != c && b.setCellStyle(mxUtils.trim(c), a)
        }, null, null, 400, 220);
      this.editorUi.showDialog(c.container, 420, 300, !0, !0);
      c.init()
    }
  }), null, null, Editor.ctrlKey + "+E");

  this.addAction("setAsDefaultStyle", function () {
    b.isEnabled() && !b.isSelectionEmpty() && c.setDefaultStyle(b.getSelectionCell())
  }, null, null, Editor.ctrlKey + "+Shift+D");

  /***Set Container in the Same Layer***/
  this.addAction("setContainerIntheSameLayer", function () {
    b.setSelectionCells(b.setContainer_sameLayer());
  }, null, null, Editor.ctrlKey + "+Shift+<");
  /***Set Container in the Same Layer***/

  this.addAction("clearDefaultStyle", function () {
    b.isEnabled() && c.clearDefaultStyle()
  }, null, null, Editor.ctrlKey + "+Shift+R");
  this.addAction("addWaypoint", function () {
    var a = b.getSelectionCell();
    if (null != a && b.getModel().isEdge(a)) {
      var c = d.graph.selectionCellsHandler.getHandler(a);
      if (c instanceof mxEdgeHandler) {
        for (var e = b.view.translate, f = b.view.scale, h = e.x, e = e.y, a = b.getModel().getParent(a), p = b.getCellGeometry(a); b.getModel().isVertex(a) && null != p;) h += p.x, e += p.y, a = b.getModel().getParent(a), p = b.getCellGeometry(a);
        h = Math.round(b.snap(b.popupMenuHandler.triggerX / f - h));
        f = Math.round(b.snap(b.popupMenuHandler.triggerY / f - e));
        c.addPointAt(c.state, h, f)
      }
    }
  });
  this.addAction("removeWaypoint", function () {
    var a = c.actions.get("removeWaypoint");
    null != a.handler && a.handler.removePoint(a.handler.state, a.index)
  });
  this.addAction("clearWaypoints", function () {
    var a = b.getSelectionCells();
    if (null != a) {
      a = b.addAllEdges(a);
      b.getModel().beginUpdate();
      try {
        for (var c = 0; c < a.length; c++) {
          var d = a[c];
          if (b.getModel().isEdge(d)) {
            var e = b.getCellGeometry(d);
            null != e && (e = e.clone(), e.points = null, b.getModel().setGeometry(d, e))
          }
        }
      } finally {
        b.getModel().endUpdate()
      }
    }
  }, null, null, "Alt+Shift+C");
  e = this.addAction("subscript", mxUtils.bind(this, function () {
    b.cellEditor.isContentEditing() && document.execCommand("subscript", !1, null)
  }), null, null, Editor.ctrlKey + "+,");
  e = this.addAction("superscript", mxUtils.bind(this, function () {
    b.cellEditor.isContentEditing() && document.execCommand("superscript", !1, null)
  }), null, null, Editor.ctrlKey + "+.");
  e = this.addAction("indent", mxUtils.bind(this, function () {
    b.cellEditor.isContentEditing() && document.execCommand("indent", !1, null)
  }), null, null, "Shift+Tab");
  this.addAction("image...", function () {
    if (b.isEnabled() && !b.isCellLocked(b.getDefaultParent())) {
      var a = mxResources.get("image") + " (" + mxResources.get("url") + "):",
        d = b.getView().getState(b.getSelectionCell()),
        e = "";
      null != d && (e = d.style[mxConstants.STYLE_IMAGE] || e);
      var f = b.cellEditor.saveSelection();
      c.showImageDialog(a, e, function (a, c, d) {
        if (b.cellEditor.isContentEditing()) b.cellEditor.restoreSelection(f), b.insertImage(a, c, d);
        else {
          var e = b.getSelectionCells();
          if (null != a && (0 < a.length || 0 < e.length)) {
            var g = null;
            b.getModel().beginUpdate();
            try {
              if (0 == e.length) {
                var e = [b.insertVertex(b.getDefaultParent(), null, "", 0, 0, c, d, "shape=image;imageAspect=0;aspect=fixed;verticalLabelPosition=bottom;verticalAlign=top;")],
                  h = b.getCenterInsertPoint(b.getBoundingBoxFromGeometry(e, !0));
                e[0].geometry.x = h.x;
                e[0].geometry.y = h.y;
                g = e;
                b.fireEvent(new mxEventObject("cellsInserted", "cells", g))
              }
              b.setCellStyles(mxConstants.STYLE_IMAGE, 0 < a.length ? a : null, e);
              var k = b.getCurrentCellStyle(e[0]);
              "image" != k[mxConstants.STYLE_SHAPE] && "label" != k[mxConstants.STYLE_SHAPE] ? b.setCellStyles(mxConstants.STYLE_SHAPE, "image", e) : 0 == a.length && b.setCellStyles(mxConstants.STYLE_SHAPE, null, e);
              if (1 == b.getSelectionCount() && null != c && null != d) {
                var l = e[0],
                  m = b.getModel().getGeometry(l);
                null != m && (m = m.clone(), m.width = c, m.height = d, b.getModel().setGeometry(l, m))
              }
            } finally {
              b.getModel().endUpdate()
            }
            null != g && (b.setSelectionCells(g), b.scrollCellToVisible(g[0]))
          }
        }
      }, b.cellEditor.isContentEditing(), !b.cellEditor.isContentEditing())
    }
  }).isEnabled = f;
  e = this.addAction("layers", mxUtils.bind(this, function () {
    null == this.layersWindow ? (this.layersWindow = new LayersWindow(c, document.body.offsetWidth - 280, 120, 220, 196), this.layersWindow.window.addListener("show", function () {
      c.fireEvent(new mxEventObject("layers"))
    }), this.layersWindow.window.addListener("hide", function () {
      c.fireEvent(new mxEventObject("layers"))
    }), this.layersWindow.window.setVisible(!0), c.fireEvent(new mxEventObject("layers")), this.layersWindow.init()) : this.layersWindow.window.setVisible(!this.layersWindow.window.isVisible())
  }), null, null, Editor.ctrlKey + "+Shift+L");
  e.setToggleAction(!0);
  e.setSelectedCallback(mxUtils.bind(this, function () {
    return null != this.layersWindow && this.layersWindow.window.isVisible()
  }));
  e = this.addAction("formatPanel", mxUtils.bind(this, function () {
    c.toggleFormatPanel()
  }), null, null, Editor.ctrlKey + "+Shift+P");
  e.setToggleAction(!0);
  e.setSelectedCallback(mxUtils.bind(this, function () {
    return 0 < c.formatWidth
  }));
  e = this.addAction("outline", mxUtils.bind(this, function () {
    null == this.outlineWindow ? (this.outlineWindow = new OutlineWindow(c, document.body.offsetWidth - 260, 100, 180, 180), this.outlineWindow.window.addListener("show", function () {
      c.fireEvent(new mxEventObject("outline"))
    }), this.outlineWindow.window.addListener("hide", function () {
      c.fireEvent(new mxEventObject("outline"))
    }), this.outlineWindow.window.setVisible(!0), c.fireEvent(new mxEventObject("outline"))) : this.outlineWindow.window.setVisible(!this.outlineWindow.window.isVisible())
  }), null, null, Editor.ctrlKey + "+Shift+O");
  e.setToggleAction(!0);
  e.setSelectedCallback(mxUtils.bind(this, function () {
    return null != this.outlineWindow && this.outlineWindow.window.isVisible()
  }))
};

Menus.prototype.addPopupMenuStyleItems = function (a, c, d) {
  1 == this.editorUi.editor.graph.getSelectionCount() ? this.addMenuItems(a, ["-", "setAsDefaultStyle", "-", "setContainerIntheSameLayer"], null, d) : this.editorUi.editor.graph.isSelectionEmpty() && this.addMenuItems(a, ["-", "clearDefaultStyle"], null, d)
};

(function () {
  EditorUi.prototype.altShiftActions[68] = "selectDescendants";
  var a = Graph.prototype.foldCells;
  Graph.prototype.foldCells = function (b, c, e, l, d) {
    c = null != c ? c : !1;
    null == e && (e = this.getFoldableCells(this.getSelectionCells(), b));
    this.stopEditing();
    this.model.beginUpdate();
    try {
      for (var f = e.slice(), k = [], n = 0; n < e.length; n++) {
        var p = this.getCurrentCellStyle(e[n]);
        "1" == mxUtils.getValue(p, "treeFolding", "0") && (this.traverse(e[n], !0, mxUtils.bind(this, function (a, b) {
          null != b && k.push(b);
          a != e[n] && k.push(a);
          return a == e[n] || !this.model.isCollapsed(a)
        })), this.model.setCollapsed(e[n], b))
      }
      for (n = 0; n < k.length; n++) this.model.setVisible(k[n], !b);
      e = f;
      e = a.apply(this, arguments)
    } finally {
      this.model.endUpdate()
    }
    return e
  };
  var e = EditorUi.prototype.init;
  EditorUi.prototype.init = function () {
    e.apply(this, arguments);
    this.editor.isChromelessView() && !this.editor.editable || this.addTrees()
  };
  EditorUi.prototype.addTrees = function () {
    function a(a) {
      return v.isVertex(a) && e(a)
    }

    function c(a) {
      var b = !1;
      null != a && (b = "1" == q.getCurrentCellStyle(a).treeMoving);
      return b
    }

    function e(a) {
      var b = !1;
      null != a && (a = v.getParent(a), b = q.view.getState(a), b = "tree" == (null != b ? b.style : q.getCellStyle(a)).containerType);
      return b
    }

    function l(a) {
      var b = !1;
      null != a && (a = v.getParent(a), b = q.view.getState(a), q.view.getState(a), b = null != (null != b ? b.style : q.getCellStyle(a)).childLayout);
      return b
    }

    function d(a) {
      a = q.view.getState(a);
      if (null != a) {
        var b = q.getIncomingEdges(a.cell);
        if (0 < b.length && (b = q.view.getState(b[0]), null != b && (b = b.absolutePoints, null != b && 0 < b.length && (b = b[b.length - 1], null != b)))) {
          if (b.y == a.y && Math.abs(b.x - a.getCenterX()) < a.width / 2) return mxConstants.DIRECTION_SOUTH;
          if (b.y == a.y + a.height && Math.abs(b.x - a.getCenterX()) < a.width / 2) return mxConstants.DIRECTION_NORTH;
          if (b.x > a.getCenterX()) return mxConstants.DIRECTION_WEST
        }
      }
      return mxConstants.DIRECTION_EAST
    }

    function g(a, b) {
      b = null != b ? b : !0;
      q.model.beginUpdate();
      try {
        var c = q.model.getParent(a),
          e = q.getIncomingEdges(a),
          f = q.cloneCells([e[0], a]);
        q.model.setTerminal(f[0], q.model.getTerminal(e[0], !0), !0);
        var g = d(a),
          k = c.geometry;
        g == mxConstants.DIRECTION_SOUTH || g == mxConstants.DIRECTION_NORTH ? f[1].geometry.x += b ? a.geometry.width + 10 : -f[1].geometry.width - 10 : f[1].geometry.y += b ? a.geometry.height + 10 : -f[1].geometry.height - 10;
        q.view.currentRoot != c && (f[1].geometry.x -= k.x, f[1].geometry.y -= k.y);
        var l = q.view.getState(a),
          m = q.view.scale;
        if (null != l) {
          var n = mxRectangle.fromRectangle(l);
          g == mxConstants.DIRECTION_SOUTH || g == mxConstants.DIRECTION_NORTH ? n.x += (b ? a.geometry.width + 10 : -f[1].geometry.width - 10) * m : n.y += (b ? a.geometry.height + 10 : -f[1].geometry.height - 10) * m;
          var p = q.getOutgoingEdges(q.model.getTerminal(e[0], !0));
          if (null != p) {
            for (var v = g == mxConstants.DIRECTION_SOUTH || g == mxConstants.DIRECTION_NORTH, u = k = e = 0; u < p.length; u++) {
              var t = q.model.getTerminal(p[u], !1);
              if (g == d(t)) {
                var z = q.view.getState(t);
                t != a && null != z && (v && b != z.getCenterX() < l.getCenterX() || !v && b != z.getCenterY() < l.getCenterY()) && mxUtils.intersects(n, z) && (e = 10 + Math.max(e, (Math.min(n.x + n.width, z.x + z.width) - Math.max(n.x, z.x)) / m), k = 10 + Math.max(k, (Math.min(n.y + n.height, z.y + z.height) - Math.max(n.y, z.y)) / m))
              }
            }
            v ? k = 0 : e = 0;
            for (u = 0; u < p.length; u++)
              if (t = q.model.getTerminal(p[u], !1), g == d(t) && (z = q.view.getState(t), t != a && null != z && (v && b != z.getCenterX() < l.getCenterX() || !v && b != z.getCenterY() < l.getCenterY()))) {
                var x = [];
                q.traverse(z.cell, !0, function (a, b) {
                  null != b && x.push(b);
                  x.push(a);
                  return !0
                });
                q.moveCells(x, (b ? 1 : -1) * e, (b ? 1 : -1) * k)
              }
          }
        }
        return q.addCells(f, c)
      } finally {
        q.model.endUpdate()
      }
    }

    function m(a) {
      q.model.beginUpdate();
      try {
        var b = d(a),
          c = q.getIncomingEdges(a),
          e = q.cloneCells([c[0], a]);
        q.model.setTerminal(c[0], e[1], !1);
        q.model.setTerminal(e[0], e[1], !0);
        q.model.setTerminal(e[0], a, !1);
        var f = q.model.getParent(a),
          g = f.geometry,
          k = [];
        q.view.currentRoot != f && (e[1].geometry.x -= g.x, e[1].geometry.y -= g.y);
        q.traverse(a, !0, function (a, b) {
          null != b && k.push(b);
          k.push(a);
          return !0
        });
        var l = a.geometry.width + 40,
          m = a.geometry.height + 40;
        b == mxConstants.DIRECTION_SOUTH ? l = 0 : b == mxConstants.DIRECTION_NORTH ? (l = 0, m = -m) : b == mxConstants.DIRECTION_WEST ? (l = -l, m = 0) : b == mxConstants.DIRECTION_EAST && (m = 0);
        q.moveCells(k, l, m);
        return q.addCells(e, f)
      } finally {
        q.model.endUpdate()
      }
    }

    function n(a, b) {
      q.model.beginUpdate();
      try {
        var c = q.model.getParent(a),
          e = q.getIncomingEdges(a),
          f = d(a);
        0 == e.length && (e = [q.createEdge(c, null, "", null, null, q.createCurrentEdgeStyle())], f = b);
        var g = q.cloneCells([e[0], a]);
        q.model.setTerminal(g[0], a, !0);
        if (null == q.model.getTerminal(g[0], !1)) {
          q.model.setTerminal(g[0], g[1], !1);
          var k = q.getCellStyle(g[1]).newEdgeStyle;
          if (null != k) try {
            var l = JSON.parse(k),
              m;
            for (m in l) q.setCellStyles(m, l[m], [g[0]]), "edgeStyle" == m && "elbowEdgeStyle" == l[m] && q.setCellStyles("elbow", f == mxConstants.DIRECTION_SOUTH || f == mxConstants.DIRECTION_NOTH ? "vertical" : "horizontal", [g[0]])
          } catch (P) {}
        }
        var e = q.getOutgoingEdges(a),
          n = c.geometry,
          k = [];
        q.view.currentRoot == c && (n = new mxRectangle);
        for (l = 0; l < e.length; l++) {
          var p = q.model.getTerminal(e[l], !1);
          null != p && k.push(p)
        }
        var v = q.view.getBounds(k),
          u = q.view.translate,
          t = q.view.scale;
        f == mxConstants.DIRECTION_SOUTH ? (g[1].geometry.x = null == v ? a.geometry.x + (a.geometry.width - g[1].geometry.width) / 2 : (v.x + v.width) / t - u.x - n.x + 10, g[1].geometry.y += g[1].geometry.height - n.y + 40) : f == mxConstants.DIRECTION_NORTH ? (g[1].geometry.x = null == v ? a.geometry.x + (a.geometry.width - g[1].geometry.width) / 2 : (v.x + v.width) / t - u.x + -n.x + 10, g[1].geometry.y -= g[1].geometry.height + n.y + 40) : (g[1].geometry.x = f == mxConstants.DIRECTION_WEST ? g[1].geometry.x - (g[1].geometry.width + n.x + 40) : g[1].geometry.x + (g[1].geometry.width - n.x + 40), g[1].geometry.y = null == v ? a.geometry.y + (a.geometry.height - g[1].geometry.height) / 2 : (v.y + v.height) / t - u.y + -n.y + 10);
        return q.addCells(g, c)
      } finally {
        q.model.endUpdate()
      }
    }

    function p(a, b, c) {
      a = q.getOutgoingEdges(a);
      c = q.view.getState(c);
      var d = [];
      if (null != c && null != a) {
        for (var e = 0; e < a.length; e++) {
          var f = q.view.getState(q.model.getTerminal(a[e], !1));
          null != f && (!b && Math.min(f.x + f.width, c.x + c.width) >= Math.max(f.x, c.x) || b && Math.min(f.y + f.height, c.y + c.height) >= Math.max(f.y, c.y)) && d.push(f)
        }
        d.sort(function (a, c) {
          return b ? a.x + a.width - c.x - c.width : a.y + a.height - c.y - c.height
        })
      }
      return d
    }

    function t(a, b) {
      var c = d(a),
        e = b == mxConstants.DIRECTION_EAST || b == mxConstants.DIRECTION_WEST;
      (c == mxConstants.DIRECTION_EAST || c == mxConstants.DIRECTION_WEST) == e && c != b ? u.actions.get("selectParent").funct() : c == b ? (e = q.getOutgoingEdges(a), null != e && 0 < e.length && q.setSelectionCell(q.model.getTerminal(e[0], !1))) : (c = q.getIncomingEdges(a), null != c && 0 < c.length && (e = p(q.model.getTerminal(c[0], !0), e, a), c = q.view.getState(a), null != c && (c = mxUtils.indexOf(e, c), 0 <= c && (c += b == mxConstants.DIRECTION_NORTH || b == mxConstants.DIRECTION_WEST ? -1 : 1, 0 <= c && c <= e.length - 1 && q.setSelectionCell(e[c].cell)))))
    }
    var u = this,
      q = u.editor.graph,
      v = q.getModel(),
      x = u.menus.createPopupMenu;
    u.menus.createPopupMenu = function (b, c, d) {
      x.apply(this, arguments);
      if (1 == q.getSelectionCount()) {
        c = q.getSelectionCell();
        var e = q.getOutgoingEdges(c);
        b.addSeparator();
        0 < e.length && (a(q.getSelectionCell()) && this.addMenuItems(b, ["selectChildren"], null, d), this.addMenuItems(b, ["selectDescendants"], null, d));
        a(q.getSelectionCell()) && (b.addSeparator(), 0 < q.getIncomingEdges(c).length && this.addMenuItems(b, ["selectSiblings", "selectParent"], null, d))
      }
    };
    u.actions.addAction("selectChildren", function () {
      if (q.isEnabled() && 1 == q.getSelectionCount()) {
        var a = q.getSelectionCell(),
          a = q.getOutgoingEdges(a);
        if (null != a) {
          for (var b = [], c = 0; c < a.length; c++) b.push(q.model.getTerminal(a[c], !1));
          q.setSelectionCells(b)
        }
      }
    }, null, null, "Alt+Shift+X");
    u.actions.addAction("selectSiblings", function () {
      if (q.isEnabled() && 1 == q.getSelectionCount()) {
        var a = q.getSelectionCell(),
          a = q.getIncomingEdges(a);
        if (null != a && 0 < a.length && (a = q.getOutgoingEdges(q.model.getTerminal(a[0], !0)), null != a)) {
          for (var b = [], c = 0; c < a.length; c++) b.push(q.model.getTerminal(a[c], !1));
          q.setSelectionCells(b)
        }
      }
    }, null, null, "Alt+Shift+S");
    u.actions.addAction("selectParent", function () {
      if (q.isEnabled() && 1 == q.getSelectionCount()) {
        var a = q.getSelectionCell(),
          a = q.getIncomingEdges(a);
        null != a && 0 < a.length && q.setSelectionCell(q.model.getTerminal(a[0], !0))
      }
    }, null, null, "Alt+Shift+P");
    u.actions.addAction("selectDescendants", function () {
      if (q.isEnabled() && 1 == q.getSelectionCount()) {
        var a = q.getSelectionCell(),
          b = [];
        q.traverse(a, !0, function (a, c) {
          null != c && b.push(c);
          b.push(a);
          return !0
        });
        q.setSelectionCells(b)
      }
    }, null, null, "Alt+Shift+D");
    var y = q.removeCells;
    q.removeCells = function (b, c) {
      c = null != c ? c : !0;
      null == b && (b = this.getDeletableCells(this.getSelectionCells()));
      c && (b = this.getDeletableCells(this.addAllEdges(b)));
      for (var d = [], f = 0; f < b.length; f++) {
        var g = b[f];
        v.isEdge(g) && e(g) && (d.push(g), g = v.getTerminal(g, !1));
        if (a(g)) {
          var k = [];
          q.traverse(g, !0, function (a, b) {
            null != b && k.push(b);
            k.push(a);
            return !0
          });
          0 < k.length && (d = d.concat(k), g = q.getIncomingEdges(b[f]), b = b.concat(g))
        } else null != g && d.push(b[f])
      }
      b = d;
      return y.apply(this, arguments)
    };
    u.hoverIcons.getStateAt = function (b, c, d) {
      return a(b.cell) ? null : this.graph.view.getState(this.graph.getCellAt(c, d))
    };
    var A = q.duplicateCells;
    q.duplicateCells = function (b, c) {
      b = null != b ? b : this.getSelectionCells();
      for (var d = b.slice(0), e = 0; e < d.length; e++) {
        var f = q.view.getState(d[e]);
        if (null != f && a(f.cell))
          for (var g = q.getIncomingEdges(f.cell), f = 0; f < g.length; f++) mxUtils.remove(g[f], b)
      }
      this.model.beginUpdate();
      try {
        var k = A.call(this, b, c);
        if (k.length == b.length)
          for (e = 0; e < b.length; e++)
            if (a(b[e])) {
              var l = q.getIncomingEdges(k[e]),
                g = q.getIncomingEdges(b[e]);
              if (0 == l.length && 0 < g.length) {
                var m = this.cloneCell(g[0]);
                this.addEdge(m, q.getDefaultParent(), this.model.getTerminal(g[0], !0), k[e])
              }
            }
      } finally {
        this.model.endUpdate()
      }
      return k
    };

    q.setContainer_sameLayer = function (b, c) {

      var selectedCell = this.getSelectionCell();

      var selectedCell_x = selectedCell.geometry.x;
      var selectedCell_y = selectedCell.geometry.y;

      var cell = new mxCell(selectedCell.value, new mxGeometry(0, 0, 200, 200), 'swimlane;pd3type=container;');
      cell.vertex = true;
      var edge = new mxCell('', new mxGeometry(0, 0, 0, 0), 'html=1;verticalAlign=bottom;endArrow=block;endSize=8;entryX=0;entryY=1;exitX=0;exitY=0;edgeStyle=orthogonalEdgeStyle;pd3type=arrow;');

      cell.geometry.x = selectedCell_x;
      cell.geometry.y = selectedCell_y + selectedCell.geometry.height + 60;

      edge.geometry.setTerminalPoint(new mxPoint(selectedCell_x, cell.geometry.y), true);
      edge.geometry.setTerminalPoint(new mxPoint(selectedCell_x, selectedCell_y+selectedCell.geometry.height), false);
      edge.edge = true;

      cell.insertEdge(edge, true);
      selectedCell.insertEdge(edge, false);

      var selectedCell_style = [];
      var pd3layer_source = "",
          fillColor_source = "",
          strokeColor_source = "";
          selectedCell_style = selectedCell.style.split(';');
      for (var i = 0; i < selectedCell_style.length; i++) {
        if (selectedCell_style[i].indexOf('pd3layer') !== -1) {
          pd3layer_source = selectedCell_style[i]+';';
        } else if (selectedCell_style[i].indexOf('fillColor') !== -1) {
          fillColor_source = selectedCell_style[i]+';';
        } else if (selectedCell_style[i].indexOf('strokeColor') !== -1) {
          strokeColor_source = selectedCell_style[i] + ';';
        }
      }
      
      cell.style = cell.style + pd3layer_source + fillColor_source + strokeColor_source;
      edge.style = edge.style + pd3layer_source + fillColor_source + strokeColor_source;


      this.addCell(cell);
      this.addCell(edge);

      return cell, edge;
    };

    var z = q.moveCells;
    q.moveCells = function (b, c, d, e, f, g, k) {
      var l = null;
      this.model.beginUpdate();
      try {
        var m = f,
          n = this.getCurrentCellStyle(f);
        if (null != b && a(f) && "1" == mxUtils.getValue(n, "treeFolding", "0")) {
          for (var p = 0; p < b.length; p++)
            if (a(b[p]) || q.model.isEdge(b[p]) && null == q.model.getTerminal(b[p], !0)) {
              f = q.model.getParent(b[p]);
              break
            }
          if (null != m && f != m && null != this.view.getState(b[0])) {
            var v = q.getIncomingEdges(b[0]);
            if (0 < v.length) {
              var u = q.view.getState(q.model.getTerminal(v[0], !0));
              if (null != u) {
                var t = q.view.getState(m);
                null != t && (c = (t.getCenterX() - u.getCenterX()) / q.view.scale, d = (t.getCenterY() - u.getCenterY()) / q.view.scale)
              }
            }
          }
        }
        l = z.apply(this, arguments);
        if (null != l && null != b && l.length == b.length)
          for (p = 0; p < l.length; p++)
            if (this.model.isEdge(l[p])) a(m) && 0 > mxUtils.indexOf(l, this.model.getTerminal(l[p], !0)) && this.model.setTerminal(l[p], m, !0);
            else if (a(b[p]) && (v = q.getIncomingEdges(b[p]), 0 < v.length))
          if (!e) a(m) && 0 > mxUtils.indexOf(b, this.model.getTerminal(v[0], !0)) && this.model.setTerminal(v[0], m, !0);
          else if (0 == q.getIncomingEdges(l[p]).length) {
          n = m;
          if (null == n || n == q.model.getParent(b[p])) n = q.model.getTerminal(v[0], !0);
          e = this.cloneCell(v[0]);
          this.addEdge(e, q.getDefaultParent(), n, l[p])
        }
      } finally {
        this.model.endUpdate()
      }
      return l
    };
    if (null != u.sidebar) {
      var B = u.sidebar.dropAndConnect;
      u.sidebar.dropAndConnect = function (b, c, d, e) {
        var f = q.model,
          g = null;
        f.beginUpdate();
        try {
          if (g = B.apply(this, arguments), a(b))
            for (var k = 0; k < g.length; k++)
              if (f.isEdge(g[k]) && null == f.getTerminal(g[k], !0)) {
                f.setTerminal(g[k], b, !0);
                var l = q.getCellGeometry(g[k]);
                l.points = null;
                null != l.getTerminalPoint(!0) && l.setTerminalPoint(null, !0)
              }
        } finally {
          f.endUpdate()
        }
        return g
      }
    }
    var C = {
        88: u.actions.get("selectChildren"),
        84: u.actions.get("selectSubtree"),
        80: u.actions.get("selectParent"),
        83: u.actions.get("selectSiblings")
      },
      D = u.onKeyDown;
    u.onKeyDown = function (b) {
      try {
        if (q.isEnabled() && !q.isEditing() && a(q.getSelectionCell()) && 1 == q.getSelectionCount()) {
          var c = null;
          0 < q.getIncomingEdges(q.getSelectionCell()).length && (9 == b.which ? c = mxEvent.isShiftDown(b) ? m(q.getSelectionCell()) : n(q.getSelectionCell()) : 13 == b.which && (c = g(q.getSelectionCell(), !mxEvent.isShiftDown(b))));
          if (null != c && 0 < c.length) 1 == c.length && q.model.isEdge(c[0]) ? q.setSelectionCell(q.model.getTerminal(c[0], !1)) : q.setSelectionCell(c[c.length - 1]), null != u.hoverIcons && u.hoverIcons.update(q.view.getState(q.getSelectionCell())), q.startEditingAtCell(q.getSelectionCell()), mxEvent.consume(b);
          else if (mxEvent.isAltDown(b) && mxEvent.isShiftDown(b)) {
            var d = C[b.keyCode];
            null != d && (d.funct(b), mxEvent.consume(b))
          } else 37 == b.keyCode ? (t(q.getSelectionCell(), mxConstants.DIRECTION_WEST), mxEvent.consume(b)) : 38 == b.keyCode ? (t(q.getSelectionCell(), mxConstants.DIRECTION_NORTH), mxEvent.consume(b)) : 39 == b.keyCode ? (t(q.getSelectionCell(), mxConstants.DIRECTION_EAST), mxEvent.consume(b)) : 40 == b.keyCode && (t(q.getSelectionCell(), mxConstants.DIRECTION_SOUTH), mxEvent.consume(b))
        }
      } catch (J) {
        u.handleError(J)
      }
      mxEvent.isConsumed(b) || D.apply(this, arguments)
    };
    var E = q.connectVertex;
    q.connectVertex = function (b, c, e, f, k, l, p) {
      var v = q.getIncomingEdges(b);
      if (a(b)) {
        var u = d(b),
          t = u == mxConstants.DIRECTION_EAST || u == mxConstants.DIRECTION_WEST,
          z = c == mxConstants.DIRECTION_EAST || c == mxConstants.DIRECTION_WEST;
        return u == c || 0 == v.length ? n(b, c) : t == z ? m(b) : g(b, c != mxConstants.DIRECTION_NORTH && c != mxConstants.DIRECTION_WEST)
      }
      return E.apply(this, arguments)
    };
    q.getSubtree = function (b) {
      var d = [b];
      !c(b) && !a(b) || l(b) || q.traverse(b, !0, function (a, b) {
        null != b && 0 > mxUtils.indexOf(d, b) && d.push(b);
        0 > mxUtils.indexOf(d, a) && d.push(a);
        return !0
      });
      return d
    };
    var F = mxVertexHandler.prototype.init;
    mxVertexHandler.prototype.init = function () {
      F.apply(this, arguments);
      (c(this.state.cell) || a(this.state.cell)) && !l(this.state.cell) && 0 < this.graph.getOutgoingEdges(this.state.cell).length && (this.moveHandle = mxUtils.createImage(Editor.moveImage), this.moveHandle.setAttribute("title", "Move Subtree"), this.moveHandle.style.position = "absolute", this.moveHandle.style.cursor = "pointer", this.moveHandle.style.width = "24px", this.moveHandle.style.height = "24px", this.graph.container.appendChild(this.moveHandle), mxEvent.addGestureListeners(this.moveHandle, mxUtils.bind(this, function (a) {
        this.graph.graphHandler.start(this.state.cell, mxEvent.getClientX(a), mxEvent.getClientY(a), this.graph.getSubtree(this.state.cell));
        this.graph.graphHandler.cellWasClicked = !0;
        this.graph.isMouseTrigger = mxEvent.isMouseEvent(a);
        this.graph.isMouseDown = !0;
        u.hoverIcons.reset();
        mxEvent.consume(a)
      })))
    };
    var H = mxVertexHandler.prototype.redrawHandles;
    mxVertexHandler.prototype.redrawHandles = function () {
      H.apply(this, arguments);
      null != this.moveHandle && (this.moveHandle.style.left = this.state.x + this.state.width + (40 > this.state.width ? 10 : 0) + 2 + "px", this.moveHandle.style.top = this.state.y + this.state.height + (40 > this.state.height ? 10 : 0) + 2 + "px")
    };
    var I = mxVertexHandler.prototype.setHandlesVisible;
    mxVertexHandler.prototype.setHandlesVisible = function (a) {
      I.apply(this, arguments);
      null != this.moveHandle && (this.moveHandle.style.display = a ? "" : "none")
    };
    var K = mxVertexHandler.prototype.destroy;
    mxVertexHandler.prototype.destroy = function (a, b) {
      K.apply(this, arguments);
      null != this.moveHandle && (this.moveHandle.parentNode.removeChild(this.moveHandle), this.moveHandle = null)
    }
  };
  if ("undefined" !== typeof Sidebar) {
    var c = Sidebar.prototype.createAdvancedShapes;
    Sidebar.prototype.createAdvancedShapes = function () {
      var a = c.apply(this, arguments),
        e = this.graph;
      return a.concat([this.addEntry("tree container", function () {
        var a = new mxCell("Tree Container", new mxGeometry(0, 0, 400, 320), "swimlane;html=1;startSize=20;horizontal=1;containerType=tree;");
        a.vertex = !0;
        var b = new mxCell("Parent", new mxGeometry(140, 60, 120, 40), 'whiteSpace=wrap;html=1;treeFolding=1;treeMoving=1;newEdgeStyle={"edgeStyle":"elbowEdgeStyle","startArrow":"none","endArrow":"none"};');
        b.vertex = !0;
        var c = new mxCell("Child", new mxGeometry(140, 140, 120, 40), 'whiteSpace=wrap;html=1;treeFolding=1;treeMoving=1;newEdgeStyle={"edgeStyle":"elbowEdgeStyle","startArrow":"none","endArrow":"none"};');
        c.vertex = !0;
        var e = new mxCell("", new mxGeometry(0, 0, 0, 0), "edgeStyle=elbowEdgeStyle;elbow=vertical;startArrow=none;endArrow=none;rounded=0;");
        e.geometry.relative = !0;
        e.edge = !0;
        b.insertEdge(e, !0);
        c.insertEdge(e, !1);
        a.insert(e);
        a.insert(b);
        a.insert(c);
        return sb.createVertexTemplateFromCells([a], a.geometry.width, a.geometry.height, a.value)
      }), this.addEntry("tree mindmap mindmaps central idea branch topic", function () {
        var a = new mxCell("Mindmap", new mxGeometry(0, 0, 420, 126), "swimlane;html=1;startSize=20;horizontal=1;containerType=tree;");
        a.vertex = !0;
        var b = new mxCell("Central Idea", new mxGeometry(160, 60, 100, 40), 'ellipse;whiteSpace=wrap;html=1;align=center;treeFolding=1;treeMoving=1;newEdgeStyle={"edgeStyle":"entityRelationEdgeStyle","startArrow":"none","endArrow":"none","segment":10,"curved":1};');
        b.vertex = !0;
        var c = new mxCell("Topic", new mxGeometry(320, 40, 80, 20), 'whiteSpace=wrap;html=1;rounded=1;arcSize=50;align=center;verticalAlign=middle;strokeWidth=1;autosize=1;spacing=4;treeFolding=1;treeMoving=1;newEdgeStyle={"edgeStyle":"entityRelationEdgeStyle","startArrow":"none","endArrow":"none","segment":10,"curved":1};');
        c.vertex = !0;
        var e = new mxCell("", new mxGeometry(0, 0, 0, 0), "edgeStyle=entityRelationEdgeStyle;startArrow=none;endArrow=none;segment=10;curved=1;");
        e.geometry.relative = !0;
        e.edge = !0;
        b.insertEdge(e, !0);
        c.insertEdge(e, !1);
        var k = new mxCell("Branch", new mxGeometry(320, 80, 72, 26), 'whiteSpace=wrap;html=1;shape=partialRectangle;top=0;left=0;bottom=1;right=0;points=[[0,1],[1,1]];fillColor=none;align=center;verticalAlign=bottom;routingCenterY=0.5;snapToPoint=1;autosize=1;treeFolding=1;treeMoving=1;newEdgeStyle={"edgeStyle":"entityRelationEdgeStyle","startArrow":"none","endArrow":"none","segment":10,"curved":1};');
        k.vertex = !0;
        var n = new mxCell("", new mxGeometry(0, 0, 0, 0), "edgeStyle=entityRelationEdgeStyle;startArrow=none;endArrow=none;segment=10;curved=1;");
        n.geometry.relative = !0;
        n.edge = !0;
        b.insertEdge(n, !0);
        k.insertEdge(n, !1);
        var p = new mxCell("Topic", new mxGeometry(20, 40, 80, 20), 'whiteSpace=wrap;html=1;rounded=1;arcSize=50;align=center;verticalAlign=middle;strokeWidth=1;autosize=1;spacing=4;treeFolding=1;treeMoving=1;newEdgeStyle={"edgeStyle":"entityRelationEdgeStyle","startArrow":"none","endArrow":"none","segment":10,"curved":1};');
        p.vertex = !0;
        var t = new mxCell("", new mxGeometry(0, 0, 0, 0), "edgeStyle=entityRelationEdgeStyle;startArrow=none;endArrow=none;segment=10;curved=1;");
        t.geometry.relative = !0;
        t.edge = !0;
        b.insertEdge(t, !0);
        p.insertEdge(t, !1);
        var u = new mxCell("Branch", new mxGeometry(20, 80, 72, 26), 'whiteSpace=wrap;html=1;shape=partialRectangle;top=0;left=0;bottom=1;right=0;points=[[0,1],[1,1]];fillColor=none;align=center;verticalAlign=bottom;routingCenterY=0.5;snapToPoint=1;autosize=1;treeFolding=1;treeMoving=1;newEdgeStyle={"edgeStyle":"entityRelationEdgeStyle","startArrow":"none","endArrow":"none","segment":10,"curved":1};');
        u.vertex = !0;
        var q = new mxCell("", new mxGeometry(0, 0, 0, 0), "edgeStyle=entityRelationEdgeStyle;startArrow=none;endArrow=none;segment=10;curved=1;");
        q.geometry.relative = !0;
        q.edge = !0;
        b.insertEdge(q, !0);
        u.insertEdge(q, !1);
        a.insert(e);
        a.insert(n);
        a.insert(t);
        a.insert(q);
        a.insert(b);
        a.insert(c);
        a.insert(k);
        a.insert(p);
        a.insert(u);
        return sb.createVertexTemplateFromCells([a], a.geometry.width, a.geometry.height, a.value)
      }), this.addEntry("tree mindmap mindmaps central idea", function () {
        var a = new mxCell("Central Idea", new mxGeometry(0, 0, 100, 40), 'ellipse;whiteSpace=wrap;html=1;align=center;newEdgeStyle={"edgeStyle":"entityRelationEdgeStyle","startArrow":"none","endArrow":"none","segment":10,"curved":1};treeFolding=1;treeMoving=1;');
        a.vertex = !0;
        return sb.createVertexTemplateFromCells([a], a.geometry.width, a.geometry.height, a.value)
      }), this.addEntry("tree mindmap mindmaps branch", function () {
        var a = new mxCell("Branch", new mxGeometry(0, 0, 80, 20), 'whiteSpace=wrap;html=1;shape=partialRectangle;top=0;left=0;bottom=1;right=0;points=[[0,1],[1,1]];fillColor=none;align=center;verticalAlign=bottom;routingCenterY=0.5;snapToPoint=1;recursiveResize=0;autosize=1;treeFolding=1;treeMoving=1;newEdgeStyle={"edgeStyle":"entityRelationEdgeStyle","startArrow":"none","endArrow":"none","segment":10,"curved":1};');
        a.vertex = !0;
        var b = new mxCell("", new mxGeometry(0, 0, 0, 0), "edgeStyle=entityRelationEdgeStyle;startArrow=none;endArrow=none;segment=10;curved=1;");
        b.geometry.setTerminalPoint(new mxPoint(-40, 40), !0);
        b.geometry.relative = !0;
        b.edge = !0;
        a.insertEdge(b, !1);
        return sb.createVertexTemplateFromCells([a, b], a.geometry.width, a.geometry.height, a.value)
      }), this.addEntry("tree mindmap mindmaps sub topic", function () {
        var a = new mxCell("Sub Topic", new mxGeometry(0, 0, 72, 26), 'whiteSpace=wrap;html=1;rounded=1;arcSize=50;align=center;verticalAlign=middle;strokeWidth=1;autosize=1;spacing=4;treeFolding=1;treeMoving=1;newEdgeStyle={"edgeStyle":"entityRelationEdgeStyle","startArrow":"none","endArrow":"none","segment":10,"curved":1};');
        a.vertex = !0;
        var b = new mxCell("", new mxGeometry(0, 0, 0, 0), "edgeStyle=entityRelationEdgeStyle;startArrow=none;endArrow=none;segment=10;curved=1;");
        b.geometry.setTerminalPoint(new mxPoint(-40, 40), !0);
        b.geometry.relative = !0;
        b.edge = !0;
        a.insertEdge(b, !1);
        return sb.createVertexTemplateFromCells([a, b], a.geometry.width, a.geometry.height, a.value)
      }), this.addEntry("tree orgchart organization division", function () {
        var a = new mxCell("Orgchart", new mxGeometry(0, 0, 280, 220), 'swimlane;html=1;startSize=20;horizontal=1;containerType=tree;newEdgeStyle={"edgeStyle":"elbowEdgeStyle","startArrow":"none","endArrow":"none"};');
        a.vertex = !0;
        var b = new mxCell("Organization", new mxGeometry(80, 40, 120, 60), 'whiteSpace=wrap;html=1;align=center;treeFolding=1;treeMoving=1;newEdgeStyle={"edgeStyle":"elbowEdgeStyle","startArrow":"none","endArrow":"none"};');
        e.setAttributeForCell(b, "treeRoot", "1");
        b.vertex = !0;
        var c = new mxCell("Division", new mxGeometry(20, 140, 100, 60), 'whiteSpace=wrap;html=1;align=center;verticalAlign=middle;treeFolding=1;treeMoving=1;newEdgeStyle={"edgeStyle":"elbowEdgeStyle","startArrow":"none","endArrow":"none"};');
        c.vertex = !0;
        var g = new mxCell("", new mxGeometry(0, 0, 0, 0), "edgeStyle=elbowEdgeStyle;elbow=vertical;startArrow=none;endArrow=none;rounded=0;");
        g.geometry.relative = !0;
        g.edge = !0;
        b.insertEdge(g, !0);
        c.insertEdge(g, !1);
        var k = new mxCell("Division", new mxGeometry(160, 140, 100, 60), 'whiteSpace=wrap;html=1;align=center;verticalAlign=middle;treeFolding=1;treeMoving=1;newEdgeStyle={"edgeStyle":"elbowEdgeStyle","startArrow":"none","endArrow":"none"};');
        k.vertex = !0;
        var n = new mxCell("", new mxGeometry(0, 0, 0, 0), "edgeStyle=elbowEdgeStyle;elbow=vertical;startArrow=none;endArrow=none;rounded=0;");
        n.geometry.relative = !0;
        n.edge = !0;
        b.insertEdge(n, !0);
        k.insertEdge(n, !1);
        a.insert(g);
        a.insert(n);
        a.insert(b);
        a.insert(c);
        a.insert(k);
        return sb.createVertexTemplateFromCells([a], a.geometry.width, a.geometry.height, a.value)
      }), this.addEntry("tree root", function () {
        var a = new mxCell("Organization", new mxGeometry(0, 0, 120, 60), 'whiteSpace=wrap;html=1;align=center;treeFolding=1;treeMoving=1;newEdgeStyle={"edgeStyle":"elbowEdgeStyle","startArrow":"none","endArrow":"none"};');
        e.setAttributeForCell(a, "treeRoot", "1");
        a.vertex = !0;
        return sb.createVertexTemplateFromCells([a], a.geometry.width, a.geometry.height, a.value)
      }), this.addEntry("tree division", function () {
        var a = new mxCell("Division", new mxGeometry(20, 40, 100, 60), 'whiteSpace=wrap;html=1;align=center;verticalAlign=middle;treeFolding=1;treeMoving=1;newEdgeStyle={"edgeStyle":"elbowEdgeStyle","startArrow":"none","endArrow":"none"};');
        a.vertex = !0;
        var b = new mxCell("", new mxGeometry(0, 0, 0, 0), "edgeStyle=elbowEdgeStyle;elbow=vertical;startArrow=none;endArrow=none;rounded=0;");
        b.geometry.setTerminalPoint(new mxPoint(0, 0), !0);
        b.geometry.relative = !0;
        b.edge = !0;
        a.insertEdge(b, !1);
        return sb.createVertexTemplateFromCells([a, b], a.geometry.width, a.geometry.height, a.value)
      }), this.addEntry("tree sub sections", function () {
        var a = new mxCell("Sub Section", new mxGeometry(0, 0, 100, 60), "whiteSpace=wrap;html=1;align=center;verticalAlign=middle;treeFolding=1;treeMoving=1;");
        a.vertex = !0;
        var b = new mxCell("", new mxGeometry(0, 0, 0, 0), "edgeStyle=orthogonalEdgeStyle;startArrow=none;endArrow=none;rounded=0;targetPortConstraint=eastwest;sourcePortConstraint=northsouth;");
        b.geometry.setTerminalPoint(new mxPoint(110, -40), !0);
        b.geometry.relative = !0;
        b.edge = !0;
        a.insertEdge(b, !1);
        var c = new mxCell("Sub Section", new mxGeometry(120, 0, 100, 60), "whiteSpace=wrap;html=1;align=center;verticalAlign=middle;treeFolding=1;treeMoving=1;");
        c.vertex = !0;
        var e = new mxCell("", new mxGeometry(0, 0, 0, 0), "edgeStyle=orthogonalEdgeStyle;startArrow=none;endArrow=none;rounded=0;targetPortConstraint=eastwest;sourcePortConstraint=northsouth;");
        e.geometry.setTerminalPoint(new mxPoint(110, -40), !0);
        e.geometry.relative = !0;
        e.edge = !0;
        c.insertEdge(e, !1);
        return sb.createVertexTemplateFromCells([b, e, a, c], 220, 60, "Sub Sections")
      })])
    }
  }
})();