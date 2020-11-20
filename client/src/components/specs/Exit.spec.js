import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import Exit from '../Exit.jsx';

describe('Exit', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<Exit />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});