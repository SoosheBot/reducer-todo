import React from 'react';
import { render } from '@testing-library/react';
import { ClearComplete } from './components/ClearComplete';
import App from './App';


// test('renders without crashing', () => {
//   render(<App />);
// });

test('ClearComplete renders without crashing', () => {
  render(<ClearComplete />)
})