import React from 'react';
import cssmodules from 'react-css-modules';
import styles from './barchart.cssmodule.css';
let BarChartComponent = require('react-d3-basic').BarChart;
class BarChart extends React.Component {

  render() {
//    let generalChartData = require('dsv?delimiter=\t!../data/letter.tsv')
  let generalChartData =   
      let width = 700,
        height = 400,
        title = "Bar Chart",
        chartSeries = [
          {
            field: 'frequency',
            name: 'Frequency'
          }
        ],
        x = function(d) {
          return d.letter;
        },
        xScale = 'ordinal',
        xLabel = "Letter",
        yLabel = "Frequency",
        yTicks = [10, "%"];

    return (
      <div className="barchart-component" styleName="barchart-component">
       <BarChartComponent
      title= {title}
      data= {generalChartData}
      width= {width}
      height= {height}
      chartSeries = {chartSeries}
      x= {x}
      xLabel= {xLabel}
      xScale= {xScale}
      yTicks= {yTicks}
      yLabel = {yLabel}
    />
      </div>
    );
  }
}

BarChart.displayName = 'BarChartBarChart';
BarChart.propTypes = {};
BarChart.defaultProps = {};

export default cssmodules(BarChart, styles);
