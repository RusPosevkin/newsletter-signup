import { act, render, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';

import { theme } from '@/configs';
import { store } from '@/store/store';
import { setNewsletterState } from '@/store/newsletterSlice';
import Alert from '.'

const withProviders = (children: React.JSX.Element) => (
  <ThemeProvider theme={theme}>
    <Provider store={store}>{children}</Provider>
  </ThemeProvider>
);

test('it should match the snapshot and render', async () => {
  const { container } = render(
    withProviders(
      <Alert />
    )
  );

  expect(container).toMatchSnapshot();
  expect(container).toBeInTheDocument();
});

test('it should show a message after updating the store', async () => {
  render(
    withProviders(
      <Alert />
    )
  );

  act(() => {
    store.dispatch(setNewsletterState({
      message: 'test message',
      isSubmitted: true
    }))
  });

  await waitFor(() => {
    expect(screen.getByText('test message')).toBeInTheDocument();
  });
});
