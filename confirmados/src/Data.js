import { Loader } from './Loader.js'

let brazil = {
  name: 'Brasil',
  color: '#009c3b'
}

let usa = {
  name: 'USA',
  color: '#3C3B6E'
}

let _cases_bra = [
  {date: '2020-01-21', cases: 0, death: 0},
  {date: '2020-01-22', cases: 0, death: 0},
  {date: '2020-01-23', cases: 0, death: 0},
  {date: '2020-01-24', cases: 0, death: 0},
  {date: '2020-01-25', cases: 0, death: 0},
  {date: '2020-01-26', cases: 0, death: 0},
  {date: '2020-01-27', cases: 0, death: 0},
  {date: '2020-01-28', cases: 0, death: 0},
  {date: '2020-01-29', cases: 0, death: 0},
  {date: '2020-01-30', cases: 0, death: 0},
  {date: '2020-01-31', cases: 0, death: 0},
  {date: '2020-02-01', cases: 0, death: 0},
  {date: '2020-02-02', cases: 0, death: 0},
  {date: '2020-02-03', cases: 0, death: 0},
  {date: '2020-02-04', cases: 0, death: 0},
  {date: '2020-02-05', cases: 0, death: 0},
  {date: '2020-02-06', cases: 0, death: 0},
  {date: '2020-02-07', cases: 0, death: 0},
  {date: '2020-02-08', cases: 0, death: 0},
  {date: '2020-02-09', cases: 0, death: 0},
  {date: '2020-02-10', cases: 0, death: 0},
  {date: '2020-02-11', cases: 0, death: 0},
  {date: '2020-02-12', cases: 0, death: 0},
  {date: '2020-02-13', cases: 0, death: 0},
  {date: '2020-02-14', cases: 0, death: 0},
  {date: '2020-02-15', cases: 0, death: 0},
  {date: '2020-02-16', cases: 0, death: 0},
  {date: '2020-02-17', cases: 0, death: 0},
  {date: '2020-02-18', cases: 0, death: 0},
  {date: '2020-02-19', cases: 0, death: 0},
  {date: '2020-02-20', cases: 0, death: 0},
  {date: '2020-02-21', cases: 0, death: 0},
  {date: '2020-02-22', cases: 0, death: 0},
  {date: '2020-02-23', cases: 0, death: 0},
  {date: '2020-02-24', cases: 0, death: 0},
  {date: '2020-02-25', cases: 0, death: 0},
  {date: '2020-02-26', cases:	1, death:	0},
  {date: '2020-02-27', cases:	1, death:	0},
  {date: '2020-02-28', cases:	1, death:	0},
  {date: '2020-02-29', cases:	2, death:	0},
  {date: '2020-03-01', cases:	2, death:	0},
  {date: '2020-03-02', cases:	2, death:	0},
  {date: '2020-03-03', cases:	2, death:	0},
  {date: '2020-03-04', cases:	3, death:	0},
  {date: '2020-03-05', cases:	7, death:	0},
  {date: '2020-03-06', cases:	13, death:	0},
  {date: '2020-03-07', cases:	19, death:	0},
  {date: '2020-03-08', cases:	25, death:	0},
  {date: '2020-03-09', cases:	25, death:	0},
  {date: '2020-03-10', cases:	34, death:	0}
]

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
  {date: '2020-01-31', cases: 7, death: 0},
  {date: '2020-02-1', cases: 8, death: 0},
  {date: '2020-02-2', cases: 11, death: 0},
  {date: '2020-02-3', cases: 11, death: 0},
  {date: '2020-02-4', cases: 12, death: 0},
  {date: '2020-02-5', cases: 12, death: 0},
  {date: '2020-02-6', cases: 12, death: 0},
  {date: '2020-02-7', cases: 12, death: 0},
  {date: '2020-02-8', cases: 12, death: 0},
  {date: '2020-02-9', cases: 12, death: 0},
  {date: '2020-02-10', cases: 13, death: 0},
  {date: '2020-02-11', cases: 13, death: 0},
  {date: '2020-02-12', cases: 14, death: 0},
  {date: '2020-02-13', cases: 15, death: 0},
  {date: '2020-02-14', cases: 15, death: 0},
  {date: '2020-02-15', cases: 15, death: 0},
  {date: '2020-02-16', cases: 15, death: 0},
  {date: '2020-02-17', cases: 25, death: 0},
  {date: '2020-02-18', cases: 25, death: 0},
  {date: '2020-02-19', cases: 25, death: 0},
  {date: '2020-02-20', cases: 27, death: 0},
{date: '2020-02-21', cases: 30, death: 0},
{date: '2020-02-22', cases: 30, death: 0},
{date: '2020-02-23', cases: 30, death: 0},
{date: '2020-02-24', cases: 43, death: 0},
{date: '2020-02-25', cases: 45, death: 0},
{date: '2020-02-26', cases: 60, death: 0},
{date: '2020-02-27', cases: 60, death: 0},
{date: '2020-02-28', cases: 65, death: 0},
{date: '2020-02-29', cases: 70, death: 1},
{date: '2020-03-01', cases: 88, death: 3},
{date: '2020-03-02', cases: 104, death: 6},
{date: '2020-03-03', cases: 125, death: 10},
{date: '2020-03-04', cases: 161, death: 12},
{date: '2020-03-05', cases: 228, death: 12},
{date: '2020-03-06', cases: 311, death: 15},
{date: '2020-03-07', cases: 428, death: 19},
{date: '2020-03-08', cases: 547, death: 22},
{date: '2020-03-09', cases: 748, death: 26},
{date: '2020-03-10', cases: 1018, death: 31}
]

let loader = new Loader()
loader.setCaseCountry(brazil, _cases_bra)
loader.setCaseCountry(usa, _cases_us)

export { loader }