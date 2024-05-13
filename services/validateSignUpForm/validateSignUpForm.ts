import { validateEmail } from '..';

export const validateSignUpForm = (formData: FormDataEntries): ValidateSignUpFormResult => {
  let isValid = true;
  const messages = [];

  if (!('email' in formData) || formData.email === '') {
    messages.push('Please enter your email address')
    isValid = false;
  } else {
    if (!validateEmail(formData.email.toString())) {
      messages.push('Invalid email format')
      isValid = false;
    }
  }

  if (!('terms' in formData)) {
    messages.push('Please accept terms and conditions')
    isValid = false;
  }

  return { isValid, messages };
};
