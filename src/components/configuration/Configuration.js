import React from 'react';
import cssmodules from 'react-css-modules';
import styles from './configuration.cssmodule.css';

class Configuration extends React.Component {
  constructor(props) {
    super(props)
    this.state = {};
    this.saveConfiguration = this.saveConfiguration.bind(this);
  }

  saveConfiguration() {
    //save all the configurations in the config form
  }
  render() {
    let basic_config = [];
    if (this.props.selectedType == 'bar') {
      basic_config = [{ id: "width", type: "number" }, { id: "height", type: "number" }, {

        id: "xAxis",
        type: "select"
      }, {
        id: "yAxis",
        type: "select"
      }, {
        name: "tooltip",
        type: "boolean"
      }]
    } else if (this.props.selectedType == 'pie') {
      basic_config = [{ id: "width", type: "number" }, { id: "height", type: "number" },
      {
        id: "radius",
        type: "number"
      },
      {
        id: "innerRadius",
        type: "number"
      }]
    }

    let dataKeys = ["A", "B", "C", "D"];
    let optionList = dataKeys.map((key, i) => <option value={key}>{key}</option>);

    let basicConfigSettings = [];
    basic_config.forEach(function (obj, i) {


      if (obj.type == "number") {
        basicConfigSettings.push(<div className="form-group">
          <label className="control-label col-sm-3" htmlFor={obj.id}>{obj.id}</label>
          <div className="col-sm-8">
            <input type="number" className="form-control" id={obj.id} placeholder="in Pixel" />
          </div>
        </div>);
      } else if (obj.type == "select") {
        basicConfigSettings.push(<div className="form-group">
          <label className="control-label col-sm-3" htmlFor={obj.id}>{obj.id}</label>
          <div className="col-sm-8">
            <select ref={obj.id} className="form-control" ref={obj.id} id={obj.id} >{optionList}</select>
          </div>
        </div>);
      } else if (obj.type == "boolean") {
        basicConfigSettings.push(<div className="form-group">
          <label className="control-label col-sm-3">{obj.id}</label>
          <div className="btn-group col-sm-8" data-toggle="buttons">
            <label className="btn btn-secondary active">
              <input type="radio" name="options" id="option1" autoComplete="off" />True
            </label>
            <label className="btn btn-secondary">
              <input type="radio" name="options" id="option2" autoComplete="off" />False
            </label>
          </div>
        </div>)
      }
    })

    let visibleConfiguration = <form className="form-horizontal configForm">{basicConfigSettings}
      <button className="btn btn-primary" onClick={this.saveConfiguration}>Save</button>
    </form>;

    return (
      <div className="configuration-component" styleName="configuration-component">
        {visibleConfiguration}

      </div>
    );
  }
}

Configuration.displayName = 'ConfigurationConfiguration';
Configuration.propTypes = {};
Configuration.defaultProps = {};

export default cssmodules(Configuration, styles);
