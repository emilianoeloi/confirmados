// csvToJson.js

function csvToJson(csv) {
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
   return countries;
 }

module.exports = csvToJson