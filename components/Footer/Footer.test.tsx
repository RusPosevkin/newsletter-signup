import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Footer from '.'

test('it should match the snapshot and render', async () => {
  const { container } = render(<Footer />);
  expect(container).toMatchSnapshot();
  expect(container).toBeInTheDocument();
});
