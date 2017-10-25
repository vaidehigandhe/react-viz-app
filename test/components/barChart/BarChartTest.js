import React from 'react';
import { shallow } from 'enzyme';
import BarChart from 'components\barChart\BarChart.js';

describe('<BarChart />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<BarChart />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "barchart-component"', function () {
      expect(component.hasClass('barchart-component')).to.equal(true);
    });
  });
});
