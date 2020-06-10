// csvToJson.js

const brics = function(country) {
   const c = ["Brazil", "Russia", "India", "Mainland China", "China", "South Africa"]
   for (var k = 0; k < c.length; k++) {
      if (c[k] == country){
         return true
      }
   }
   return false
}

/*
Janeiro:   [ 'Province/State', 'Country/Region', 'Last Update', 'Confirmed', 'Deaths', 'Recovered' ]
Fevereiro: [ 'Province/State', 'Country/Region', 'Last Update', 'Confirmed', 'Deaths', 'Recovered\r' ]
Março:     [ 'Province/State', 'Country/Region', 'Last Update', 'Confirmed', 'Deaths', 'Recovered\r' ]
Abril:     [ 'Province/State', 'Country/Region', 'Last Update', 'Confirmed', 'Deaths', 'Recovered', 'Latitude', 'Longitude' ]
Maio:      [ 'FIPS', 'Admin2', 'Province_State', 'Country_Region', 'Last_Update', 'Lat', 'Long_', 'Confirmed', 'Deaths', 'Recovered', 'Active', 'Combined_Key' ]
Junho:     [ 'FIPS', 'Admin2', 'Province_State', 'Country_Region', 'Last_Update', 'Lat', 'Long_', 'Confirmed', 'Deaths', 'Recovered', 'Active', 'Combined_Key', 'Incidence_Rate', 'Case-Fatality_Ratio' ]
*/

const validateHeaders = function(headers) {
    const HDR_COUNTRY_REGION_NAME = 'Country/Region';
    const HDR_COUNTRY_REGION_2_NAME = 'Country_Region';
    const HDR_LAST_UPDATE_NAME = "Last Update";
    const HDR_LAST_UPDATE_2_NAME = "Last_Update";
    const HDR_CONFIRMED_NAME = "Confirmed";
    if (headers[1] == HDR_COUNTRY_REGION_NAME &&
        headers[2] == HDR_LAST_UPDATE_NAME &&
        headers[3] == HDR_CONFIRMED_NAME) {
        return {
            HDR_COUNTRY: 1,
            HDR_DATE: 2,
            HDR_CASES: 3
        }
    }
    if (headers[3] == HDR_COUNTRY_REGION_2_NAME &&
        headers[4] == HDR_LAST_UPDATE_2_NAME &&
        headers[7] == HDR_CONFIRMED_NAME) {
        return {
            HDR_COUNTRY: 3,
            HDR_DATE: 4,
            HDR_CASES: 7
        }
    }         
    return {}
}

// Dia do arquivo: 1/3/2020; linha errada 12/2/2012
const validateDateFile = function(fileDate, dataDate) {
    const d = new Date(fileDate)
    const f = new Date(dataDate)
    const firstDate = new Date(`${d.getFullYear()}-${("0" + (d.getMonth() + 1))}-01T00:00:00.000Z`)
    return firstDate <= f
}

const toJson = function(csvFile) {
    //Province/State,Country/Region,Last Update,Confirmed,Deaths,Recovered
    const lines = csvFile.data.split('\n');
    const headers = lines[0].split(',');
    const HDRs = validateHeaders(headers)
    const HDR_COUNTRY = HDRs.HDR_COUNTRY;
    const HDR_DATE = HDRs.HDR_DATE;
    const HDR_CASES = HDRs.HDR_CASES;
    
    let countries = {};
    lines.forEach((csvLine, i, lns) => {
       if (i == 0) return;
       if (csvLine == '' ) return;
       
       const line = csvLine.split(',');
       if (line[HDR_CASES] == '') return
       if (!brics(line[HDR_COUNTRY])) return
    
       if (!validateDateFile(csvFile.dateFile, line[HDR_DATE])) return

       let obj = {};
       obj[headers[HDR_DATE]] = line[HDR_DATE]
       obj[headers[HDR_CASES]] = parseInt(line[HDR_CASES])
       const lineHDRCountry = line[HDR_COUNTRY]

       if(countries[lineHDRCountry]) {
           countries[lineHDRCountry]["date"] = obj[headers[HDR_DATE]];
           countries[lineHDRCountry]["cases"] = countries[lineHDRCountry]["cases"] + obj[headers[HDR_CASES]] 
       } else {
           countries[lineHDRCountry] = {
               date: obj[headers[HDR_DATE]],
               cases: obj[headers[HDR_CASES]]
           }
       }
   })
   return countries;
}

module.exports = {
    brics,
    validateHeaders,
    toJson
}