import React from 'react';
import {
  Bar
} from 'react-chartjs-2';
import './App.css';

class BarApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: this.props.value
    }
    this.chartReference = React.createRef();
  }
  handleChange(e) {
    this.setState({
      value: this.props.loader.getMaxCases()
    })
  }
  render() {
    const data = this.props.loader.getData()

    return (
      <div>
      <Bar
        ref={this.chartReference}
        data={data}
        options={{
          responsive: true,
          hoverMode: 'index',
          stacked: false,
          title: {
            display: true,
            text: 'Casos novos por dia - Confirmados de COVID-19 - ' + this.props.loader.title
          },
          scales: {
            yAxes: this.props.loader.options,
          }
				}}
      />
      </div>
    )
  }
}

export default BarApp;
