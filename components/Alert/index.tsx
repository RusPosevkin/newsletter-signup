import React from 'react'
import AlertComponent from "./AlertStructure";

const Alert = () => {
  const message = 'Replace this with content from Redux'

  const componentProps = {
    message
  }

  return (
    <AlertComponent {...componentProps} />
  );
}

export default Alert;