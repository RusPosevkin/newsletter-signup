import React, { FC, FormEvent, useRef, useState } from 'react'
import Link from 'next/link';

import { useAppDispatch } from '@/hooks/store';
import { setNewsletterState } from '@/store/newsletterSlice';
import { getAlertMessage, validateSignUpForm } from '@/services';
import {
  CategorySelect,
  EmailInput,
  ErrorMessage,
  FormSection,
  Label,
  SignupFormContainer,
  Skeleton,
  SubmitButton,
  TermsLink
} from './SignupFormStyle';

const SignupFormStructure: FC<ISignupForm> = ({ termsUrl = '#', films }) => {
  const [validationErrors, setValidationErrors] = useState<Array<String>>([]);
  const dispatch = useAppDispatch();
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // reset previous errors
    setValidationErrors([]);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());

    const {
      isValid,
      messages
    } = validateSignUpForm(formJson);

    if (!isValid) {
      setValidationErrors(messages);
      return;
    }

    const message = getAlertMessage(formJson);

    dispatch(setNewsletterState({
      message,
      isSubmitted: true
    }));

    // reset form
    formRef.current && formRef.current.reset();
  }

  return (
    <>
      {
        films.loading ? (
          <section data-testid="skeleton-loading">
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </section>
        ) : (
          <SignupFormContainer>
            <form onSubmit={handleSubmit} ref={formRef}>
              <FormSection>
                <Label required htmlFor="email">
                  Your email
                </Label>
                <EmailInput
                  id="email"
                  name="email"
                  data-testid="input-email"
                  placeholder='Enter your email address'
                />
              </FormSection>
              <FormSection>
                <Label>
                  I'm interested in { }
                  <CategorySelect name="interestCategory" defaultValue="default" data-testid="select-category">
                    <option value="default" disabled>choose a category</option>
                    {films.data.map((film, index) => (
                      <option key={index} value={film}>{film}</option>
                    ))}
                    <option value="shoes">Shoes</option>
                    <option value="heels">Heels</option>
                    <option value="sandles">Sandles</option>
                    <option value="handbags">Handbags</option>
                  </CategorySelect>
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
              <SubmitButton type="submit" data-testid="button-submit">Subscribe</SubmitButton>
            </form>
          </SignupFormContainer>
        )
      }
    </>
  );
}

export default SignupFormStructure;
