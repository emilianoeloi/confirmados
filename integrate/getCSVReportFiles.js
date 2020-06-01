// getCSVReportFiles.js

function getCSVReportFiles(defaultPath, start, finish, callback) {
   var iniDate = new Date(start)
   var endDate = new Date(finish)

   var loop = new Date(iniDate);
   while(loop <= endDate){
      var day = ("0" + loop.getDate()).slice(-2)
      var month = ("0" + loop.getMonth() + 1).slice(-2)
      var year = loop.getFullYear()
      var fileCSV = `${defaultPath}/${month}-${day}-${year}.csv`

      callback(fileCSV)   
   
      var newDate = loop.setDate(loop.getDate() + 1);
      loop = new Date(newDate);
   }

}

module.exports = getCSVReportFiles