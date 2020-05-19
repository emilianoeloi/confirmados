import React from 'react';
import {
  Line
} from 'react-chartjs-2';
import './App.css';
import { function1, function2, function3 } from './Data.js'

let label2 = function2()
let datasets2 = function1()
let yAxes2 = function3()

class App extends React.Component {
  constructor(props) {
    super(props)
    this.chartReference = React.createRef();
  }
  render() {
    const data = (canvas) => {
      const ctx = canvas.getContext("2d")
      const gradient = ctx.createLinearGradient(0,0,100,0);
      return {
        labels: label2,
        datasets: datasets2
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
				scales: {
					yAxes: yAxes2
				}
				}}
      />
    )
  }
}

export default App;
