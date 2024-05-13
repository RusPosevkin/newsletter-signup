import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Alert from '.'

test('it should match the snapshot and render', async () => {
  const { container } = render(<Alert />);
  expect(container).toMatchSnapshot();
  expect(container).toBeInTheDocument();
});