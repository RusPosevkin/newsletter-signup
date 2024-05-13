import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Header from '.'

test('it should match the snapshot and render', async () => {
  const { container } = render(<Header />);
  expect(container).toMatchSnapshot();
  expect(container).toBeInTheDocument();
});
