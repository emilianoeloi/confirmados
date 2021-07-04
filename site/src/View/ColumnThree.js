import React from 'react';
import {
  dataFromCases,
  dataFromDeaths,
  dataFromVaccineDoses
} from '../Data/ColumnThreeData'
import BarApp from '../App/BarApp'
import LineApp from '../App/LineApp'
import {
  loaders,
  loadersBar
 } from '../Data/Data.js'

class ColumnThree extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: this.props.value,
      dataFromCases: dataFromCases(),
      dataFromDeaths: dataFromDeaths(),
      dataFromVaccineDoses: dataFromVaccineDoses()
    }
    this.chartReference = React.createRef();
  }
  handleChange(e) {
    this.setState({})
  }
  render() {
    const dataFromCases = this.state.dataFromCases
    const dataFromDeaths = this.state.dataFromDeaths
    const dataFromVaccineDoses = this.state.dataFromVaccineDoses

    return (
      <div className="pure-g">
        <div className="pure-u-1-1">
          <BarApp loader={loadersBar[0]} ></BarApp>
          <hr />
          <LineApp loader={loaders[0]}></LineApp> 
          <hr />
          Gráfico {dataFromVaccineDoses.name} <hr />
        </div>
      </div>
    )
  }
}

export default ColumnThree;