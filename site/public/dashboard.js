/* globals Chart:false, feather:false */
(function () {
  'use strict'

  feather.replace()

  var dataset = function(label, data, color) {
    var defaultLabel = label  
    var defaultData = data
    var defaultDataset = {
      data: defaultData,
      lineTension: 0,
      backgroundColor: 'transparent',
      borderColor: '#007bff',
      borderWidth: 4,
      pointBackgroundColor: '#007bff'
    }
    return {
      label: defaultLabel,
      data: defaultData,
      dataset: defaultDataset
    }
  }

  var dataUSA = dataset(
    ['2020-01-21', '2020-01-22', '2020-01-23'] ,
    [1, 1, 1],
    '#c1c1c1'
  )

  var dataBRA = dataset(
    ['2020-01-21', '2020-01-22', '2020-01-23'] ,
    [0, 0, 0],
    '#c1c1c1'
  )

  var dataCHI = dataset(
    ['2020-01-21', '2020-01-22', '2020-01-23'] ,
    [0, 558, 643],
    '#c1c1c1'
  )

  // Graphs
  var ctx = document.getElementById('myChart')
  // eslint-disable-next-line no-unused-vars
  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels:dataUSA.label,
      datasets: [
        dataUSA.dataset,
        dataBRA.dataset,
        dataCHI.dataset
      ]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: false
          }
        }]
      },
      legend: {
        display: false
      }
    }
  })
}())
