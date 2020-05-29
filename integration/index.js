const fs = require('fs');
const path = require('path');

// Arquivos
var cases2020_01_21 = path.join(__dirname, 'csse_covid_19_daily_reports/01-28-2020.csv')
var casesAll = path.join(__dirname,'casesAll.js');

function csseCovid19DailyReports(csv) {
   var countries = {}
   var lines=csv.split("\n");
   var result = [];
   var headers=lines[0].split(",");
   for(var i=1;i<lines.length;i++){
      var obj = {};
      var objCountry = {};
      var currentline=lines[i].split(",");
      var countriesResult = []
      //Province/State,Country/Region,Last Update,Confirmed,Deaths,Recovered
      for(var j=0;j<headers.length;j++){
         //2, 3
         if (j == 2 || j == 3) { 
            if (isNaN(currentline[j])) {
               obj[headers[j]] = currentline[j];
            } else {
               obj[headers[j]] = parseInt(currentline[j]);
            }
         }
      }
      if (countries[currentline[1]]) {
         countries[currentline[1]]["dates"] = obj["Last Update"]
         if (!isNaN(obj["Confirmed"])) {
            countries[currentline[1]]["cases"] = countries[currentline[1]]["cases"] + obj["Confirmed"]
         }
      } else {
         var cases = 0
         if (!isNaN(obj["Confirmed"])) {
            cases = obj["Confirmed"]
         }
         countries[currentline[1]] = {
            dates: obj["Last Update"],
            cases: cases
         }
      }
      result.push(obj);
   }
  console.info(countries)
  return JSON.stringify(result);
}

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
   var csvToJSON = csseCovid19DailyReports(data.toString()) 
   fs.writeFile(casesAll, csvToJSON, function(err) {
      if (err) {
         return console.error(err);
      }
   });
});