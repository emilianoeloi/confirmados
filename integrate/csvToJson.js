// csvToJson.js

const brics = function(country) {
   const c = ["Brazil", "Russia", "India", "Mainland China", "South Africa"]
   for (var k = 0; k < c.length; k++) {
      if (c[k] == country){
         return true
      }
   }
   return false
}

const csvToJson = function(csv) {
   //Province/State,Country/Region,Last Update,Confirmed,Deaths,Recovered
   const HDR_COUNTRY = 1;
   const HDR_DATE = 2;
   const HDR_CASES = 3;
   const lines = csv.split('\n');
   const headers = lines[0].split(',');
   let countries = {};
   lines.forEach((csvLine, i, lns) => {
       if (i == 0) return;
       if (csvLine == '' ) return;
       
       const line = csvLine.split(',');
       if (line[HDR_CASES] == '') return
       if (!brics(line[HDR_COUNTRY])) return 

       let obj = {};
       obj[headers[HDR_DATE]] = line[HDR_DATE]
       obj[headers[HDR_CASES]] = parseInt(line[HDR_CASES])
       const lineHDRCountry = line[HDR_COUNTRY]

       if(countries[lineHDRCountry]) {
           countries[lineHDRCountry]["date"] = obj["Last Update"];
           countries[lineHDRCountry]["cases"] = countries[lineHDRCountry]["cases"] + obj["Confirmed"] 
       } else {
           countries[lineHDRCountry] = {
               date: obj["Last Update"],
               cases: obj["Confirmed"]
           }
       }
   })
   return countries;
}

module.exports = csvToJson