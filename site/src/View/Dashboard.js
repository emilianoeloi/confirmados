import React from 'react';
import ColumnOne from './ColumnOne'
import ColumnTwo from './ColumnTwo'
import ColumnThree from './ColumnThree'

class Dashboard extends React.Component {
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
        <div>
            <div className="pure-u-1-3 vai-sabrina">
                <ColumnOne />
            </div>
            <div className="pure-u-1-3">
                <ColumnTwo />
            </div>
            <div className="pure-u-1-3">
                <ColumnThree />
            </div>
      </div>
    )
  }
}

export default Dashboard;
