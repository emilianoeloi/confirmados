import React from 'react';
import {
  Line
} from 'react-chartjs-2';
import './App.css';
import { loader } from './Data.js'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.chartReference = React.createRef();
  }
  render() {
    const data = (canvas) => {
      return {
        labels: loader.labels,
        datasets: loader.datasets
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
				scales: { yAxes: loader.options }
				}}
      />
    )
  }
}

export default App;
