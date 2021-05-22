import React from 'react';
import BarApp from './BarApp'
import {
  loaders,
  loadersBar
 } from './Data.js'

class ColumnThree extends React.Component {
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
          {loaders.map(function (loader, index) {
            console.info(index)
            const loaderBar = loadersBar[index]
            return (
              <div key={index}>
                <BarApp loader={loaderBar}></BarApp>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default ColumnThree;

/*



*/