import { validateEmail } from "..";

type ValidateSignUpFormResult = {
  isValid: boolean;
  messages: Array<string>;
}

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

  // if (isValid) {
  //   let message = `Your email ${formData.email} successfully subscribed to the newsletter`;

  //   if ('interestCategory' in formData) {
  //     const category = formData.interestCategory.toString();
  //     const categoryText = category.charAt(0).toUpperCase() + category.slice(1);

  //     message += ` with the category ${categoryText}`;
  //   }

  //   messages.push(message);
  // }


  return { isValid, messages };
};
