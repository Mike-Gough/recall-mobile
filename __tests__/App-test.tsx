import 'react-native';
import React from 'react';
import { shallow } from 'react-native-testing-library';
import { default as App } from '../src/App';
import renderer from 'react-test-renderer';

test('App renders correctly', () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});
