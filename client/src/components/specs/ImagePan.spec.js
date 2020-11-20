import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import ImagePan from '../ImagePan.jsx';

describe('ImagePan', () => {

  it('returns the xDelta and yDelta', () => {
    let {xDelta, yDelta} = ImagePan(250, 250);
    expect(yDelta).toEqual(-150.4444444444444);
    expect(xDelta).toEqual(-22.4444444444444);
  });

});