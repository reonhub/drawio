/*****sidebar setting for digital triplet start *****/
Sidebar.prototype.init = function () {
  var path = STENCIL_PATH;
  this.addSearchPalette(false);
  this.addD3TopicPalette(true);
  this.addD3InfoPalette(true);
  this.addD3PhysPalette(true);
  this.addGeneralPalette(false);
  this.addMiscPalette(false);
  this.addAdvancedPalette(false);
  this.addBasicPalette(path);
  this.addStencilPalette(
    "arrows",
    mxResources.get("arrows"),
    path + "/arrows.xml",
    ";whiteSpace=wrap;html=1;fillColor=#ffffff;strokeColor=#000000;strokeWidth=2"
  );
  this.addUmlPalette(false);
  this.addStencilPalette(
    "flowchart",
    "Flowchart",
    path + "/flowchart.xml",
    ";whiteSpace=wrap;html=1;fillColor=#ffffff;strokeColor=#000000;strokeWidth=2"
  );
};

/*****D3Toic start*****/
Sidebar.prototype.addD3TopicPalette = function (expand) {
  var lineTags = 'line lines connector connectors connection connections arrow arrows ';
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

    this.addEntry(
      "line lines connector connectors connection connections arrow arrows edge title",
      mxUtils.bind(this, function () {
        var edge = new mxCell(
          "",
          new mxGeometry(0, 0, 0, 0),
          "endArrow=classic;html=1;class=Input/Output;layer=topic;fillColor=#ffe6cc;strokeColor=#d79b00;"
        );
        edge.geometry.setTerminalPoint(new mxPoint(0, 0), true);
        edge.geometry.setTerminalPoint(new mxPoint(100, 0), false);
        edge.geometry.relative = true;
        edge.edge = true;
        var cell = new mxCell(
          "Input/Output",
          new mxGeometry(0, 0, 0, 0),
          "edgeLabel;resizable=0;html=1;align=center;verticalAlign=middle;"
        );
        cell.geometry.relative = true;
        cell.setConnectable(false);
        cell.vertex = true;
        edge.insert(cell);
        return this.createEdgeTemplateFromCells([edge], 100, 0, "Input/Output");
      })
    ),

    this.addEntry(
      "line lines connector connectors connection connections arrow arrows edge title",
      mxUtils.bind(this, function () {
        //Label describing a reason for adopting the result 
        var cell1 = new mxCell(
          "Reason",
          new mxGeometry(0, 0, 0, 0),
          "edgeLabel;resizable=0;html=1;align=center;verticalAlign=middle;"
        );
        cell1.geometry.relative = true;
        cell1.setConnectable(false);
        cell1.vertex = true;
        //Label describing an intention of the process
        var cell2 = new mxCell(
          "Intention",
          new mxGeometry(0, 0, 0, 0),
          "edgeLabel;resizable=0;html=1;align=center;verticalAlign=middle;"
        );
        cell2.geometry.relative = true;
        cell2.setConnectable(false);
        cell2.vertex = true;
        var edge = new mxCell(
          "",
          new mxGeometry(0, 0, 0, 0),
          "endArrow=classic;html=1;class=control;layer=topic;fillColor=#ffe6cc;strokeColor=#d79b00;exitX=0.5;exitY=1;exitDx=0;exitDy=0;"
        );
        edge.geometry.setTerminalPoint(new mxPoint(0, 0), true);
        edge.geometry.setTerminalPoint(new mxPoint(0, 50), false);
        edge.geometry.relative = true;
        edge.edge = true;
        edge.source = cell2;
        edge.insert(cell1);
        return this.createEdgeTemplateFromCells([edge], 0, 50, "Control");
      })
    ),

    this.addEntry(
      "line lines connector connectors connection connections arrow arrows edge title",
      mxUtils.bind(this, function () {
        var edge = new mxCell(
          "",
          new mxGeometry(0, 0, 0, 0),
          "endArrow=classic;html=1;class=mechanism;layer=topic;fillColor=#ffe6cc;strokeColor=#d79b00;"
        );
        edge.geometry.setTerminalPoint(new mxPoint(0, 0), true);
        edge.geometry.setTerminalPoint(new mxPoint(0, -50), false);
        edge.geometry.relative = true;
        edge.edge = true;
        var cell = new mxCell(
          "Mechanism",
          new mxGeometry(0, 0, 0, 0),
          "edgeLabel;resizable=0;html=1;align=center;verticalAlign=middle;"
        );
        cell.geometry.relative = true;
        cell.setConnectable(false);
        cell.vertex = true;
        edge.insert(cell);
        return this.createEdgeTemplateFromCells([edge], 0, 50, "Mechanism");
      })
    ),
    this.createVertexTemplateEntry('swimlane;layer=topic;fillColor=#ffe6cc;strokeColor=#d79b00;', 200, 200, 'Container', 'Container', null, null, 'container swimlane lane pool group'),

    this.addEntry('container', mxUtils.bind(this, function () {
      var cell = new mxCell('', new mxGeometry(0, 0, 120, 60), "rounded=0;whiteSpace=wrap;html=1;layer=topic;fillColor=#ffe6cc;strokeColor=#d79b00;");
      cell.geometry.setTerminalPoint(new mxPoint(0, 60), true);
      cell.geometry.setTerminalPoint(new mxPoint(120, 0), false);
      // cell.geometry.points = [new mxPoint(50, 50), new mxPoint(0, 0)];
      cell.geometry.relative = true;
      cell.edge = true;
      cell.value = "Rectangle"
      return this.createEdgeTemplateFromCells([cell], 120, 60, 'Container');
    })),



    this.addEntry(lineTags + 'edge title', mxUtils.bind(this, function () {
      var edge = new mxCell('', new mxGeometry(0, 0, 0, 0), 'endArrow=classic;html=1;');
      edge.geometry.setTerminalPoint(new mxPoint(0, 0), true);
      edge.geometry.setTerminalPoint(new mxPoint(100, 0), false);
      edge.geometry.relative = true;
      edge.edge = true;

      var cell0 = new mxCell('Label', new mxGeometry(0, 0, 0, 0), 'edgeLabel;resizable=0;html=1;align=center;verticalAlign=middle;');
      cell0.geometry.relative = true;
      cell0.setConnectable(false);
      cell0.vertex = true;
      edge.insert(cell0);

      return this.createEdgeTemplateFromCells([edge], 100, 0, 'Connector with Label');
    })),
    // this.addEntry(
    //   mxUtils.bind(this, function () {
    //     var edge = new mxCell(
    //       "",
    //       new mxGeometry(0, 0, 0, 0),
    //       "swimlane;layer=topic;fillColor=#ffe6cc;strokeColor=#d79b00;"
    //     );
    //     edge.geometry.setTerminalPoint(new mxPoint(0, 0), true);
    //     edge.geometry.setTerminalPoint(new mxPoint(0, -50), false);
    //     edge.geometry.relative = true;
    //     edge.edge = true;
    //     var cell = new mxCell(
    //       "Mechanism",
    //       new mxGeometry(0, 0, 0, 0),
    //       "edgeLabel;resizable=0;html=1;align=center;verticalAlign=middle;"
    //     );
    //     cell.geometry.relative = true;
    //     cell.setConnectable(false);
    //     cell.vertex = true;
    //     cell.parent=edge;
    //     return this.createEdgeTemplateFromCells([edge], 0, 50, "Mechanism");
    //   })

    // ),

    this.createVertexTemplateEntry('swimlane;layer=topic;fillColor=#ffe6cc;strokeColor=#d79b00;', 200, 200, 'Container', 'Container', null, null, 'container swimlane lane pool group'),

  ];
  this.addPaletteFunctions("D3Topic", "D3Topic", null != expand ? expand : true, fns);
};
/*****D3Topic end*****/

