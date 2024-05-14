interface IAlert {
  message: string
  showAlert: boolean
}

type FilmsData = {
  data: Array<string>
  loading: boolean
}

interface ISignupForm {
  termsUrl?: string
  films: FilmsData
}

type FormDataEntries = {
  [k: string]: FormDataEntryValue
}

type ValidateSignUpFormResult = {
  isValid: boolean
  messages: Array<string>
}
