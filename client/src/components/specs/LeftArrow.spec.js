import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import LeftArrow from '../LeftArrow.jsx';

describe('LeftArrow', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<LeftArrow />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});