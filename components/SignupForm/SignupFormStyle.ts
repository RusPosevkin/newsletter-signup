import styled from "styled-components";
import Link from 'next/link'

export const SignupFormContainer = styled.div`
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 10;
`;

export const TermsLink = styled.a`
  color: salmon;
  text-decoration: underline;
`;

export const FormSection = styled.section`
  display: block;
  margin-bottom: 20px;
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
