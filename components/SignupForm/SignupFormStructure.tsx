import React, { ChangeEvent, FC, FormEvent, Key, useRef, useState } from 'react'
import Link from 'next/link';
import { ErrorMessage, FormSection, Label, SignupFormContainer, TermsLink } from "./SignupFormStyle";
import { useAppDispatch } from '@/hooks/store';
import { setNewsletterState } from '@/store/newsletterSlice';

const SignupFormStructure: FC<{ termsUrl?: string }> = ({ termsUrl = '#' }) => {
  const [validationErrors, setValidationErrors] = useState<Array<String>>([]);
  const dispatch = useAppDispatch();
  const formRef = useRef<HTMLFormElement>(null);

  const isEmailValid = (email: string) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setValidationErrors([]);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);

    let isError = false;

    if (!('email' in formJson) || formJson.email === '') {
      setValidationErrors((prev) => [...prev, 'Please enter your email address'])
      isError = true;
    } else {
      if (!isEmailValid(formJson.email.toString())) {
        setValidationErrors((prev) => [...prev, 'Invalid email format'])
        isError = true;
      }
    }

    if (!('terms' in formJson)) {
      setValidationErrors((prev) => [...prev, 'Please accept terms and conditions'])
      isError = true;
    }

    if (!isError) {
      console.log('submit form');

      let message = `Your email ${formJson.email} successfully subscribed to the newsletter`;

      if ('interestCategory' in formJson) {
        const category = formJson.interestCategory.toString();
        const categoryText = category.charAt(0).toUpperCase() + category.slice(1);

        message += ` with the category ${categoryText}`;
      }

      formRef.current && formRef.current.reset();

      dispatch(setNewsletterState({
        message,
        isSubmitted: true
      }));
    }
  }

  return (
    <SignupFormContainer>
      <form onSubmit={handleSubmit} ref={formRef}>
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
            <Link href={termsUrl} passHref legacyBehavior>
              <TermsLink>terms and conditions</TermsLink>
            </Link>
          </Label>
        </FormSection>
        {
          validationErrors.length > 0 && (<ErrorMessage>
            {validationErrors.map((error, index) => (
              <p key={index}>
                {error}
              </p>
            ))}
          </ErrorMessage>)
        }
        <button type="submit">Subscribe</button>
      </form>
    </SignupFormContainer>
  );
}

export default SignupFormStructure;
