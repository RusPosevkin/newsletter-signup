import { ALERT_ANIMATION_DELAY } from "@/configs";
import styled, { keyframes } from "styled-components";

export const AlertContainer = styled.div`
  /* display: none; */
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 10;
  background-color: ${({ theme }) => theme.colors.alert};
`;

const fadeIn = keyframes`
  from {
    transform: scale(.25);
    opacity: 0;
  }

  to {
    transform: scale(1);
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    transform: scale(1);
    opacity: 1;
  }

  to {
    transform: scale(.25);
    opacity: 0;
  }
`;

const animationTimeValue = `${ALERT_ANIMATION_DELAY / 1000}s`;

export const Fade = styled.div<{ 'data-hidden'?: boolean; }>`
  position: fixed;
  top: 150px;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  padding: 10;
  background-color: ${({ theme }) => theme.colors.alert};
  visibility: ${props => props['data-hidden'] ? 'hidden' : 'visible'};
  animation: ${props => props['data-hidden'] ? fadeOut : fadeIn} ${animationTimeValue} linear;
  transition: visibility ${animationTimeValue} linear;
`;
