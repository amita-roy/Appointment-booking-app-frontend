import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import Jumbotron from '../components/jumbotron/Jumbotron';

describe('rendered Jumbotron', () => {
  test('has a container with classname jumbotron', () => {
    render(
      <BrowserRouter>
        <Jumbotron />
      </BrowserRouter>,
    );
    const { container } = render(<div className="bg-jumbotron" />);
    expect(container.firstChild.classList.contains('bg-jumbotron')).toBe(true);
  });

  test('has element with classname title has a childnode h1', () => {
    render(
      <BrowserRouter>
        <Jumbotron />
      </BrowserRouter>,
    );
    const { container } = render(<div className="title" />);
    expect(container.hasChildNodes(<h1>Award</h1>)).toBe(true);
  });
});