/*****D3Info start*****/
Sidebar.prototype.addD3InfoPalette = function (expand) {
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

    this.addEntry(
      "line lines connector connectors connection connections arrow arrows edge title",
      mxUtils.bind(this, function () {
        var edge = new mxCell(
          "",
          new mxGeometry(0, 0, 0, 0),
          "endArrow=classic;html=1;class=Input/Output;layer=info;fillColor=#dae8fc;strokeColor=#6c8ebf;"
        );
        edge.geometry.setTerminalPoint(new mxPoint(0, 0), true);
        edge.geometry.setTerminalPoint(new mxPoint(100, 0), false);
        edge.geometry.relative = true;
        edge.edge = true;
        var cell = new mxCell(
          "Input/Output",
          new mxGeometry(0, 0, 0, 0),
          "edgeLabel;resizable=0;html=1;align=center;verticalAlign=middle;"
        );
        cell.geometry.relative = true;
        cell.setConnectable(false);
        cell.vertex = true;
        edge.insert(cell);
        return this.createEdgeTemplateFromCells([edge], 100, 0, "Input/Output");
      })
    ),

    this.addEntry(
      "line lines connector connectors connection connections arrow arrows edge title",
      mxUtils.bind(this, function () {
        var edge = new mxCell(
          "",
          new mxGeometry(0, 0, 0, 0),
          "endArrow=classic;html=1;class=control;layer=info;fillColor=#dae8fc;strokeColor=#6c8ebf;"
        );
        edge.geometry.setTerminalPoint(new mxPoint(0, 0), true);
        edge.geometry.setTerminalPoint(new mxPoint(0, 50), false);
        edge.geometry.relative = true;
        edge.edge = true;
        var cell = new mxCell(
          "Control",
          new mxGeometry(0, 0, 0, 0),
          "edgeLabel;resizable=0;html=1;align=center;verticalAlign=middle;"
        );
        cell.geometry.relative = true;
        cell.setConnectable(false);
        cell.vertex = true;
        edge.insert(cell);
        return this.createEdgeTemplateFromCells([edge], 0, 50, "Control");
      })
    ),

    this.addEntry(
      "line lines connector connectors connection connections arrow arrows edge title",
      mxUtils.bind(this, function () {
        var edge = new mxCell(
          "",
          new mxGeometry(0, 0, 0, 0),
          "endArrow=classic;html=1;class=mechanism;layer=info;fillColor=#dae8fc;strokeColor=#6c8ebf;"
        );
        edge.geometry.setTerminalPoint(new mxPoint(0, 0), true);
        edge.geometry.setTerminalPoint(new mxPoint(0, -50), false);
        edge.geometry.relative = true;
        edge.edge = true;
        var cell = new mxCell(
          "Mechanism",
          new mxGeometry(0, 0, 0, 0),
          "edgeLabel;resizable=0;html=1;align=center;verticalAlign=middle;"
        );
        cell.geometry.relative = true;
        cell.setConnectable(false);
        cell.vertex = true;
        edge.insert(cell);
        return this.createEdgeTemplateFromCells([edge], 0, 50, "Mechanism");
      })
    ),
    this.createVertexTemplateEntry('swimlane;layer=topic;fillColor=#dae8fc;strokeColor=#6c8ebf;', 200, 200, 'Container', 'Container', null, null, 'container swimlane lane pool group')
  ];
  this.addPaletteFunctions("D3Info", "D3Info", null != expand ? expand : true, fns);
};
/*****D3Info end*****/

