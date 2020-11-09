/*****sidebar setting for digital triplet start *****/
Sidebar.prototype.init = function () {
  this.addSearchPalette(false);
  this.addD3TopicPalette(true);
  this.addD3InfoPalette(true);
  this.addD3PhysPalette(true);
  this.addGeneralPalette(false);
  this.addUmlPalette(false);
};

/*****D3Topic start*****/
Sidebar.prototype.addD3TopicPalette = function (expand) {
  var sb = this;
  var fns = [
    this.createVertexTemplateEntry(
      "rounded=0;whiteSpace=wrap;html=1;layer=topic;fillColor=#ffe6cc;strokeColor=#d79b00;",
      120,
      60,
      "Function",
      "Function",
      null,
      null,
      "rect rectangle box"
    ),
    this.createVertexTemplateEntry(
      "rounded=0;whiteSpace=wrap;html=1;layer=topic;fillColor=#ffe6cc;strokeColor=#d79b00;dashed=1;",
      120,
      60,
      "[Start]",
      "Start",
      null,
      null,
      "rect rectangle box"
    ),
    this.createVertexTemplateEntry(
      "rounded=0;whiteSpace=wrap;html=1;layer=topic;fillColor=#ffe6cc;strokeColor=#d79b00;dashed=1;",
      120,
      60,
      "[End]",
      "End",
      null,
      null,
      "rect rectangle box"
    ),
    this.createVertexTemplateEntry(
      "text;html=1;strokeColor=none;layer=topic;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;",
      40,
      20,
      "Text",
      "Text",
      null,
      null,
      "text textbox textarea label"
    ),
    this.createEdgeTemplateEntry('html=1;verticalAlign=bottom;endArrow=block;layer=topic;fillColor=#ffe6cc;strokeColor=#d79b00;', 80, 0, 'Input/Output', 'Input/Output', null, 'uml sequence message call invoke dispatch'),

    this.addEntry('uml relation', function () {
      var edge = new mxCell('Control', new mxGeometry(0, 0, 0, 0), 'endArrow=block;endFill=1;html=1;edgeStyle=orthogonalEdgeStyle;align=center;verticalAlign=bottom;layer=topic;fillColor=#ffe6cc;strokeColor=#d79b00;');
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
      var edge = new mxCell('Mechanism', new mxGeometry(0, 0, 0, 0), 'endArrow=block;endFill=1;html=1;edgeStyle=orthogonalEdgeStyle;align=left;verticalAlign=middle;layer=topic;fillColor=#ffe6cc;strokeColor=#d79b00;');
      edge.geometry.setTerminalPoint(new mxPoint(0, 0), true);
      edge.geometry.setTerminalPoint(new mxPoint(0, -50), false);
      edge.geometry.relative = true;
      edge.edge = true;

      return sb.createEdgeTemplateFromCells([edge], 0, -50, 'Mechanism');
    }),
    this.createVertexTemplateEntry('swimlane;layer=topic;fillColor=#ffe6cc;strokeColor=#d79b00;', 200, 200, 'Container', 'Container', null, null, 'container swimlane lane pool group'),
    this.addEntry('uml sequence invoke call delegation synchronous invocation activation', function () {
      var cell1 = new mxCell('Data Collect', new mxGeometry(0, 0, 120, 60), 'rounded=0;whiteSpace=wrap;html=1;layer=topic;fillColor=#ffe6cc;strokeColor=#d79b00;');
      cell1.vertex = true;
      var cell2 = new mxCell('Info Analyze', new mxGeometry(190, 0, 120, 60), 'rounded=0;whiteSpace=wrap;html=1;layer=topic;fillColor=#ffe6cc;strokeColor=#d79b00;');
      cell2.vertex = true;
      var cell3 = new mxCell('Evaluate', new mxGeometry(380, 0, 120, 60), 'rounded=0;whiteSpace=wrap;html=1;layer=topic;fillColor=#ffe6cc;strokeColor=#d79b00;');
      cell3.vertex = true;
      var cell4 = new mxCell('Decide', new mxGeometry(570, 0, 120, 60), 'rounded=0;whiteSpace=wrap;html=1;layer=topic;fillColor=#ffe6cc;strokeColor=#d79b00;');
      cell4.vertex = true;
      var cell5 = new mxCell('Execute', new mxGeometry(760, 0, 120, 60), 'rounded=0;whiteSpace=wrap;html=1;layer=topic;fillColor=#ffe6cc;strokeColor=#d79b00;');
      cell5.vertex = true;

      var edge1 = new mxCell('input/output', new mxGeometry(0, 0, 0, 0), 'html=1;verticalAlign=bottom;endArrow=block;entryX=0;entryY=0.5;layer=topic;fillColor=#ffe6cc;strokeColor=#d79b00;');
      edge1.geometry.setTerminalPoint(new mxPoint(-70, 30), true);
      edge1.geometry.setTerminalPoint(new mxPoint(0, 30), false);
      edge1.geometry.relative = true;
      edge1.edge = true;

      var edge2 = new mxCell('input/output', new mxGeometry(0, 0, 0, 0), 'html=1;verticalAlign=bottom;endArrow=block;endSize=8;entryX=0;entryY=0.5;exitX=1;exitY=0.5;layer=topic;fillColor=#ffe6cc;strokeColor=#d79b00;');
      edge2.geometry.setTerminalPoint(new mxPoint(120, 30), true);
      edge2.geometry.setTerminalPoint(new mxPoint(190, 30), false);
      edge2.geometry.relative = true;
      edge2.edge = true;

      var edge3 = new mxCell('input/output', new mxGeometry(0, 0, 0, 0), 'html=1;verticalAlign=bottom;endArrow=block;endSize=8;entryX=0;entryY=0.5;exitX=1;exitY=0.5;layer=topic;fillColor=#ffe6cc;strokeColor=#d79b00;');
      edge3.geometry.setTerminalPoint(new mxPoint(310, 30), true);
      edge3.geometry.setTerminalPoint(new mxPoint(380, 30), false);
      edge3.geometry.relative = true;
      edge3.edge = true;

      var edge4 = new mxCell('input/output', new mxGeometry(0, 0, 0, 0), 'html=1;verticalAlign=bottom;endArrow=block;endSize=8;entryX=0;entryY=0.5;exitX=1;exitY=0.5;layer=topic;fillColor=#ffe6cc;strokeColor=#d79b00;');
      edge4.geometry.setTerminalPoint(new mxPoint(500, 30), true);
      edge4.geometry.setTerminalPoint(new mxPoint(570, 30), false);
      edge4.geometry.relative = true;
      edge4.edge = true;

      var edge5 = new mxCell('input/output', new mxGeometry(0, 0, 0, 0), 'html=1;verticalAlign=bottom;endArrow=block;endSize=8;entryX=0;entryY=0.5;exitX=1;exitY=0.5;layer=topic;fillColor=#ffe6cc;strokeColor=#d79b00;');
      edge5.geometry.setTerminalPoint(new mxPoint(690, 30), true);
      edge5.geometry.setTerminalPoint(new mxPoint(760, 30), false);
      edge5.geometry.relative = true;
      edge5.edge = true;

      var edge6 = new mxCell('input/output', new mxGeometry(0, 0, 0, 0), 'html=1;verticalAlign=bottom;endArrow=block;endSize=8;exitX=1;exitY=0.5;layer=topic;fillColor=#ffe6cc;strokeColor=#d79b00;');
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
      "rounded=0;whiteSpace=wrap;html=1;layer=info;fillColor=#dae8fc;strokeColor=#6c8ebf;",
      120,
      60,
      "Function",
      "Function",
      null,
      null,
      "rect rectangle box"
    ),
    this.createVertexTemplateEntry(
      "rounded=0;whiteSpace=wrap;html=1;layer=info;fillColor=#dae8fc;strokeColor=#6c8ebf;dashed=1;",
      120,
      60,
      "[Start]",
      "Start",
      null,
      null,
      "rect rectangle box"
    ),
    this.createVertexTemplateEntry(
      "rounded=0;whiteSpace=wrap;html=1;layer=info;fillColor=#dae8fc;strokeColor=#6c8ebf;dashed=1;",
      120,
      60,
      "[End]",
      "End",
      null,
      null,
      "rect rectangle box"
    ),
    this.createVertexTemplateEntry(
      "text;html=1;strokeColor=none;layer=info;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;",
      40,
      20,
      "Text",
      "Text",
      null,
      null,
      "text textbox textarea label"
    ),
    this.createEdgeTemplateEntry('html=1;verticalAlign=bottom;endArrow=block;layer=info;fillColor=#dae8fc;strokeColor=#6c8ebf;', 80, 0, 'Input/Output', 'Input/Output', null, 'uml sequence message call invoke dispatch'),

    this.addEntry('uml relation', function () {
      var edge = new mxCell('Control', new mxGeometry(0, 0, 0, 0), 'endArrow=block;endFill=1;html=1;edgeStyle=orthogonalEdgeStyle;align=center;verticalAlign=bottom;layer=info;fillColor=#dae8fc;strokeColor=#6c8ebf;');
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
      var edge = new mxCell('Mechanism', new mxGeometry(0, 0, 0, 0), 'endArrow=block;endFill=1;html=1;edgeStyle=orthogonalEdgeStyle;align=left;verticalAlign=middle;layer=info;fillColor=#dae8fc;strokeColor=#6c8ebf;');
      edge.geometry.setTerminalPoint(new mxPoint(0, 0), true);
      edge.geometry.setTerminalPoint(new mxPoint(0, -50), false);
      edge.geometry.relative = true;
      edge.edge = true;

      return sb.createEdgeTemplateFromCells([edge], 0, -50, 'Mechanism');
    }),
    this.createVertexTemplateEntry('swimlane;layer=info;fillColor=#dae8fc;strokeColor=#6c8ebf;', 200, 200, 'Container', 'Container', null, null, 'container swimlane lane pool group'),
  ];
  this.addPaletteFunctions("D3Info", "D3Info", null != expand ? expand : true, fns);
};
/*****D3Info end*****/

/*****D3Phys start*****/
Sidebar.prototype.addD3PhysPalette = function (expand) {
  var sb = this;
  var fns = [
    this.createVertexTemplateEntry(
      "rounded=0;whiteSpace=wrap;html=1;layer=phys;fillColor=#d5e8d4;strokeColor=#82b366;",
      120,
      60,
      "Function",
      "Function",
      null,
      null,
      "rect rectangle box"
    ),
    this.createVertexTemplateEntry(
      "rounded=0;whiteSpace=wrap;html=1;layer=phys;fillColor=#d5e8d4;strokeColor=#82b366;dashed=1;",
      120,
      60,
      "[Start]",
      "Start",
      null,
      null,
      "rect rectangle box"
    ),
    this.createVertexTemplateEntry(
      "rounded=0;whiteSpace=wrap;html=1;layer=phys;fillColor=#d5e8d4;strokeColor=#82b366;dashed=1;",
      120,
      60,
      "[End]",
      "End",
      null,
      null,
      "rect rectangle box"
    ),
    this.createVertexTemplateEntry(
      "text;html=1;strokeColor=none;layer=phys;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;",
      40,
      20,
      "Text",
      "Text",
      null,
      null,
      "text textbox textarea label"
    ),
    this.createEdgeTemplateEntry('html=1;verticalAlign=bottom;endArrow=block;layer=phys;fillColor=#d5e8d4;strokeColor=#82b366;', 80, 0, 'Input/Output', 'Input/Output', null, 'uml sequence message call invoke dispatch'),

    this.addEntry('uml relation', function () {
      var edge = new mxCell('Control', new mxGeometry(0, 0, 0, 0), 'endArrow=block;endFill=1;html=1;edgeStyle=orthogonalEdgeStyle;align=center;verticalAlign=bottom;layer=phys;fillColor=#d5e8d4;strokeColor=#82b366;');
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
      var edge = new mxCell('Mechanism', new mxGeometry(0, 0, 0, 0), 'endArrow=block;endFill=1;html=1;edgeStyle=orthogonalEdgeStyle;align=left;verticalAlign=middle;layer=phys;fillColor=#d5e8d4;strokeColor=#82b366;');
      edge.geometry.setTerminalPoint(new mxPoint(0, 0), true);
      edge.geometry.setTerminalPoint(new mxPoint(0, -50), false);
      edge.geometry.relative = true;
      edge.edge = true;

      return sb.createEdgeTemplateFromCells([edge], 0, -50, 'Mechanism');
    }),
    this.createVertexTemplateEntry('swimlane;layer=phys;fillColor=#d5e8d4;strokeColor=#82b366;', 200, 200, 'Container', 'Container', null, null, 'container swimlane lane pool group'),
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
Graph.prototype.isCloneConnectSource = function(source)
{
	var layout = null;

	if (this.layoutManager != null)
	{
		layout = this.layoutManager.getLayout(this.model.getParent(source));
	}
	
	return this.isTableRow(source) || this.isTableCell(source) ||
		(layout != null && layout.constructor == mxStackLayout);
};

/**
 * Adds a connection to the given vertex.
 */
Graph.prototype.connectVertex = function(source, direction, length, evt, forceClone, ignoreCellAt, createTarget, done)
{	
	ignoreCellAt = (ignoreCellAt) ? ignoreCellAt : false;
	
	// Ignores relative edge labels
	if (source.geometry.relative && this.model.isEdge(source.parent))
	{
		return [];
	}
	
	// Uses parent for relative child cells
	while (source.geometry.relative && this.model.isVertex(source.parent))
	{
		source = source.parent;
	}
	
	// Handles clone connect sources
	var cloneSource = this.isCloneConnectSource(source);
	var composite = (cloneSource) ? source : this.getCompositeParent(source);
	
	var pt = (source.geometry.relative && source.parent.geometry != null) ?
		new mxPoint(source.parent.geometry.width * source.geometry.x,
			source.parent.geometry.height * source.geometry.y) :
		new mxPoint(composite.geometry.x, composite.geometry.y);
		
	if (direction == mxConstants.DIRECTION_NORTH)
	{
		pt.x += composite.geometry.width / 2;
		pt.y -= length ;
	}
	else if (direction == mxConstants.DIRECTION_SOUTH)
	{
		pt.x += composite.geometry.width / 2;
		pt.y += composite.geometry.height + length;
	}
	else if (direction == mxConstants.DIRECTION_WEST)
	{
		pt.x -= length;
		pt.y += composite.geometry.height / 2;
	}
	else
	{
		pt.x += composite.geometry.width + length;
		pt.y += composite.geometry.height / 2;
	}

	var parentState = this.view.getState(this.model.getParent(source));
	var s = this.view.scale;
	var t = this.view.translate;
	var dx = t.x * s;
	var dy = t.y * s;
	
	if (parentState != null && this.model.isVertex(parentState.cell))
	{
		dx = parentState.x;
		dy = parentState.y;
	}

	// Workaround for relative child cells
	if (this.model.isVertex(source.parent) && source.geometry.relative)
	{
		pt.x += source.parent.geometry.x;
		pt.y += source.parent.geometry.y;
	}
	
	// Checks actual end point of edge for target cell
	var rect = (!ignoreCellAt) ? new mxRectangle(dx + pt.x * s, dy + pt.y * s).grow(40) : null;
	var tempCells = (rect != null) ? this.getCells(0, 0, 0, 0, null, null, rect) : null;
	var target = (tempCells != null && tempCells.length > 0) ? tempCells.reverse()[0] : null;
	var keepParent = false;
	
	if (target != null && this.model.isAncestor(target, source))
	{
		keepParent = true;
		target = null;
	}
	
	// Checks for swimlane at drop location
	if (target == null)
	{
		var temp = this.getSwimlaneAt(dx + pt.x * s, dy + pt.y * s);
		
		if (temp != null)
		{
			keepParent = false;
			target = temp;
		}
	}
	
	// Checks if target or ancestor is locked
	var temp = target;
	
	while (temp != null)
	{
		if (this.isCellLocked(temp))
		{
			target = null;
			break;
		}
		
		temp = this.model.getParent(temp);
	}
	
	// Checks if source and target intersect
	if (target != null)
	{
		var sourceState = this.view.getState(source);
		var targetState = this.view.getState(target);
		
		if (sourceState != null && targetState != null && mxUtils.intersects(sourceState, targetState))
		{
			target = null;
		}
	}
	
	var duplicate = (!mxEvent.isShiftDown(evt) || mxEvent.isControlDown(evt)) || forceClone;
	
	if (duplicate)
	{
		if (direction == mxConstants.DIRECTION_NORTH)
		{
			pt.y -= source.geometry.height / 2;
		}
		else if (direction == mxConstants.DIRECTION_SOUTH)
		{
			pt.y += source.geometry.height / 2;
		}
		else if (direction == mxConstants.DIRECTION_WEST)
		{
			pt.x -= source.geometry.width / 2;
		}
		else
		{
			pt.x += source.geometry.width / 2;
		}
	}

	// Uses connectable parent vertex if one exists
	// TODO: Fix using target as parent for swimlane
	if (target != null && !this.isCellConnectable(target) && !this.isSwimlane(target))
	{
		var parent = this.getModel().getParent(target);
		
		if (this.getModel().isVertex(parent) && this.isCellConnectable(parent))
		{
			target = parent;
		}
	}
	
	if (target == source || this.model.isEdge(target) ||
		!this.isCellConnectable(target) &&
		!this.isSwimlane(target))
	{
		target = null;
	}
	
	var result = [];
	var swimlane = target != null && this.isSwimlane(target);
	var realTarget = (!swimlane) ? target : null;

	var execute = mxUtils.bind(this, function(targetCell)
	{
		if (createTarget == null || targetCell != null || (target == null && cloneSource))
		{
			this.model.beginUpdate();
			try
			{
				if (realTarget == null && duplicate)
				{
					// Handles relative children
					var cellToClone = (targetCell != null) ? targetCell : source;
					var geo = this.getCellGeometry(cellToClone);
					
					while (geo != null && geo.relative)
					{
						cellToClone = this.getModel().getParent(cellToClone);
						geo = this.getCellGeometry(cellToClone);
					}
					
					// Handles composite cells for cloning
					cellToClone =  (cloneSource) ? source : this.getCompositeParent(cellToClone);
					realTarget = (targetCell != null) ? targetCell : this.duplicateCells([cellToClone], false)[0];
					
					if (targetCell != null)
					{
						this.addCells([realTarget], this.model.getParent(source), null, null, null, true);
					}
					
					var geo = this.getCellGeometry(realTarget);
	
					if (geo != null)
					{
						geo.x = pt.x - geo.width / 2;
						geo.y = pt.y - geo.height / 2;
					}
					
					if (swimlane)
					{
						this.addCells([realTarget], target, null, null, null, true);
						target = null;
					}
					else if (duplicate && target == null && !keepParent && !cloneSource)
					{
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
          if (style[i].indexOf('layer') !== -1 || style[i].indexOf('fillColor') !== -1 || style[i].indexOf('strokeColor') !== -1) {
            edgestyle = edgestyle + style[i] + ";";
          }
        }
        edge.style = edge.style + edgestyle;
        /*****modification part for digital triplet end*****/
				// Inserts edge before source
				if (edge != null && this.connectionHandler.insertBeforeSource)
				{
					var index = null;
					var tmp = source;
					
					while (tmp.parent != null && tmp.geometry != null &&
						tmp.geometry.relative && tmp.parent != edge.parent)
					{
						tmp = this.model.getParent(tmp);
					}
				
					if (tmp != null && tmp.parent != null && tmp.parent == edge.parent)
					{
						var index = tmp.parent.getIndex(tmp);
						this.model.add(tmp.parent, edge, index);
					}
				}
				
				// Special case: Click on west icon puts clone before cell
				if (target == null && realTarget != null && source.parent != null &&
					cloneSource && direction == mxConstants.DIRECTION_WEST)
				{
					var index = source.parent.getIndex(source);
					this.model.add(source.parent, realTarget, index);
				}
				
				if (edge != null)
				{
					result.push(edge);
				}
				
				if (target == null && realTarget != null)
				{
					result.push(realTarget);
				}
				
				if (realTarget == null && edge != null)
				{
					edge.geometry.setTerminalPoint(pt, false);
				}
				
				if (edge != null)
				{
					this.fireEvent(new mxEventObject('cellsInserted', 'cells', [edge]));
				}
			}
			finally
			{
				this.model.endUpdate();
			}
		}
			
		if (done != null)
		{
			done(result);
		}
		else
		{
			return result;
		}
	});
	
	if (createTarget != null && realTarget == null && duplicate &&
		(target != null || !cloneSource))
	{
		createTarget(dx + pt.x * s, dy + pt.y * s, execute);
	}
	else
	{
		return execute(realTarget);
	}
};

HoverIcons.prototype.drag = function (evt, x, y) {
  this.graph.popupMenuHandler.hideMenu();
  this.graph.stopEditing(false);

  // Checks if state was removed in call to stopEditing above
  if (this.currentState != null) {
    this.graph.connectionHandler.start(this.currentState, x, y);
    this.graph.isMouseTrigger = mxEvent.isMouseEvent(evt);
    this.graph.isMouseDown = true;

    // Hides handles for selection cell
    var handler = this.graph.selectionCellsHandler.getHandler(this.currentState.cell);

    var style = [];
    var layer_source = "",
      fillColor_source = "",
      strokeColor_source = "";
    style = this.currentState.cell.style.split(';');
    for (var i = 0; i < style.length; i++) {
      if (style[i].indexOf('layer') !== -1) {
        layer_source = style[i].replace('layer=', '');
      } else if (style[i].indexOf('fillColor') !== -1) {
        fillColor_source = style[i].replace('fillColor=', '');
      } else if (style[i].indexOf('strokeColor') !== -1) {
        strokeColor_source = style[i].replace('strokeColor=', '');
      }
    }

    if (handler != null) {
      handler.setHandlesVisible(false);
    }

    // Ctrl+shift drag sets source constraint
    var es = this.graph.connectionHandler.edgeState;

    if (evt != null && mxEvent.isShiftDown(evt) && mxEvent.isControlDown(evt) && es != null &&
      mxUtils.getValue(es.style, mxConstants.STYLE_EDGE, null) === 'orthogonalEdgeStyle') {
      var direction = this.getDirection();
      es.cell.style = mxUtils.setStyle(es.cell.style, 'sourcePortConstraint', direction);
      es.style['sourcePortConstraint'] = direction;
    }

    es.style.layer = layer_source;
    es.style.fillColor = fillColor_source;
    es.style.strokeColor = strokeColor_source;

    this.graph.currentEdgeStyle.layer = layer_source;
    this.graph.currentEdgeStyle.fillColor = fillColor_source;
    this.graph.currentEdgeStyle.strokeColor = strokeColor_source;
  }
};
/*****setting for the graph made through hover icon, partycularly connection edge end*****/


mxConnectionHandler.prototype.mouseDown = function (a, b) {
  this.mouseDownCounter++;
  if (this.isEnabled() && this.graph.isEnabled() && !b.isConsumed() && !this.isConnecting() && this.isStartEvent(b)) {
    null != this.constraintHandler.currentConstraint && null != this.constraintHandler.currentFocus && null != this.constraintHandler.currentPoint ? (this.sourceConstraint = this.constraintHandler.currentConstraint, this.previous = this.constraintHandler.currentFocus, this.first = this.constraintHandler.currentPoint.clone()) : this.first = new mxPoint(b.getGraphX(), b.getGraphY());
    var layer_source = "",
        fillColor_source = "",
        strokeColor_source = "";
    layer_source=b.sourceState.style['layer'];
    fillColor_source=b.sourceState.style['fillColor'];
    strokeColor_source=b.sourceState.style['strokeColor'];
    this.edgeState = this.createEdgeState(b);
    this.graph.connectionHandler.edgeState['style'].layer = layer_source;
    this.graph.connectionHandler.edgeState['style'].fillColor =fillColor_source;
    this.graph.connectionHandler.edgeState['style'].strokeColor = strokeColor_source;
    this.graph.currentEdgeStyle.layer = layer_source;
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