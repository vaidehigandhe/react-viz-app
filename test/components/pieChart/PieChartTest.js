import React from 'react';
import { shallow } from 'enzyme';
import PieChart from 'components\pieChart\PieChart.js';

describe('<PieChart />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<PieChart />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "piechart-component"', function () {
      expect(component.hasClass('piechart-component')).to.equal(true);
    });
  });
});
