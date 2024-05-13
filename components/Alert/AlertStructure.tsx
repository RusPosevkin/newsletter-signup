import React, { FC } from 'react'
import { AlertContainer } from "./AlertStyle";

const AlertStructure: FC<{ message: string }> = ({ message }) => {
  return (
    <AlertContainer>
      <h1>{message}</h1>
    </AlertContainer>
  );
}

export default AlertStructure;