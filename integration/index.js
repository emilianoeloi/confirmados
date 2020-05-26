const fs = require('fs');

function csvJSON(csv){

    var lines=csv.split("\n");
    var result = [];
    var headers=lines[0].split(",");

    for(var i=1;i<lines.length;i++){
        var obj = {};
        var currentline=lines[i].split(",");
        for(var j=0;j<headers.length;j++){
            obj[headers[j]] = currentline[j];
        }
        result.push(obj);
    }

    return JSON.stringify(result);
}

// Asynchronous read
fs.readFile('./us.csv', function (err, data) {
    if (err) {
       return console.error(err);
    }
    console.log("Asynchronous read: " + data.toString());
    console.log("JSON" + csvJSON(data.toString()))
 });
 
 // Synchronous read
 var data = fs.readFileSync('./us.csv');
 console.log("Synchronous read: " + data.toString());
 
 console.log("Program Ended");

 console.log("Going to write into existing file");
fs.writeFile('casesUSA.js', csvJSON(data.toString()), function(err) {
   if (err) {
      return console.error(err);
   }
   
   console.log("Data written successfully!");
   console.log("Let's read newly written data");
   
   fs.readFile('casesUSA.js', function (err, data) {
      if (err) {
         return console.error(err);
      }
      console.log("Asynchronous read: " + data.toString());
   });
});