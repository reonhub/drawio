/*****sidebar setting for digital triplet start *****/
Sidebar.prototype.init = function () {
  var path = STENCIL_PATH;
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
      "",
      "Function",
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

    // this.addEntry(
    //   "line lines connector connectors connection connections arrow arrows edge title",
    //   mxUtils.bind(this, function () {
    //     var edge = new mxCell(
    //       "",
    //       new mxGeometry(0, 0, 0, 0),
    //       "endArrow=block;html=1;class=Input/Output;layer=topic;fillColor=#ffe6cc;strokeColor=#d79b00;"
    //     );
    //     edge.geometry.setTerminalPoint(new mxPoint(0, 0), true);
    //     edge.geometry.setTerminalPoint(new mxPoint(100, 0), false);
    //     edge.geometry.relative = true;
    //     edge.edge = true;
    //     var cell = new mxCell(
    //       "Input/Output",
    //       new mxGeometry(0, 0, 0, 0),
    //       "edgeLabel;resizable=0;html=1;align=center;verticalAlign=middle;"
    //     );
    //     cell.geometry.relative = true;
    //     cell.setConnectable(false);
    //     cell.vertex = true;
    //     edge.insert(cell);
    //     return this.createEdgeTemplateFromCells([edge], 100, 0, "Input/Output");
    //   })
    // ),
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

    // this.addEntry('uml relation', function () {
    //   var edge = new mxCell('Control', new mxGeometry(0, 0, 0, 0), 'endArrow=block;endFill=1;html=1;edgeStyle=orthogonalEdgeStyle;align=center;verticalAlign=bottom;layer=topic;fillColor=#ffe6cc;strokeColor=#d79b00;');
    //   edge.geometry.setTerminalPoint(new mxPoint(0, 0), true);
    //   edge.geometry.setTerminalPoint(new mxPoint(0, 50), false);
    //   edge.geometry.relative = true;
    //   edge.geometry.x = -1;
    //   edge.edge = true;

    //   var cell = new mxCell('Reason', new mxGeometry(0, 0, 0, 0), 'edgeLabel;resizable=0;html=1;align=center;verticalAlign=middle;');
    //   cell.geometry.relative = true;
    //   cell.setConnectable(false);
    //   cell.vertex = true;
    //   edge.insert(cell);

    //   return sb.createEdgeTemplateFromCells([edge], 0, 50, 'Control');
    // }),

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
      var cell1 = new mxCell('Data Collect', new mxGeometry(0, 0, 120, 60), 'html=1;points=[];perimeter=orthogonalPerimeter;layer=topic;fillColor=#ffe6cc;strokeColor=#d79b00;');
      cell1.vertex = true;
      var cell2 = new mxCell('Info Analyze', new mxGeometry(190, 0, 120, 60), 'html=1;points=[];perimeter=orthogonalPerimeter;layer=topic;fillColor=#ffe6cc;strokeColor=#d79b00;');
      cell2.vertex = true;
      var cell3 = new mxCell('Decide', new mxGeometry(380, 0, 120, 60), 'html=1;points=[];perimeter=orthogonalPerimeter;layer=topic;fillColor=#ffe6cc;strokeColor=#d79b00;');
      cell3.vertex = true;
      var cell4 = new mxCell('Execute', new mxGeometry(570, 0, 120, 60), 'html=1;points=[];perimeter=orthogonalPerimeter;layer=topic;fillColor=#ffe6cc;strokeColor=#d79b00;');
      cell4.vertex = true;

      var edge1 = new mxCell('', new mxGeometry(0, 0, 0, 0), 'html=1;verticalAlign=bottom;endArrow=block;entryX=0;entryY=0.5;layer=topic;fillColor=#ffe6cc;strokeColor=#d79b00;');
      edge1.geometry.setTerminalPoint(new mxPoint(-70, 30), true);
      edge1.geometry.setTerminalPoint(new mxPoint(0, 30), false);
      edge1.geometry.relative = true;
      edge1.edge = true;

      var edge2 = new mxCell('', new mxGeometry(0, 0, 0, 0), 'html=1;verticalAlign=bottom;endArrow=block;endSize=8;entryX=0;entryY=0.5;exitX=1;exitY=0.5;layer=topic;fillColor=#ffe6cc;strokeColor=#d79b00;');
      edge2.geometry.setTerminalPoint(new mxPoint(120, 30), true);
      edge2.geometry.setTerminalPoint(new mxPoint(190, 30), false);
      edge2.geometry.relative = true;
      edge2.edge = true;

      var edge3 = new mxCell('', new mxGeometry(0, 0, 0, 0), 'html=1;verticalAlign=bottom;endArrow=block;endSize=8;entryX=0;entryY=0.5;exitX=1;exitY=0.5;layer=topic;fillColor=#ffe6cc;strokeColor=#d79b00;');
      edge3.geometry.setTerminalPoint(new mxPoint(310, 30), true);
      edge3.geometry.setTerminalPoint(new mxPoint(380, 30), false);
      edge3.geometry.relative = true;
      edge3.edge = true;

      var edge4 = new mxCell('', new mxGeometry(0, 0, 0, 0), 'html=1;verticalAlign=bottom;endArrow=block;endSize=8;entryX=0;entryY=0.5;exitX=1;exitY=0.5;layer=topic;fillColor=#ffe6cc;strokeColor=#d79b00;');
      edge4.geometry.setTerminalPoint(new mxPoint(500, 30), true);
      edge4.geometry.setTerminalPoint(new mxPoint(570, 30), false);
      edge4.geometry.relative = true;
      edge4.edge = true;

      var edge5 = new mxCell('', new mxGeometry(0, 0, 0, 0), 'html=1;verticalAlign=bottom;endArrow=block;endSize=8;exitX=1;exitY=0.5;layer=topic;fillColor=#ffe6cc;strokeColor=#d79b00;');
      edge5.geometry.setTerminalPoint(new mxPoint(690, 30), true);
      edge5.geometry.setTerminalPoint(new mxPoint(780, 30), false);
      edge5.geometry.relative = true;
      edge5.edge = true;

      cell1.insertEdge(edge1, false);
      cell1.insertEdge(edge2, true);
      cell2.insertEdge(edge2, false);
      cell2.insertEdge(edge3, true);
      cell3.insertEdge(edge3, false);
      cell3.insertEdge(edge4, true);
      cell4.insertEdge(edge4, false);
      cell4.insertEdge(edge5, true);

      return sb.createVertexTemplateFromCells([cell1, cell2, cell3, cell4, edge1, edge2, edge3, edge4, edge5], 640, 60, 'Engineering Cycle');
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
      "",
      "Function",
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

    // this.addEntry(
    //   "line lines connector connectors connection connections arrow arrows edge title",
    //   mxUtils.bind(this, function () {
    //     var edge = new mxCell(
    //       "",
    //       new mxGeometry(0, 0, 0, 0),
    //       "endArrow=block;html=1;class=Input/Output;layer=info;fillColor=#dae8fc;strokeColor=#6c8ebf;"
    //     );
    //     edge.geometry.setTerminalPoint(new mxPoint(0, 0), true);
    //     edge.geometry.setTerminalPoint(new mxPoint(100, 0), false);
    //     edge.geometry.relative = true;
    //     edge.edge = true;
    //     var cell = new mxCell(
    //       "Input/Output",
    //       new mxGeometry(0, 0, 0, 0),
    //       "edgeLabel;resizable=0;html=1;align=center;verticalAlign=middle;"
    //     );
    //     cell.geometry.relative = true;
    //     cell.setConnectable(false);
    //     cell.vertex = true;
    //     edge.insert(cell);
    //     return this.createEdgeTemplateFromCells([edge], 100, 0, "Input/Output");
    //   })
    // ),

    // this.addEntry('uml relation', function () {
    //   var edge = new mxCell('Control', new mxGeometry(0, 0, 0, 0), 'endArrow=block;endFill=1;html=1;edgeStyle=orthogonalEdgeStyle;align=center;verticalAlign=bottom;layer=info;fillColor=#dae8fc;strokeColor=#6c8ebf;');
    //   edge.geometry.setTerminalPoint(new mxPoint(0, 0), true);
    //   edge.geometry.setTerminalPoint(new mxPoint(0, 50), false);
    //   edge.geometry.relative = true;
    //   edge.geometry.x = -1;
    //   edge.edge = true;

    //   var cell = new mxCell('Reason', new mxGeometry(-0.1, 0, 0, 0), 'edgeLabel;resizable=0;html=1;align=center;verticalAlign=middle;');
    //   cell.geometry.relative = true;
    //   cell.setConnectable(false);
    //   cell.vertex = true;
    //   edge.insert(cell);

    //   return sb.createEdgeTemplateFromCells([edge], 0, 50, 'Control');
    // }),
    this.createEdgeTemplateEntry('html=1;verticalAlign=bottom;endArrow=block;layer=topic;fillColor=#dae8fc;strokeColor=#6c8ebf;', 80, 0, 'Input/Output', 'Input/Output', null, 'uml sequence message call invoke dispatch'),

    this.addEntry('uml relation', function () {
      var edge = new mxCell('Control', new mxGeometry(0, 0, 0, 0), 'endArrow=block;endFill=1;html=1;edgeStyle=orthogonalEdgeStyle;align=center;verticalAlign=bottom;layer=topic;fillColor=#dae8fc;strokeColor=#6c8ebf;');
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
      var edge = new mxCell('Mechanism', new mxGeometry(0, 0, 0, 0), 'endArrow=block;endFill=1;html=1;edgeStyle=orthogonalEdgeStyle;align=left;verticalAlign=middle;layer=topic;fillColor=#dae8fc;strokeColor=#6c8ebf;');
      edge.geometry.setTerminalPoint(new mxPoint(0, 0), true);
      edge.geometry.setTerminalPoint(new mxPoint(0, -50), false);
      edge.geometry.relative = true;
      edge.edge = true;

      return sb.createEdgeTemplateFromCells([edge], 0, -50, 'Mechanism');
    }),

    // this.addEntry('uml relation', function () {
    //   var edge = new mxCell('Mechanism', new mxGeometry(0, 0, 0, 0), 'endArrow=block;endFill=1;html=1;edgeStyle=orthogonalEdgeStyle;align=center;verticalAlign=middle;layer=info;fillColor=#dae8fc;strokeColor=#6c8ebf;');
    //   edge.geometry.setTerminalPoint(new mxPoint(0, 0), true);
    //   edge.geometry.setTerminalPoint(new mxPoint(0, -50), false);
    //   edge.geometry.relative = true;
    //   edge.edge = true;

    //   return sb.createEdgeTemplateFromCells([edge], 0, 50, 'Control');
    // }),
    this.createVertexTemplateEntry('swimlane;layer=info;fillColor=#dae8fc;strokeColor=#6c8ebf;', 200, 200, 'Container', 'Container', null, null, 'container swimlane lane pool group'),
    // this.addEntry('uml sequence invoke call delegation synchronous invocation activation', function()
    // {
    //   	var cell1 = new mxCell('Data Collect', new mxGeometry(0, 0, 120, 60), 'html=1;points=[];perimeter=orthogonalPerimeter;layer=topic;fillColor=#dae8fc;strokeColor=#6c8ebf;');
    //     cell1.vertex = true;
    //     var cell2 = new mxCell('Info Analyze', new mxGeometry(190, 0, 120, 60), 'html=1;points=[];perimeter=orthogonalPerimeter;layer=topic;fillColor=#dae8fc;strokeColor=#6c8ebf;');
    //     cell2.vertex = true;
    //     var cell3 = new mxCell('Decide', new mxGeometry(380, 0, 120, 60), 'html=1;points=[];perimeter=orthogonalPerimeter;layer=topic;fillColor=#dae8fc;strokeColor=#6c8ebf;');
    //     cell3.vertex = true;
    //     var cell4 = new mxCell('Execute', new mxGeometry(570, 0, 120, 60), 'html=1;points=[];perimeter=orthogonalPerimeter;layer=topic;fillColor=#dae8fc;strokeColor=#6c8ebf;');
    //   	cell4.vertex = true;

    //     var edge1 = new mxCell('', new mxGeometry(0, 0, 0, 0), 'html=1;verticalAlign=bottom;endArrow=block;entryX=0;entryY=0.5;layer=topic;fillColor=#dae8fc;strokeColor=#6c8ebf;');
    //     edge1.geometry.setTerminalPoint(new mxPoint(-70, 30), true);
    //     edge1.geometry.setTerminalPoint(new mxPoint(0, 30), false);
    //     edge1.geometry.relative = true;
    //     edge1.edge = true;

    //     var edge2 = new mxCell('', new mxGeometry(0, 0, 0, 0), 'html=1;verticalAlign=bottom;endArrow=block;endSize=8;entryX=0;entryY=0.5;exitX=1;exitY=0.5;layer=topic;fillColor=#dae8fc;strokeColor=#6c8ebf;');
    //     edge2.geometry.setTerminalPoint(new mxPoint(120, 30), true);
    //     edge2.geometry.setTerminalPoint(new mxPoint(190, 30), false);
    //     edge2.geometry.relative = true;
    //     edge2.edge = true;

    //     var edge3 = new mxCell('', new mxGeometry(0, 0, 0, 0), 'html=1;verticalAlign=bottom;endArrow=block;endSize=8;entryX=0;entryY=0.5;exitX=1;exitY=0.5;layer=topic;fillColor=#dae8fc;strokeColor=#6c8ebf;');
    //     edge3.geometry.setTerminalPoint(new mxPoint(310, 30), true);
    //     edge3.geometry.setTerminalPoint(new mxPoint(380, 30), false);
    //     edge3.geometry.relative = true;
    //     edge3.edge = true;

    //     var edge4 = new mxCell('', new mxGeometry(0, 0, 0, 0), 'html=1;verticalAlign=bottom;endArrow=block;endSize=8;entryX=0;entryY=0.5;exitX=1;exitY=0.5;layer=topic;fillColor=#dae8fc;strokeColor=#6c8ebf;');
    //     edge4.geometry.setTerminalPoint(new mxPoint(500, 30), true);
    //     edge4.geometry.setTerminalPoint(new mxPoint(570, 30), false);
    //     edge4.geometry.relative = true;
    //     edge4.edge = true;

    //     var edge5 = new mxCell('', new mxGeometry(0, 0, 0, 0), 'html=1;verticalAlign=bottom;endArrow=block;endSize=8;exitX=1;exitY=0.5;layer=topic;fillColor=#dae8fc;strokeColor=#6c8ebf;');
    //     edge5.geometry.setTerminalPoint(new mxPoint(690, 30), true);
    //     edge5.geometry.setTerminalPoint(new mxPoint(780, 30), false);
    //     edge5.geometry.relative = true;
    //     edge5.edge = true;

    //     cell1.insertEdge(edge1, false);
    //     cell1.insertEdge(edge2, true);
    //     cell2.insertEdge(edge2, false);
    //     cell2.insertEdge(edge3, true);
    //     cell3.insertEdge(edge3, false);
    //     cell3.insertEdge(edge4, true);
    //     cell4.insertEdge(edge4, false);
    //     cell4.insertEdge(edge5, true);

    // 	return sb.createVertexTemplateFromCells([cell1, cell2, cell3, cell4, edge1, edge2, edge3, edge4, edge5], 640, 60, 'Engineering Cycle');
    // })
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
      "",
      "Function",
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

    // this.addEntry(
    //   "line lines connector connectors connection connections arrow arrows edge title",
    //   mxUtils.bind(this, function () {
    //     var edge = new mxCell(
    //       "",
    //       new mxGeometry(0, 0, 0, 0),
    //       "endArrow=block;html=1;class=Input/Output;layer=phys;fillColor=#d5e8d4;strokeColor=#82b366;"
    //     );
    //     edge.geometry.setTerminalPoint(new mxPoint(0, 0), true);
    //     edge.geometry.setTerminalPoint(new mxPoint(100, 0), false);
    //     edge.geometry.relative = true;
    //     edge.edge = true;
    //     var cell = new mxCell(
    //       "Input/Output",
    //       new mxGeometry(0, 0, 0, 0),
    //       "edgeLabel;resizable=0;html=1;align=center;verticalAlign=middle;"
    //     );
    //     cell.geometry.relative = true;
    //     cell.setConnectable(false);
    //     cell.vertex = true;
    //     edge.insert(cell);
    //     return this.createEdgeTemplateFromCells([edge], 100, 0, "Input/Output");
    //   })
    // ),
    // this.addEntry('uml relation', function () {
    //   var edge = new mxCell('Control', new mxGeometry(0, 0, 0, 0), 'endArrow=block;endFill=1;html=1;edgeStyle=orthogonalEdgeStyle;align=center;verticalAlign=bottom;layer=phys;fillColor=#d5e8d4;strokeColor=#82b366;');
    //   edge.geometry.setTerminalPoint(new mxPoint(0, 0), true);
    //   edge.geometry.setTerminalPoint(new mxPoint(0, 50), false);
    //   edge.geometry.relative = true;
    //   edge.geometry.x = -1;
    //   edge.edge = true;

    //   var cell = new mxCell('Reason', new mxGeometry(-0.1, 0, 0, 0), 'edgeLabel;resizable=0;html=1;align=center;verticalAlign=middle;');
    //   cell.geometry.relative = true;
    //   cell.setConnectable(false);
    //   cell.vertex = true;
    //   edge.insert(cell);

    //   return sb.createEdgeTemplateFromCells([edge], 0, 50, 'Control');
    // }),

    // this.addEntry('uml relation', function () {
    //   var edge = new mxCell('Mechanism', new mxGeometry(0, 0, 0, 0), 'endArrow=block;endFill=1;html=1;edgeStyle=orthogonalEdgeStyle;align=center;verticalAlign=middle;layer=phys;fillColor=#d5e8d4;strokeColor=#82b366;');
    //   edge.geometry.setTerminalPoint(new mxPoint(0, 0), true);
    //   edge.geometry.setTerminalPoint(new mxPoint(0, -50), false);
    //   edge.geometry.relative = true;
    //   edge.edge = true;

    //   return sb.createEdgeTemplateFromCells([edge], 0, 50, 'Control');
    // }),
    // this.createVertexTemplateEntry('swimlane;layer=phys;fillColor=#d5e8d4;strokeColor=#82b366;', 200, 200, 'Container', 'Container', null, null, 'container swimlane lane pool group'),
    this.createEdgeTemplateEntry('html=1;verticalAlign=bottom;endArrow=block;layer=topic;fillColor=#d5e8d4;strokeColor=#82b366;', 80, 0, 'Input/Output', 'Input/Output', null, 'uml sequence message call invoke dispatch'),

    this.addEntry('uml relation', function () {
      var edge = new mxCell('Control', new mxGeometry(0, 0, 0, 0), 'endArrow=block;endFill=1;html=1;edgeStyle=orthogonalEdgeStyle;align=center;verticalAlign=bottom;layer=topic;fillColor=#d5e8d4;strokeColor=#82b366;');
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
      var edge = new mxCell('Mechanism', new mxGeometry(0, 0, 0, 0), 'endArrow=block;endFill=1;html=1;edgeStyle=orthogonalEdgeStyle;align=left;verticalAlign=middle;layer=topic;fillColor=#d5e8d4;strokeColor=#82b366;');
      edge.geometry.setTerminalPoint(new mxPoint(0, 0), true);
      edge.geometry.setTerminalPoint(new mxPoint(0, -50), false);
      edge.geometry.relative = true;
      edge.edge = true;

      return sb.createEdgeTemplateFromCells([edge], 0, -50, 'Mechanism');
    }),
    // this.addEntry('uml sequence invoke call delegation synchronous invocation activation', function()
    // {
    //   	var cell1 = new mxCell('Data Collect', new mxGeometry(0, 0, 120, 60), 'html=1;points=[];perimeter=orthogonalPerimeter;layer=topic;fillColor=#d5e8d4;strokeColor=#82b366;');
    //     cell1.vertex = true;
    //     var cell2 = new mxCell('Info Analyze', new mxGeometry(190, 0, 120, 60), 'html=1;points=[];perimeter=orthogonalPerimeter;layer=topic;fillColor=#d5e8d4;strokeColor=#82b366;');
    //     cell2.vertex = true;
    //     var cell3 = new mxCell('Decide', new mxGeometry(380, 0, 120, 60), 'html=1;points=[];perimeter=orthogonalPerimeter;layer=topic;fillColor=#d5e8d4;strokeColor=#82b366;');
    //     cell3.vertex = true;
    //     var cell4 = new mxCell('Execute', new mxGeometry(570, 0, 120, 60), 'html=1;points=[];perimeter=orthogonalPerimeter;layer=topic;fillColor=#d5e8d4;strokeColor=#82b366;');
    //   	cell4.vertex = true;

    //     var edge1 = new mxCell('', new mxGeometry(0, 0, 0, 0), 'html=1;verticalAlign=bottom;endArrow=block;entryX=0;entryY=0.5;layer=topic;fillColor=#d5e8d4;strokeColor=#82b366;');
    //     edge1.geometry.setTerminalPoint(new mxPoint(-70, 30), true);
    //     edge1.geometry.setTerminalPoint(new mxPoint(0, 30), false);
    //     edge1.geometry.relative = true;
    //     edge1.edge = true;

    //     var edge2 = new mxCell('', new mxGeometry(0, 0, 0, 0), 'html=1;verticalAlign=bottom;endArrow=block;endSize=8;entryX=0;entryY=0.5;exitX=1;exitY=0.5;layer=topic;fillColor=#d5e8d4;strokeColor=#82b366;');
    //     edge2.geometry.setTerminalPoint(new mxPoint(120, 30), true);
    //     edge2.geometry.setTerminalPoint(new mxPoint(190, 30), false);
    //     edge2.geometry.relative = true;
    //     edge2.edge = true;

    //     var edge3 = new mxCell('', new mxGeometry(0, 0, 0, 0), 'html=1;verticalAlign=bottom;endArrow=block;endSize=8;entryX=0;entryY=0.5;exitX=1;exitY=0.5;layer=topic;fillColor=#d5e8d4;strokeColor=#82b366;');
    //     edge3.geometry.setTerminalPoint(new mxPoint(310, 30), true);
    //     edge3.geometry.setTerminalPoint(new mxPoint(380, 30), false);
    //     edge3.geometry.relative = true;
    //     edge3.edge = true;

    //     var edge4 = new mxCell('', new mxGeometry(0, 0, 0, 0), 'html=1;verticalAlign=bottom;endArrow=block;endSize=8;entryX=0;entryY=0.5;exitX=1;exitY=0.5;layer=topic;fillColor=#d5e8d4;strokeColor=#82b366;');
    //     edge4.geometry.setTerminalPoint(new mxPoint(500, 30), true);
    //     edge4.geometry.setTerminalPoint(new mxPoint(570, 30), false);
    //     edge4.geometry.relative = true;
    //     edge4.edge = true;

    //     var edge5 = new mxCell('', new mxGeometry(0, 0, 0, 0), 'html=1;verticalAlign=bottom;endArrow=block;endSize=8;exitX=1;exitY=0.5;layer=topic;fillColor=#d5e8d4;strokeColor=#82b366;');
    //     edge5.geometry.setTerminalPoint(new mxPoint(690, 30), true);
    //     edge5.geometry.setTerminalPoint(new mxPoint(780, 30), false);
    //     edge5.geometry.relative = true;
    //     edge5.edge = true;

    //     cell1.insertEdge(edge1, false);
    //     cell1.insertEdge(edge2, true);
    //     cell2.insertEdge(edge2, false);
    //     cell2.insertEdge(edge3, true);
    //     cell3.insertEdge(edge3, false);
    //     cell3.insertEdge(edge4, true);
    //     cell4.insertEdge(edge4, false);
    //     cell4.insertEdge(edge5, true);

    //   return sb.createVertexTemplateFromCells([cell1, cell2, cell3, cell4, edge1, edge2, edge3, edge4, edge5], 640, 60, 'Engineering Cycle');
    // })
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
      }
      else {
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

/*****setting for the graph made through hover icon, partycularly connection edge*/
Graph.prototype.connectVertex = function (a, c, d, b, f, e, h, g) {
  e = e ? e : !1;

  if (a.geometry.relative && this.model.isEdge(a.parent)) {
    return [];
  }

  for (; a.geometry.relative && this.model.isVertex(a.parent);) a = a.parent;

  var k = this.isCloneConnectSource(a),
    l = k ? a : this.getCompositeParent(a),
    n = a.geometry.relative && null != a.parent.geometry ?
      new mxPoint(a.parent.geometry.width * a.geometry.x,
        a.parent.geometry.height * a.geometry.y) :
      new mxPoint(l.geometry.x, l.geometry.y);
  c == mxConstants.DIRECTION_NORTH ? (n.x += l.geometry.width / 2, n.y -= d) :
    c == mxConstants.DIRECTION_SOUTH ? (n.x += l.geometry.width / 2, n.y += l.geometry.height + d) :
      (n.x = c == mxConstants.DIRECTION_WEST ? n.x - d :
        n.x + (l.geometry.width + d), n.y += l.geometry.height / 2);

  var m = this.view.getState(this.model.getParent(a));
  d = this.view.scale;
  var p = this.view.translate,
    l = p.x * d,
    p = p.y * d; null != m && this.model.isVertex(m.cell) && (l = m.x, p = m.y); this.model.isVertex(a.parent) && a.geometry.relative && (n.x += a.parent.geometry.x, n.y += a.parent.geometry.y); e = e ? null : (new mxRectangle(l + n.x * d, p + n.y * d)).grow(40); e = null != e ? this.getCells(0,
      0, 0, 0, null, null, e) : null; var q = null != e && 0 < e.length ? e.reverse()[0] : null, u = !1; null != q && this.model.isAncestor(q, a) && (u = !0, q = null); null == q && (e = this.getSwimlaneAt(l + n.x * d, p + n.y * d), null != e && (u = !1, q = e)); for (e = q; null != e;) { if (this.isCellLocked(e)) { q = null; break } e = this.model.getParent(e) } null != q && (e = this.view.getState(a), m = this.view.getState(q), null != e && null != m && mxUtils.intersects(e, m) && (q = null)); var v = !mxEvent.isShiftDown(b) || mxEvent.isControlDown(b) || f; v && (c == mxConstants.DIRECTION_NORTH ? n.y -= a.geometry.height /
        2 : c == mxConstants.DIRECTION_SOUTH ? n.y += a.geometry.height / 2 : n.x = c == mxConstants.DIRECTION_WEST ? n.x - a.geometry.width / 2 : n.x + a.geometry.width / 2); null == q || this.isCellConnectable(q) || this.isSwimlane(q) || (f = this.getModel().getParent(q), this.getModel().isVertex(f) && this.isCellConnectable(f) && (q = f)); if (q == a || this.model.isEdge(q) || !this.isCellConnectable(q) && !this.isSwimlane(q)) q = null; var t = [], w = null != q && this.isSwimlane(q), r = w ? null : q; f = mxUtils.bind(this, function (d) {
          if (null == h || null != d || null == q && k) {
            this.model.beginUpdate();
            try {
              if (null == r && v) { for (var e = null != d ? d : a, f = this.getCellGeometry(e); null != f && f.relative;)e = this.getModel().getParent(e), f = this.getCellGeometry(e); e = k ? a : this.getCompositeParent(e); r = null != d ? d : this.duplicateCells([e], !1)[0]; null != d && this.addCells([r], this.model.getParent(a), null, null, null, !0); f = this.getCellGeometry(r); null != f && (f.x = n.x - f.width / 2, f.y = n.y - f.height / 2); w ? (this.addCells([r], q, null, null, null, !0), q = null) : !v || null != q || u || k || this.addCells([r], this.getDefaultParent(), null, null, null, !0) } var l =
                mxEvent.isControlDown(b) && mxEvent.isShiftDown(b) && v || null == q && k ? null : this.insertEdge(this.model.getParent(a), null, "", a, r, this.createCurrentEdgeStyle());
              var style = [];
              style = r.style.split(';');
              var edgestyle = "";
              for (var i = 0; i < style.length; i++) {
                if (style[i].indexOf('layer') !== -1 || style[i].indexOf('fillColor') !== -1 || style[i].indexOf('strokeColor') !== -1) {
                  edgestyle = edgestyle + style[i] + ";";
                }
              }
              l.style = l.style + edgestyle;
              if (null != l && this.connectionHandler.insertBeforeSource) { var m = null; for (d = a; null != d.parent && null != d.geometry && d.geometry.relative && d.parent != l.parent;)d = this.model.getParent(d); null != d && null != d.parent && d.parent == l.parent && (m = d.parent.getIndex(d), this.model.add(d.parent, l, m)) } null == q && null != r && null != a.parent && k && c == mxConstants.DIRECTION_WEST && (m = a.parent.getIndex(a),
                this.model.add(a.parent, r, m)); null != l && t.push(l); null == q && null != r && t.push(r); null == r && null != l && l.geometry.setTerminalPoint(n, !1); null != l && this.fireEvent(new mxEventObject("cellsInserted", "cells", [l]))
            } finally { this.model.endUpdate() }
          } if (null != g) g(t); else return t
        }); if (null == h || null != r || !v || null == q && k) return f(r); h(l + n.x * d, p + n.y * d, f)
};
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
  }
  else if (direction == mxConstants.DIRECTION_SOUTH) {
    pt.x += composite.geometry.width / 2;
    pt.y += composite.geometry.height + length;
  }
  else if (direction == mxConstants.DIRECTION_WEST) {
    pt.x -= length;
    pt.y += composite.geometry.height / 2;
  }
  else {
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
    }
    else if (direction == mxConstants.DIRECTION_SOUTH) {
      pt.y += source.geometry.height / 2;
    }
    else if (direction == mxConstants.DIRECTION_WEST) {
      pt.x -= source.geometry.width / 2;
    }
    else {
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
          }
          else if (duplicate && target == null && !keepParent && !cloneSource) {
            this.addCells([realTarget], this.getDefaultParent(), null, null, null, true);
          }
        }

        var edge = ((mxEvent.isControlDown(evt) && mxEvent.isShiftDown(evt) && duplicate) ||
          (target == null && cloneSource)) ? null : this.insertEdge(this.model.getParent(source),
            this.model.getParent(source), '', source, realTarget, this.createCurrentEdgeStyle());
        var style = [];
        style = source.style.split(';');
        var edgestyle = "";
        for (var i = 0; i < style.length; i++) {
          if (style[i].indexOf('layer') !== -1 || style[i].indexOf('fillColor') !== -1 || style[i].indexOf('strokeColor') !== -1) {
            edgestyle = edgestyle + style[i] + ";";
          }
        }
        edge.style = edge.style + edgestyle;

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
      }
      finally {
        this.model.endUpdate();
      }
    }

    if (done != null) {
      done(result);
    }
    else {
      return result;
    }
  });

  if (createTarget != null && realTarget == null && duplicate &&
    (target != null || !cloneSource)) {
    createTarget(dx + pt.x * s, dy + pt.y * s, execute);
  }
  else {
    return execute(realTarget);
  }
};
