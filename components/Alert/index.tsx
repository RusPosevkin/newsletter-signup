import React from 'react'
import AlertComponent from "./AlertStructure";
import { useAppSelector } from '@/hooks/store';

const Alert = () => {
  const newsletterState = useAppSelector((state) => state.newsletter.newsletterState);

  const componentProps = {
    message: newsletterState.message,
    showAlert: newsletterState.isSubmitted
  }

  return (
    <AlertComponent {...componentProps} />
  );
}

export default Alert;
