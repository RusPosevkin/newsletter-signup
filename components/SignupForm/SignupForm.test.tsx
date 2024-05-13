import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { theme } from "@/configs";
import { store } from "@/store/store";
import SignupForm from '.'

const withProviders = (children: React.JSX.Element) => (
  <ThemeProvider theme={theme}>
    <Provider store={store}>{children}</Provider>
  </ThemeProvider>
);

test('it should match the snapshot and render', async () => {
  const { container } = render(
    withProviders(
      <SignupForm />
    )
  );

  expect(container).toMatchSnapshot();

  const emailInput = screen.getByTestId('input-email');
  const categorySelect = screen.getByTestId('select-category');
  const termsCheckbox = screen.getByTestId('checkbox-terms');
  const submitButton = screen.getByTestId('button-submit');

  expect(container).toBeInTheDocument();
  expect(emailInput).toBeInTheDocument();
  expect(categorySelect).toBeInTheDocument();
  expect(termsCheckbox).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();
});

test('it should validate empty email and not accepted terms and conditions', async () => {
  render(
    withProviders(
      <SignupForm />
    )
  );

  const submitButton = screen.getByTestId('button-submit');

  fireEvent.click(submitButton);

  expect(screen.getByText('Please enter your email address')).toBeInTheDocument();
  expect(screen.getByText('Please accept terms and conditions')).toBeInTheDocument();
});

test('it should validate incorrect email', async () => {
  render(
    withProviders(
      <SignupForm />
    )
  );

  const emailInput = screen.getByTestId('input-email');
  const termsCheckbox = screen.getByTestId('checkbox-terms');
  const submitButton = screen.getByTestId('button-submit');

  fireEvent.change(emailInput, { target: { value: "incorrect" } });
  fireEvent.click(termsCheckbox);
  fireEvent.click(submitButton);

  expect(screen.getByText('Invalid email format')).toBeInTheDocument();
});

test('it should reset previous validation errors between validations', async () => {
  render(
    withProviders(
      <SignupForm />
    )
  );

  const submitButton = screen.getByTestId('button-submit');
  const emailInput = screen.getByTestId('input-email');
  const termsCheckbox = screen.getByTestId('checkbox-terms');

  fireEvent.click(submitButton);

  expect(screen.getByText('Please enter your email address')).toBeInTheDocument();
  expect(screen.getByText('Please accept terms and conditions')).toBeInTheDocument();

  fireEvent.change(emailInput, { target: { value: "incorrect" } });
  fireEvent.click(termsCheckbox);

  fireEvent.click(submitButton);

  expect(screen.getByText('Invalid email format')).toBeInTheDocument();
});

test('it should reset form after successful validation and form submit', async () => {
  render(
    withProviders(
      <SignupForm />
    )
  );

  const submitButton = screen.getByTestId('button-submit');
  const emailInput = screen.getByTestId('input-email');
  const categorySelect = screen.getByTestId('select-category');
  const termsCheckbox = screen.getByTestId('checkbox-terms');

  fireEvent.change(emailInput, { target: { value: "correct@email.com" } });
  fireEvent.change(categorySelect, { target: { value: "heels" } });
  fireEvent.click(termsCheckbox);

  expect(emailInput).toHaveValue("correct@email.com");
  expect(categorySelect).toHaveValue("heels");
  expect(termsCheckbox).toBeChecked();
  fireEvent.click(submitButton);

  expect(emailInput).toHaveValue("");
  expect(categorySelect).toHaveValue("default");
  expect(termsCheckbox).not.toBeChecked();
});
