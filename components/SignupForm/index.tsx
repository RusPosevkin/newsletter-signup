import React from 'react'
import SignupFormComponent from "./SignupFormStructure";

const SignupForm = () => {
  const message = 'Replace this with content from Redux'

  const componentProps = {
    message
  }

  return (
    <SignupFormComponent {...componentProps} />
  );
}

export default SignupForm;
