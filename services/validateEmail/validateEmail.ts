const EMAIL_PATTERN = '^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$';

export const validateEmail = (email: string): boolean => {
  return RegExp(EMAIL_PATTERN, 'i').test(email);
};
