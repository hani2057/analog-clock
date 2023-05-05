import styled, { keyframes } from "styled-components";

const rotate = (degree) => keyframes`
    from {
      -webkit-transform: rotate(${degree}deg);
      -o-transform: rotate(${degree}deg);
      transform: rotate(${degree}deg);
    }
    to {
      -webkit-transform: rotate(${degree + 360}deg);
      -o-transform: rotate(${degree + 360}deg);
      transform: rotate(${degree + 360}deg);
    }
`;

const ClockWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ClockBody = styled.div`
  height: 70%;
  aspect-ratio: 1 / 1;
  border: 1px solid #000000;
  border-radius: 50%;
  position: relative;
`;

const ClockHand = styled.div`
  position: absolute;
  left: calc(50% - 10px);
  bottom: 50%;
  transform-origin: bottom;
  border: 1px solid #000000;
  border-radius: 10px;
  transform: rotate(${({ degree }) => degree}deg);
  animation: ${({ degree }) => rotate(degree)} infinite;
`;

const HourHand = styled(ClockHand)`
  width: 20px;
  height: 20%;
  background-color: #ffffff;
  z-index: 1;
  animation-duration: 43200s;
`;

const MinuteHand = styled(ClockHand)`
  width: 20px;
  height: 35%;
  background-color: #ffffff;
  z-index: 2;
  animation-duration: 3600s;
`;

const SecondHand = styled(ClockHand)`
  width: 3px;
  height: 40%;
  background-color: #000000;
  left: calc(50% - 1.5px);
  animation-duration: 60s;
  animation-timing-function: steps(60, start);
`;

export { ClockWrapper, ClockBody, HourHand, MinuteHand, SecondHand };
