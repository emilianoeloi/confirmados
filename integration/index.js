const fs = require('fs');
const path = require('path');

// Arquivos
var cases2020_01_21 = path.join(__dirname, 'csse_covid_19_daily_reports/01-22-2020.csv')
var casesAll = path.join(__dirname,'casesAll.js');

function csvJSON(csv){

    var lines=csv.split("\n");
    var result = [];
    var headers=lines[0].split(",");

    for(var i=1;i<lines.length;i++){
        var obj = {};
        var currentline=lines[i].split(",");
        for(var j=0;j<headers.length;j++){
           if (isNaN(currentline[j])) {
            obj[headers[j]] = currentline[j];
           } else {
            obj[headers[j]] = parseInt(currentline[j]);
           }
        }
        result.push(obj);
    }

    return JSON.stringify(result);
}

fs.readFile(cases2020_01_21, function(err, data) {
   if (err) {
      return console.error(err);
   }
   var csvToJSON = csvJSON(data.toString()) 
   fs.writeFile(casesAll, csvToJSON, function(err) {
      if (err) {
         return console.error(err);
      }
   });
});