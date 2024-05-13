import styled from "styled-components";

export const SignupFormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-top: 1rem;
`;

export const TermsLink = styled.a`
  color: rgb(0, 150, 136);
  text-decoration: underline;
`;

export const EmailInput = styled.input`
  width: 180px;
  font-size: 0.9rem;
  border-radius: 0.3rem;
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(0, 150, 136);
`;

export const CategorySelect = styled.select`
  width: 160px;
  font-size: 0.9rem;
  border-radius: 0.3rem;
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(0, 150, 136);
`;

export const SubmitButton = styled.button`
  width: 100%;
  font-size: 0.9rem;
  border-radius: 0.3rem;
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(0, 150, 136);
`;

export const FormSection = styled.section`
  display: block;
  margin-bottom: 1rem;
`;

export const ErrorMessage = styled.section`
  display: block;
  color: red;
`;

export const Label = styled.label<{ required?: boolean; }>`
  &:after {
    content: ${(props) => `"${props.required ? ' * ' : ''}"`};
    color: red;
  }
`;
