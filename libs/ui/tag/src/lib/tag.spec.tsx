import { render } from '@testing-library/react';

import Tag from './tag';

describe('Tag', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Tag label='wallet' variant='filled' />);
    expect(baseElement).toBeTruthy();
  });
});
