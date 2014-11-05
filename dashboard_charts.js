google.setOnLoadCallback(drawVisualization);

function drawVisualization() {

  var deviceWrapper = new google.visualization.ChartWrapper({
     "containerId": "device",
     "dataSourceUrl": "https://graphic-pattern-746.appspot.com/query?id=ahVzfmdyYXBoaWMtcGF0dGVybi03NDZyFQsSCEFwaVF1ZXJ5GICAgIC8oYIKDA&format=data-table-response",
     "refreshInterval": 1000,
     "chartType": "PieChart",
     "options": {
        "showRowNumber" : true,
        "width": 630,
        "height": 440,
        "is3D": false,
        "title": "Device Type"
     }
   });
  deviceWrapper.draw();

  var sourceWrapper = new google.visualization.ChartWrapper({
     "containerId": "source",
     "dataSourceUrl": "https://graphic-pattern-746.appspot.com/query?id=ahVzfmdyYXBoaWMtcGF0dGVybi03NDZyFQsSCEFwaVF1ZXJ5GICAgIDa44YKDA&format=data-table-response",
     "refreshInterval": 1000,
     "chartType": "PieChart",
     "options": {
        "showRowNumber" : true,
        "width": 630,
        "height": 440,
        "is3D": false,
        "title": "Source"
     }
   });

  sourceWrapper.draw();

  var dateWrapper = new google.visualization.ChartWrapper({
     "containerId": "date",
     "dataSourceUrl": "https://graphic-pattern-746.appspot.com/query?id=ahVzfmdyYXBoaWMtcGF0dGVybi03NDZyFQsSCEFwaVF1ZXJ5GICAgIDtsYMKDA&format=data-table-response",
     "refreshInterval": 1000,
     "chartType": "Table",
     "options": {
        "showRowNumber" : true,
        "width": 630,
        "height": 440,
        "is3D": false,
        "title": "Sessions by Day"
     }
   });

  dateWrapper.draw();


  var regionWrapper = new google.visualization.ChartWrapper({
     "containerId": "region",
     "dataSourceUrl": "https://graphic-pattern-746.appspot.com/query?id=ahVzfmdyYXBoaWMtcGF0dGVybi03NDZyFQsSCEFwaVF1ZXJ5GICAgICZ0oUKDA&format=data-table-response",
     "refreshInterval": 1000,
     "chartType": "Table",
     "options": {
        "showRowNumber" : true,
        "width": 630,
        "height": 440,
        "is3D": false,
        "title": "Top States"
     }
   });

  regionWrapper.draw();

}
