//Inside this folder all the tests can be added no matter if the tests are
//nested or are in a single file like this.
import 'react-native';
import HomePage from '../source/containers/home-page';
import React from 'react';
import renderer from 'react-test-renderer' ;

const sum = (...params) => params.reduce((prev, curr) => prev + curr, 0);

it('renders correctly', () => {
  expect(sum(1, 2, 3)).toBe(6);
  expect(sum(2, 2, 2)).toBe(6);
  expect(sum(4, 2, 3)).toBe(9);
  expect(sum(2, 5, 3)).toBe(10);
});

it('snap-shoot', () => {
  const tree = renderer.create(<HomePage />).toJSON();
  expect(tree).toMatchSnapshot();
});
