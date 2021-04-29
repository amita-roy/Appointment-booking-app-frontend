import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Service } from '../components/service/Service';
import Tag from '../components/tag/Tag';

const service = { attributes: { image: '' } };
const openModal = () => {};

describe('rendered Service', () => {
  test('has a child node with classname card-content', () => {
    render(<Service service={service} openModal={openModal} />);
    const { container } = render(<div className="service" />);
    expect(container.hasChildNodes(<div className="card-content" />)).toBe(
      true,
    );
  });

  test('has element with classname title node', () => {
    render(<Service service={service} openModal={openModal} />);
    const { container } = render(<div className="card-content" />);
    expect(container.hasChildNodes(<p className="title" />)).toBe(true);
  });

  test('has element with classname price', () => {
    render(<Service service={service} openModal={openModal} />);
    const { container } = render(<div className="card-content" />);
    expect(container.hasChildNodes(<p className="price" />)).toBe(true);
  });

  test('has element with classname description', () => {
    render(<Service service={service} openModal={openModal} />);
    const { container } = render(<div className="card-content" />);
    expect(container.hasChildNodes(<p className="description" />)).toBe(true);
  });

  test('has Tag element with classname duration', () => {
    render(<Service service={service} openModal={openModal} />);
    const { container } = render(<div className="card-content" />);
    expect(container.hasChildNodes(<Tag className=" duration">49</Tag>)).toBe(true);
  });

  test('has Tag element with classname offer', () => {
    render(<Service service={service} openModal={openModal} />);
    const { container } = render(<div className="card-content" />);
    expect(container.hasChildNodes(<Tag className=" offer">20</Tag>)).toBe(true);
  });
});
