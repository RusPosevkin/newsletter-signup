interface IAlert {
  message: string,
  showAlert: boolean
}

interface ISignupForm {
  termsUrl?: string
}

type FormDataEntries = {
  [k: string]: FormDataEntryValue
}

type ValidateSignUpFormResult = {
  isValid: boolean;
  messages: Array<string>;
}
