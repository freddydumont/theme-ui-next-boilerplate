import React from 'react';
import { render } from 'test-utils';
import StylePage from '../style';

describe('Header', () => {
  it('should render without crashing', () => {
    const { container } = render(<StylePage />);
    expect(container).toBeInTheDocument();
  });
});
