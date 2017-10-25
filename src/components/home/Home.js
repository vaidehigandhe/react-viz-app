import React from 'react';
import cssmodules from 'react-css-modules';
import styles from './home.cssmodule.css';
import Configuration from '../configuration/Configuration';

class Home extends React.Component {
constructor(props)
{
  super(props)
  this.state={};
  this.handleChartSelection=this.handleChartSelection.bind(this);
}
handleChartSelection(e)
{
  console.log(e.currentTarget.attributes[1].value);
  this.setState({"selectedType":e.currentTarget.attributes[1].value});

}

  render() {
    let selectedType = this.state.selectedType;
    return (
      <div className="home-component" styleName="home-component">
        <div>Please select a Chart</div>
        <div className="chartTypeContainer container">
          <div className="row">
            <div className="col-sm-6" onClick={this.handleChartSelection} data-val="bar">Bar Chart</div>
            <div className="col-sm-6" onClick={this.handleChartSelection} data-val="pie">Pie Chart</div>
          </div>
          <div className="row">
            <Configuration selectedType={selectedType} />
          </div>
        </div>
      </div>
    );
  }
}

Home.displayName = 'HomeHome';
Home.propTypes = {};
Home.defaultProps = {};

export default cssmodules(Home, styles);
