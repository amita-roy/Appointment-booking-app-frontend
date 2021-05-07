import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Tag } from '../components/tag/Tag';

describe('rendered Tag', () => {
  test('has a child node p', () => {
    render(<Tag>Any</Tag>);
    const { container } = render(<Tag>Any</Tag>);
    expect(container.hasChildNodes(<p />)).toBe(
      true,
    );
  });
});
