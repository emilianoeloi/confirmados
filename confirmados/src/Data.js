let dataDataset = function(label, data, color) {
    let defaultLabel = label  
    let defaultData = data
    let defaultDataset = {
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

  var dataUSA = dataDataset(
    ['2020-01-21', '2020-01-22', '2020-01-23'] ,
    [1, 1, 1],
    '#c1c1c1'
  )

  var dataBRA = dataDataset(
    ['2020-01-21', '2020-01-22', '2020-01-23'] ,
    [0, 0, 0],
    '#c1c1c1'
  )

  var dataCHI = dataDataset(
    ['2020-01-21', '2020-01-22', '2020-01-23'] ,
    [0, 558, 643],
    '#c1c1c1'
  )

    var data = {
        labels: dataUSA.label,
        dataset: [
            dataBRA.dataset,
            dataCHI.dataset,
            dataUSA.dataset
        ]
    }

let function1 = function() {
  return [{
    label: 'Brasil',
    fill: false,
    data: [
      1,
      7,
      14,
      1,
      7,
      14
    ],
    yAxisID: 'y-axis-1',
  }, {
    label: 'China',
    fill: false,
    data: [
      8,
      16,
      8,
      8,
      16,
      8
    ],
    yAxisID: 'y-axis-2'
  }, {
    label: 'USA',
    fill: false,
    data: [
      4,
      1,
      20,
      4,
      1,
      20
    ],
    yAxisID: 'y-axis-3'
  }]
}

let function2 = function() {
  return ['21/01/2020', '22/01/2020', '21/01/2020', '22/01/2020', '21/01/2020', '22/01/2020', '21/01/2020', '22/01/2020', '21/01/2020', '22/01/2020', '21/01/2020', '22/01/2020', '21/01/2020', '22/01/2020', '21/01/2020', '22/01/2020', '21/01/2020', '22/01/2020', '21/01/2020', '22/01/2020', '21/01/2020', '22/01/2020', '21/01/2020', '22/01/2020']
}

let function3 = function() {
  return [{
    type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
    display: true,
    position: 'left',
    id: 'y-axis-1',
  }, {
    type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
    display: false,
    position: 'right',
    id: 'y-axis-2',
  }, {
    type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
    display: false,
    position: 'right',
    id: 'y-axis-3'
  }]
}

let setArea = function(name, color1) {
  let label = name
  let color = color1
  return {
    type: 'lenear',
    display: false,
    id:'y-axis-1'
  }
}

var _data = []

let setDate = function(item) {
  _data.push(item.cases)
}

/// FAzer
let _us = [
  {date: '2020-01-21', cases: 1, death: 0},
  {date: '2020-01-22', cases: 1, death: 0},
  {date: '2020-01-23', cases: 1, death: 0},
  {date: '2020-01-24', cases: 2, death: 0},
  {date: '2020-01-25', cases: 3, death: 0},
  {date: '2020-01-26', cases: 5, death: 0},
  {date: '2020-01-27', cases: 5, death: 0},
  {date: '2020-01-28', cases: 5, death: 0},
  {date: '2020-01-29', cases: 5, death: 0},
  {date: '2020-01-30', cases: 6, death: 0}
]
let total = 10
for(var i = 0; i < total; i++) {
  let item = _us[i]
  setDate(item)
}

console.log(_data)

export { function1, function2, function3 }