import React, { ChangeEvent, FC, FormEvent, Key, useState } from 'react'
import Link from 'next/link';
import { ErrorMessage, FormSection, Label, SignupFormContainer, TermsLink } from "./SignupFormStyle";

const SignupFormStructure: FC<{ message: string }> = ({ message }) => {
  const [error, setError] = useState<Array<String>>([]);

  const isEmailValid = (email: string) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError([]);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);

    let isError = false;

    if (!('email' in formJson) || formJson.email === '') {
      setError((prev) => [...prev, 'Please enter your email address'])
      isError = true;
    } else {
      if (!isEmailValid(formJson.email.toString())) {
        setError((prev) => [...prev, 'Invalid email format'])
        isError = true;
      }
    }

    if (!('terms' in formJson)) {
      setError((prev) => [...prev, 'Please accept terms and conditions'])
      isError = true;
    }

    if (!isError) {
      console.log('submit form');
    }
  }


  return (
    <SignupFormContainer>
      <h1>SignupForm Content here</h1>
      <form onSubmit={handleSubmit}>
        <FormSection>
          <Label required htmlFor="email">
            Your email
          </Label>
          <input
            id="email"
            name="email"
            placeholder='Enter your email address'
          />
        </FormSection>
        <FormSection>
          <Label>
            I'm interested in { }
            <select name="interestCategory" defaultValue="default">
              <option value="default" disabled>choose a category</option>
              <option value="shoes">Shoes</option>
              <option value="heels">Heels</option>
              <option value="sandles">Sandles</option>
              <option value="handbags">Handbags</option>
            </select>
          </Label>
        </FormSection>
        <FormSection>
          <input type="checkbox" name="terms" id="terms" />
          <Label required htmlFor="terms">
            I agree to the { }
            <Link href='#' passHref legacyBehavior>
              <TermsLink>terms and conditions</TermsLink>
            </Link>
          </Label>
        </FormSection>
        {
          error.length > 0 && (<ErrorMessage>
            {error.map((error, index) => (
              <p key={index}>
                {error}
              </p>
            ))}
          </ErrorMessage>)
        }
        <button type="submit">Subscribe to free newsletter</button>
      </form>
    </SignupFormContainer>
  );
}

export default SignupFormStructure;
