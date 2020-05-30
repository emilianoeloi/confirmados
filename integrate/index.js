const fs = require('fs');
const path = require('path');

// Arquivos
var csseCovid19DailyReport = path.join(__dirname, 'csse_covid_19_daily_reports')
var casesAll = path.join(__dirname,'casesAll.js');

// from: 21/01/2020 to: Now
function dateIntervalCOVID19() {
   var iniDate = new Date("2020-01-21T00:00:00")
   var endDate = new Date("2020-01-26T00:00")// Date.now()

   var loop = new Date(iniDate);
   while(loop <= endDate){
      var day = ("0" + loop.getDate()).slice(-2)
      var month = ("0" + loop.getMonth() + 1).slice(-2)
      var year = loop.getFullYear()
      var fileCSV = `${csseCovid19DailyReport}/${month}-${day}-${year}.csv`

      whiteFile(fileCSV)   
   
      var newDate = loop.setDate(loop.getDate() + 1);
      loop = new Date(newDate);
   }

}

dateIntervalCOVID19()

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
         countries[currentline[1]]["date"] = obj["Last Update"]
         if (!isNaN(obj["Confirmed"])) {
            countries[currentline[1]]["cases"] = countries[currentline[1]]["cases"] + obj["Confirmed"]
         }
      } else {
         var cases = 0
         if (!isNaN(obj["Confirmed"])) {
            cases = obj["Confirmed"]
         }
         countries[currentline[1]] = {
            date: obj["Last Update"],
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

function whiteFile(csvFile) {
   fs.readFile(csvFile, function(err, data) {
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
}