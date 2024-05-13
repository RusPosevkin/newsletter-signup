import React, { FC } from 'react'
import { AlertContainer } from "./AlertStyle";

const AlertStructure: FC<IAlert> = ({ message, showAlert }) => {
  return (
    showAlert ? (
      <AlertContainer>
        <h1>{message}</h1>
      </AlertContainer >
    ) : null
  );
}

export default AlertStructure;
