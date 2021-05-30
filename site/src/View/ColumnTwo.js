import React from 'react';
import {
  totalCases,
  totalDeaths,
  totalVaccineDoses
} from '../Data/ColumnTwoData'

class ColumnTwo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: this.props.value,
      cases: totalCases(),
      deaths: totalDeaths(),
      vaccineDoses: totalVaccineDoses()
    }
    this.chartReference = React.createRef();
  }
  handleChange(e) {
    this.setState({})
  }
  render() {
    let cases = this.state.cases
    let deaths = this.state.deaths
    let vaccineDoses = this.state.vaccineDoses
    return (
        <div className="pure-g">
            <div className="pure-u-1-3">
                <p>
                    Cases <br />
                    {cases}
                </p>
            </div>
            <div className="pure-u-1-3">
                <p>
                    Deaths <br />
                    {deaths}
                </p>
            </div>
            <div className="pure-u-1-3">
                <p>
                    Vaccine Doses Administered <br />
                    {vaccineDoses}
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
