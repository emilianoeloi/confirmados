import React from 'react';
import {
  Bar
} from 'react-chartjs-2';
import './App.css';

class ColumnTwo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: this.props.value
    }
    this.chartReference = React.createRef();
  }
  handleChange(e) {
    this.setState({})
  }
  render() {

    return (
        <div className="pure-g">
            <div className="pure-u-1-3">
                <p>
                    Cases <br />
                    166.272.195
                </p>
            </div>
            <div className="pure-u-1-3">
                <p>
                    Deaths <br />
                    3.446.059
                </p>
            </div>
            <div className="pure-u-1-3">
                <p>
                    Vaccine Doses Administered <br />
                    1.630.113.800
                </p>
            </div>
            <div className="pure-u-3-3">
                <img className="image-mapa pure-img" src="mapa-brasil.jpg" />
            </div>
        </div>
    )
  }
}

export default ColumnTwo;
