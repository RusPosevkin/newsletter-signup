interface IAlert {
  message: string,
  showAlert: boolean
}

type FormDataEntries = {
  [k: string]: FormDataEntryValue
}

type ValidateSignUpFormResult = {
  isValid: boolean;
  messages: Array<string>;
}
