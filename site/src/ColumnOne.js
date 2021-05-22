import React from 'react';
import {
  Bar
} from 'react-chartjs-2';
import './App.css';

class ColumnOne extends React.Component {
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
            <div className="pure-u-1-1">
                <p>
                    Last Updated at (M/D/YYYY)<br />
                </p>
                <table className="pure-table">
                    <thead>
                        <tr>
                            <th>Cases and Deaths by <br />
                                States/Cities</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="pure-table-odd">
                            <td>
                                33.092.242 | 589.393 
                                <br />
                                US
                            </td>
                        </tr>
                        <tr>
                            <td>
                                26.282.290 | 295.525 
                                <br />
                                US
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
  }
}

export default ColumnOne;
