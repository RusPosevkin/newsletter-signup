import { validateEmail } from '..';
import { validateSignUpForm } from './validateSignUpForm';

jest.mock('..')
const mockValidateEmail = validateEmail as jest.Mock;

describe('validateSignUpForm', () => {
  describe('when email is empty', () => {
    describe('and terms were accepted', () => {
      it('returns not valid and message email is required', () => {
        const formData = {
          email: '',
          terms: 'on'
        };

        expect(validateSignUpForm(formData)).toEqual(
          expect.objectContaining({
            isValid: false,
            messages: ['Please enter your email address']
          })
        )
      })
    })

    describe('and terms were not accepted', () => {
      it('returns not valid and two messages – email is required and terms should be accepted', () => {
        const formData = {
          email: ''
        };

        expect(validateSignUpForm(formData)).toEqual(
          expect.objectContaining({
            isValid: false,
            messages: [
              'Please enter your email address',
              'Please accept terms and conditions'
            ]
          })
        )
      })
    })
  })

  describe('when email is filled', () => {
    describe('and incorrect', () => {
      describe('and terms were accepted', () => {
        it('returns not valid and message invalid email', () => {
          const email = 'incorrect';
          const formData = {
            email,
            terms: 'on'
          };

          mockValidateEmail.mockReturnValue(false)

          const result = validateSignUpForm(formData);

          expect(mockValidateEmail).toHaveBeenCalledWith(email);
          expect(result).toEqual(
            expect.objectContaining({
              isValid: false,
              messages: ['Invalid email format']
            })
          );
        })
      })

      describe('and terms were not accepted', () => {
        it('returns not valid and two messages – invalid email and terms should be accepted', () => {
          const email = 'incorrect';
          const formData = { email };

          mockValidateEmail.mockReturnValue(false)

          const result = validateSignUpForm(formData);

          expect(mockValidateEmail).toHaveBeenCalledWith(email);
          expect(result).toEqual(
            expect.objectContaining({
              isValid: false,
              messages: ['Invalid email format', 'Please accept terms and conditions']
            })
          );
        })
      })
    })
    describe('and correct', () => {
      describe('and terms were accepted', () => {
        it('returns valid and empty messages', () => {
          const email = 'correct@email.com';
          const formData = {
            email,
            terms: 'on'
          };

          mockValidateEmail.mockReturnValue(true);

          const result = validateSignUpForm(formData);

          expect(mockValidateEmail).toHaveBeenCalledWith(email);
          expect(result).toEqual(
            expect.objectContaining({
              isValid: true,
              messages: []
            })
          );
        })
      })

      describe('and terms were not accepted', () => {
        it('returns not valid and message terms should be accepted', () => {
          const email = 'correct@email.com';
          const formData = { email };

          const result = validateSignUpForm(formData);

          mockValidateEmail.mockReturnValue(true);

          expect(mockValidateEmail).toHaveBeenCalledWith(email);
          expect(result).toEqual(
            expect.objectContaining({
              isValid: false,
              messages: ['Please accept terms and conditions']
            })
          );
        })
      })
    })
  })
})
