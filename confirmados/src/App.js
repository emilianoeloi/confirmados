import React from 'react';
import {
  defaults,
  Line
} from 'react-chartjs-2';
import merge from 'lodash.merge';
import './App.css';

defaults.global.animation = false;
merge(defaults, {
  global: {
    animation: false,
    line: {
      borderColor: '#F85F73',
     },
  },
});

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
        backgroundColor: gradient,
        labels:dataUSA.label,
        datasets: [
          dataUSA.dataset,
          dataBRA.dataset,
          dataCHI.dataset
        ]
      }
    }
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
    return (
      <Line
        ref={this.chartReference}
        data={data}
        width={900}
        height={380}
        options={{
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: false
              }
            }]
          },
          legend: {
            display: false
          },  
          maintainAspectRatio: false
        }}
      />
    )
  }
}

export default App;