/*****D3Phys start*****/
Sidebar.prototype.addD3PhysPalette = function (expand) {
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

    this.addEntry(
      "line lines connector connectors connection connections arrow arrows edge title",
      mxUtils.bind(this, function () {
        var edge = new mxCell(
          "",
          new mxGeometry(0, 0, 0, 0),
          "endArrow=classic;html=1;class=Input/Output;layer=phys;fillColor=#d5e8d4;strokeColor=#82b366;"
        );
        edge.geometry.setTerminalPoint(new mxPoint(0, 0), true);
        edge.geometry.setTerminalPoint(new mxPoint(100, 0), false);
        edge.geometry.relative = true;
        edge.edge = true;
        var cell = new mxCell(
          "Input/Output",
          new mxGeometry(0, 0, 0, 0),
          "edgeLabel;resizable=0;html=1;align=center;verticalAlign=middle;"
        );
        cell.geometry.relative = true;
        cell.setConnectable(false);
        cell.vertex = true;
        edge.insert(cell);
        return this.createEdgeTemplateFromCells([edge], 100, 0, "Input/Output");
      })
    ),

    this.addEntry(
      "line lines connector connectors connection connections arrow arrows edge title",
      mxUtils.bind(this, function () {
        var edge = new mxCell(
          "",
          new mxGeometry(0, 0, 0, 0),
          "endArrow=classic;html=1;class=control;layer=phys;fillColor=#d5e8d4;strokeColor=#82b366;"
        );
        edge.geometry.setTerminalPoint(new mxPoint(0, 0), true);
        edge.geometry.setTerminalPoint(new mxPoint(0, 50), false);
        edge.geometry.relative = true;
        edge.edge = true;
        var cell = new mxCell(
          "Control",
          new mxGeometry(0, 0, 0, 0),
          "edgeLabel;resizable=0;html=1;align=center;verticalAlign=middle;"
        );
        cell.geometry.relative = true;
        cell.setConnectable(false);
        cell.vertex = true;
        edge.insert(cell);
        return this.createEdgeTemplateFromCells([edge], 0, 50, "Control");
      })
    ),

    this.addEntry(
      "line lines connector connectors connection connections arrow arrows edge title",
      mxUtils.bind(this, function () {
        var edge = new mxCell(
          "",
          new mxGeometry(0, 0, 0, 0),
          "endArrow=classic;html=1;class=mechanism;layer=phys;fillColor=#d5e8d4;strokeColor=#82b366;"
        );
        edge.geometry.setTerminalPoint(new mxPoint(0, 0), true);
        edge.geometry.setTerminalPoint(new mxPoint(0, -50), false);
        edge.geometry.relative = true;
        edge.edge = true;
        var cell = new mxCell(
          "Mechanism",
          new mxGeometry(0, 0, 0, 0),
          "edgeLabel;resizable=0;html=1;align=center;verticalAlign=middle;"
        );
        cell.geometry.relative = true;
        cell.setConnectable(false);
        cell.vertex = true;
        edge.insert(cell);
        return this.createEdgeTemplateFromCells([edge], 0, 50, "Mechanism");
      })
    ),
    this.createVertexTemplateEntry('swimlane;layer=topic;fillColor=#d5e8d4;strokeColor=#82b366;', 200, 200, 'Container', 'Container', null, null, 'container swimlane lane pool group')

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
  /*****setting for "compressXml:false" end*****/
}
