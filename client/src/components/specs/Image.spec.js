import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import Image from '../Image.jsx';

describe('Image', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<Image />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});