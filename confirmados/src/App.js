import React from 'react';
import {
  Line
} from 'react-chartjs-2';
import './App.css';
import { loader } from './Data.js'

var _datasets = loader.datasets 
var _labels = loader.labels
var yAxes = loader.yAxes

console.info(loader)

class App extends React.Component {
  constructor(props) {
    super(props)
    this.chartReference = React.createRef();
  }
  render() {
    const data = (canvas) => {
      return {
        labels: _labels,
        datasets: _datasets
      }
    }
    return (
      <Line
        ref={this.chartReference}
        data={data}
        width={900}
        height={380}
        options={{
				responsive: true,
				hoverMode: 'index',
				stacked: false,
				title: {
					display: true,
					text: 'Confirmados de COVID-19'
				},
				scales: { yAxes }
				}}
      />
    )
  }
}

export default App;
