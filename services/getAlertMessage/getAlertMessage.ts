export const getAlertMessage = (formData: FormDataEntries): string => {
  let message = `Your email ${formData.email} successfully subscribed to the newsletter`;

  if ('interestCategory' in formData) {
    const category = formData.interestCategory.toString();
    const categoryText = category.charAt(0).toUpperCase() + category.slice(1);

    message += ` with the category ${categoryText}`;
  }

  return message;
};
