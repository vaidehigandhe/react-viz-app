import React from 'react';
import cssmodules from 'react-css-modules';
import styles from './piechart.cssmodule.css';

class PieChart extends React.Component {

  render() {
    return (
      <div className="piechart-component" styleName="piechart-component">
        Please edit src\components\pieChart\PieChart.js to update this component!
      </div>
    );
  }
}

PieChart.displayName = 'PieChartPieChart';
PieChart.propTypes = {};
PieChart.defaultProps = {};

export default cssmodules(PieChart, styles);
