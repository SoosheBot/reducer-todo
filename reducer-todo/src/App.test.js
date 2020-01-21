import React from 'react';
import { render } from '@testing-library/react';
import { ToggleComplete } from './components/ToggleCompleted';
import App from './App';


// test('renders without crashing', () => {
//   render(<App />);
// });

test('ClearComplete renders without crashing', () => {
  render(<ToggleCompleted />)
})