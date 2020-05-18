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
    label: 'My First dataset',
    fill: false,
    data: [
      5,
      10,
      15,
      20,
      5,
      10,
      15
    ],
    yAxisID: 'y-axis-1',
  }, {
    label: 'My Second dataset',
    fill: false,
    data: [
      8,
      16,
      8,
      16,
      8,
      16,
      8
    ],
    yAxisID: 'y-axis-2'
  }]
}

let function2 = function() {
  return ['21/01/2020', '22/01/2020']
}

let setDay = function(data, cases, death) {
  let day = {
    label: data,
    data: [cases]
  }
}

export { function1, function2 }