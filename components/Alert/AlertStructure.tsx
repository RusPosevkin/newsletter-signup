import React, { FC, useEffect, useState } from 'react'
import { AlertContainer, Fade } from "./AlertStyle";
import { ALERT_ANIMATION_DELAY, ALERT_DELAY_TIMEOUT } from '@/configs';
import { useAppDispatch } from '@/hooks/store';
import { resetNewsletterState } from '@/store/newsletterSlice';

const AlertStructure: FC<IAlert> = ({ message, showAlert }) => {
  const dispatch = useAppDispatch();
  // const [fade, setFade] = useState(false);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    // if (showAlert) {
    //   const timeoutId = setTimeout(() => {
    //     // dispatch(resetNewsletterState());
    //   }, ALERT_DELAY_TIMEOUT);

    //   return () => clearTimeout(timeoutId);
    // }
    if (showAlert) {
      setFade(false)
      const timeoutId = setTimeout(() => {
        setFade(true);
        // dispatch(resetNewsletterState());
      }, ALERT_DELAY_TIMEOUT);

      const timeoutDispatchId = setTimeout(() => {
        // setFade(true);
        dispatch(resetNewsletterState());
      }, ALERT_DELAY_TIMEOUT + ALERT_ANIMATION_DELAY);

      return () => {
        clearTimeout(timeoutId);
        clearTimeout(timeoutDispatchId);
      };
    } else {
      setFade(true);
    }
  }, [showAlert])
  console.log('fade/ out :', fade)

  // return (
  //   showAlert ? (
  //     <AlertContainer>
  //       <h1>{message}</h1>
  //     </AlertContainer >
  //   ) : null
  // );
  return (
    <Fade data-hidden={fade}>
      <h1>{message}</h1>
    </Fade >
  );
}

export default AlertStructure;
