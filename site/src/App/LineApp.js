import React from 'react';
import {
  Line
} from 'react-chartjs-2';

class LineApp extends React.Component {
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
            <Line
                ref={this.chartReference}
                data={data}
                options={{
                    responsive: true,
                    hoverMode: 'index',
                    stacked: false,
                    title: {
                        display: true,
                        text: 'Confirmados de COVID-19 - ' + this.props.loader.title
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

export default LineApp;
