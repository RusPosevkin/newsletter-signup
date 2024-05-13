import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import SignupForm from '.'

test('it should match the snapshot and render', async () => {
  const { container } = render(<SignupForm />);
  expect(container).toMatchSnapshot();
  expect(container).toBeInTheDocument();
});
