let setDate = function(item) {
  _data.push(item.cases)
  _labels.push(item.date)
}

let setCountry = function(country) {
  _countries[_countries+1] = country
  _yAxis = `y-axis-${_countries.length}`
  _datasets.push({
    label: _country.name,
    data: _data,
    borderColor: _country.color,
    yAxisID: _yAxis,
    fill: false,
    borderWidth: 5
  })
  _options.push({
    id: _yAxis,
    type: 'linear',
    display: true,
    position: 'left'
  })
}

let brazil = {
  name: 'Brasil',
  color: '#009c3b'
}

let usa = {
  name: 'USA',
  color: '#3C3B6E'
}

/// FAzer
let _cases_us = [
  {date: '2020-01-21', cases: 1, death: 0},
  {date: '2020-01-22', cases: 1, death: 0},
  {date: '2020-01-23', cases: 1, death: 0},
  {date: '2020-01-24', cases: 2, death: 0},
  {date: '2020-01-25', cases: 3, death: 0},
  {date: '2020-01-26', cases: 5, death: 0},
  {date: '2020-01-27', cases: 5, death: 0},
  {date: '2020-01-28', cases: 5, death: 0},
  {date: '2020-01-29', cases: 5, death: 0},
  {date: '2020-01-30', cases: 6, death: 0},
]

var _yAxis;
var _countries = []
var _country = usa
var _data = []
var _labels = []
var _datasets = []
var _options = []

let total = 10

for(var i = 0; i < total; i++) {
  let item = _cases_us[i]
  setDate(item)
}
setCountry(usa)

let function1 = function() {
  return _datasets
}

let function2 = function() {
  return _labels

}

let function3 = function() {
  return _options
}

console.log(_data)

export { _datasets, _labels, _options }