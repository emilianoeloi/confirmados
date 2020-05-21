import { Loader } from './Loader.js'
let brazil = {
  name: 'Brasil',
  color: '#009c3b'
}

let usa = {
  name: 'USA',
  color: '#3C3B6E'
}

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

var loader = new Loader(
  [],
  [],
  null,
  [],
  [],
  null,
  usa,
  _cases_us
)


export { loader }