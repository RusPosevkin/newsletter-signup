import styled from "styled-components";
import Link from 'next/link'

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
