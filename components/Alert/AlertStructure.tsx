import React, { FC, useEffect, useState } from 'react'

import { ALERT_ANIMATION_DELAY, ALERT_DELAY_TIMEOUT } from '@/configs';
import { useAppDispatch } from '@/hooks/store';
import { resetNewsletterState } from '@/store/newsletterSlice';
import { AlertContainer } from './AlertStyle';

const AlertStructure: FC<IAlert> = ({ message, showAlert }) => {
  const dispatch = useAppDispatch();
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    if (showAlert) {
      setIsHidden(false);

      // scheduling hiding alert
      const timeoutId = setTimeout(() => {
        setIsHidden(true);
      }, ALERT_DELAY_TIMEOUT);

      // scheduling resetting state after finishing the alert's hiding animation
      const timeoutDispatchId = setTimeout(() => {
        dispatch(resetNewsletterState());
      }, ALERT_DELAY_TIMEOUT + ALERT_ANIMATION_DELAY);

      return () => {
        clearTimeout(timeoutId);
        clearTimeout(timeoutDispatchId);
      };
    } else {
      setIsHidden(true);
    }
  }, [showAlert])

  return (
    <AlertContainer data-hidden={isHidden}>
      <h1>{message}</h1>
    </AlertContainer >
  );
}

export default AlertStructure;
