import { validateEmail } from './validateEmail';

describe('validateEmail', () => {
  it('returns true if the email is valid', () => {
    expect(validateEmail('test@domain1.com')).toBe(true)
    expect(validateEmail('test1email@gmail.com')).toBe(true)
    expect(validateEmail('email123@icloud.com')).toBe(true)
  })

  it('returns false if the email is invalid', () => {
    expect(validateEmail('123foo')).toBe(false)
    expect(validateEmail('bar')).toBe(false)
    expect(validateEmail('a.a.@com')).toBe(false)
  })
})
