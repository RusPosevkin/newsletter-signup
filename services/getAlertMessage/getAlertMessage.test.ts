import { getAlertMessage } from './getAlertMessage';

describe('getAlertMessage', () => {
  it('returns correct message without category', () => {
    const formData = {
      email: 'foo@email.com'
    };
    const message = `Your email ${formData.email} successfully subscribed to the newsletter`;

    expect(getAlertMessage(formData)).toBe(message);
  })

  it('returns correct message with selected category', () => {
    const formData = {
      email: 'bar@email.com',
      interestCategory: 'shoes'
    }
    const message = `Your email ${formData.email} successfully subscribed to the newsletter with the category Shoes`;
    expect(getAlertMessage(formData)).toBe(message);
  })
})
