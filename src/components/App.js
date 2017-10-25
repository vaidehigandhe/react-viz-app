import React from 'react';
import YeomanImage from './YeomanImage';
import './app.css';
import Home from '../components/home/Home';



class AppComponent extends React.Component {

  render() {
    return (
      <div className="index">
       

          <Home />
        
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
