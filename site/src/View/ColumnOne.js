import React from 'react';
import {
    lastUpdated, 
    stateList
} from '../Data/ColumnOneData'

class ColumnOne extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: this.props.value,
      lastUpdated: lastUpdated(),
      stateList: stateList()
    }
    this.chartReference = React.createRef();
  }
  render() {
    const lastUpdated = this.state.lastUpdated
    const stateList = this.state.stateList
    return (
        <div className="pure-g">
            <div className="pure-u-1-1">
                <p>
                    Last Updated at (M/D/YYYY)<br />
                    {lastUpdated}
                </p>
                <table className="pure-table">
                    <thead>
                        <tr>
                            <th>Cases and Deaths by <br />
                                States/Cities</th>
                        </tr>
                    </thead>
                    <tbody>
                        {stateList.map((state) =>
                            <tr className={state.key % 2 == 0 ? "pure-table-odd":""}>
                                <td>
                                    {state.cases} | {state.deaths} 
                                    <br />
                                    {state.name}
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
  }
}

export default ColumnOne;
