import styled from "styled-components";

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
  transform: rotate(${(props) => props.degree}deg);
`;

const HourHand = styled(ClockHand)`
  width: 20px;
  height: 20%;
  background-color: #ffffff;
  z-index: 1;
`;

const MinuteHand = styled(ClockHand)`
  width: 20px;
  height: 35%;
  background-color: #ffffff;
  z-index: 2;
`;

const SecondHand = styled(ClockHand)`
  width: 3px;
  height: 40%;
  background-color: #000000;
  left: calc(50% - 1.5px);
`;

export { ClockWrapper, ClockBody, HourHand, MinuteHand, SecondHand };