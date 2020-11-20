import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import RightArrow from '../RightArrow.jsx';

describe('RightArrow', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<RightArrow />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});