import React from 'react';
import { shallow } from 'enzyme';
import Configuration from 'components\configuration\Configuration.js';

describe('<Configuration />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<Configuration />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "configuration-component"', function () {
      expect(component.hasClass('configuration-component')).to.equal(true);
    });
  });
});
