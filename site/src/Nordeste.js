import React from 'react';
import {
  Line
} from 'react-chartjs-2';
import './App.css';
import { loader } from './Data.js'

class Nordeste extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: this.props.value
    }
    this.chartReference = React.createRef();
  }
  handleChange(e) {
    this.setState({
      value: loader.getMaxCases()
    })
  }
  render() {
    const data = loader.getData()
    const dateMin=loader.getDateMin()
    const dateMax=loader.getDateMax()
    const value=loader.getMaxCases()

    return (
      <div>
      <Line
        ref={this.chartReference}
        data={data}
        options={{
				responsive: true,
				hoverMode: 'index',
				stacked: false,
				title: {
					display: true,
					text: 'Confirmados de COVID-19 - ' + loader.title
				},
				scales: {
          yAxes: loader.options,
        }
				}}
      />
      </div>
    )
  }
}

export default Nordeste;
