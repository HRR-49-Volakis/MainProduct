import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import CarouselImage from '../CarouselImage.jsx';

describe('CarouselImage', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<CarouselImage />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});