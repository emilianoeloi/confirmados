// csvToJson.js

// Bug a partir dessa dia os aquivos são de um dia pra frente
const BUG_DATE = new Date('2020-04-22T00:00:00.000')

const validateOrigin = function(originGroup, origin) {
    if (originGroup == undefined) {
        return false
    }
    for (var k = 0; k < originGroup.length; k++) {
        if (originGroup[k].name == origin){
            return true
        }
    }
    return false
}

const validateCountry = function(countryGroup, country) {
    return validateOrigin(countryGroup, country)
}

const validateState = function(stateGroup, state) {
    return validateOrigin(stateGroup, state)
}

/*
Janeiro:   [ 'Province/State', 'Country/Region', 'Last Update', 'Confirmed', 'Deaths', 'Recovered' ]
Fevereiro: [ 'Province/State', 'Country/Region', 'Last Update', 'Confirmed', 'Deaths', 'Recovered\r' ]
Março:     [ 'Province/State', 'Country/Region', 'Last Update', 'Confirmed', 'Deaths', 'Recovered\r' ]
Abril:     [ 'Province/State', 'Country/Region', 'Last Update', 'Confirmed', 'Deaths', 'Recovered', 'Latitude', 'Longitude' ]
Maio:      [ 'FIPS', 'Admin2', 'Province_State', 'Country_Region', 'Last_Update', 'Lat', 'Long_', 'Confirmed', 'Deaths', 'Recovered', 'Active', 'Combined_Key' ]
Junho:     [ 'FIPS', 'Admin2', 'Province_State', 'Country_Region', 'Last_Update', 'Lat', 'Long_', 'Confirmed', 'Deaths', 'Recovered', 'Active', 'Combined_Key', 'Incidence_Rate', 'Case-Fatality_Ratio' ]
Dezembro:  [ 'FIPS', 'Admin2', 'Province_State', 'Country_Region', 'Last_Update', 'Lat', 'Long_', 'Confirmed', 'Deaths', 'Recovered', 'Active', 'Combined_Key', 'Incident_Rate',  'Case_Fatality_Ratio' ]
*/

const validateHeaders = function(headers) {
    const HDR_PROVINCE_STATE_NAME = 'Province/State'
    const HDR_PROVINCE_STATE_2_NAME = 'Province_State'
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
            HDR_CASES: 3,
            HDR_STATE: 0
        }
    }

    if (headers[3] == HDR_COUNTRY_REGION_2_NAME &&
        headers[4] == HDR_LAST_UPDATE_2_NAME &&
        headers[7] == HDR_CONFIRMED_NAME) {
        return {
            HDR_COUNTRY: 3,
            HDR_DATE: 4,
            HDR_CASES: 7,
            HDR_STATE: 2
        }
    }

    return {}
}

Date.prototype.addDays = function(days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getUTCDate() + days);
    return date;
}

// Dia do arquivo: 1/3/2020: linhas erradas: 12/2/2012, 1/2/2020,1/4/2020
const validateDateFile = function(fileDate, dataDate) {
    const d = new Date(fileDate)
    const f = new Date(dataDate)

    let dDay = d.getUTCDate()
    dDay = (dDay < 10) ? `0${dDay}` : dDay;
    let dMonth = d.getUTCMonth() + 1;
    dMonth = (dMonth < 10) ? `0${dMonth}` : dMonth
    const dYear = d.getUTCFullYear()
    
    let firstDate = new Date(`${dYear}-${dMonth}-${dDay}T00:00:00.000`)
    let lastDate = new Date(`${dYear}-${dMonth}-${dDay}T23:59:59.999`)

    return (firstDate <= f) && (lastDate > f)
}

const toJson = function(csvFile, originGroup, originType="country") {
    const lines = csvFile.data.split('\n');
    const headers = lines[0].split(',');
    const HDRs = validateHeaders(headers)

    let HDR_ORIGIN = ""
    if (originType == "country") {
        HDR_ORIGIN = HDRs.HDR_COUNTRY
    } else if (originType == "state") {
        HDR_ORIGIN = HDRs.HDR_STATE
    }
    const HDR_COUNTRY = HDRs.HDR_COUNTRY
    const HDR_DATE = HDRs.HDR_DATE;
    const HDR_CASES = HDRs.HDR_CASES;
    
    let origins = {};
    lines.forEach((csvLine, i, lns) => {
        if (i == 0) return;
        if (csvLine == '' ) return;
        
        const line = csvLine.split(',');

        // if (line[HDR_COUNTRY] != "Brazil") return
        
        if (line[HDR_CASES] == '') return
        if (!validateState(originGroup, line[HDR_ORIGIN])) return
        
        if (csvFile.dateFile > BUG_DATE) {
            let DATE_WITH_BUG = new Date(line[HDR_DATE])
            line[HDR_DATE] = DATE_WITH_BUG.addDays(-1)
        }
        if (!validateDateFile(csvFile.dateFile, line[HDR_DATE])) return

        setOrigins(origins, headers, line, HDR_ORIGIN)

    })
    return origins;
}

const setOrigins = function(origins, headers, line, hdrOrigin) {
    const HDRs = validateHeaders(headers)

    const HDR_DATE = HDRs.HDR_DATE;
    const HDR_CASES = HDRs.HDR_CASES;

    let obj = {};
    obj[headers[HDR_DATE]] = line[HDR_DATE]
    obj[headers[HDR_CASES]] = parseInt(line[HDR_CASES])
    const lineHDR = line[hdrOrigin]

    if(origins[lineHDR]) {
        origins[lineHDR]["date"] = obj[headers[HDR_DATE]];
        origins[lineHDR]["cases"] = origins[lineHDR]["cases"] + obj[headers[HDR_CASES]] 
    } else {
        origins[lineHDR] = {
            date: obj[headers[HDR_DATE]],
            cases: obj[headers[HDR_CASES]]
        }
    }
}

module.exports = {
    validateHeaders,
    toJson
}