import React, { ChangeEvent, FC, FormEvent, Key, useRef, useState } from 'react'
import Link from 'next/link';
import { ErrorMessage, FormSection, Label, SignupFormContainer, TermsLink } from "./SignupFormStyle";
import { useAppDispatch } from '@/hooks/store';
import { setNewsletterState } from '@/store/newsletterSlice';
import { getAlertMessage, validateEmail, validateSignUpForm } from '@/services';

const SignupFormStructure: FC<{ termsUrl?: string }> = ({ termsUrl = '#' }) => {
  const [validationErrors, setValidationErrors] = useState<Array<String>>([]);
  const dispatch = useAppDispatch();
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setValidationErrors([]);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
    const {
      isValid,
      messages
    } = validateSignUpForm(formJson);

    if (!isValid) {
      setValidationErrors(messages);
      return;
    }

    console.log('submit form');

    const message = getAlertMessage(formJson);

    dispatch(setNewsletterState({
      message,
      isSubmitted: true
    }));

    // reset form
    formRef.current && formRef.current.reset();
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
            data-testid="input-email"
            placeholder='Enter your email address'
          />
        </FormSection>
        <FormSection>
          <Label>
            I'm interested in { }
            <select name="interestCategory" defaultValue="default" data-testid="select-category">
              <option value="default" disabled>choose a category</option>
              <option value="shoes">Shoes</option>
              <option value="heels">Heels</option>
              <option value="sandles">Sandles</option>
              <option value="handbags">Handbags</option>
            </select>
          </Label>
        </FormSection>
        <FormSection>
          <input type="checkbox" name="terms" id="terms" data-testid="checkbox-terms" />
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
        <button type="submit" data-testid="button-submit">Subscribe</button>
      </form>
    </SignupFormContainer>
  );
}

export default SignupFormStructure;
