import styled from "styled-components";

const ClockWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ClockBody = styled.div`
  width: auto;
  height: 70%;
  aspect-ratio: 1 / 1;
  border: 1px solid #000000;
  border-radius: 50%;
  position: relative;

  @media screen and (max-width: 768px) {
    width: 85%;
    height: auto;
  }
`;

const ClockHand = styled.div`
  position: absolute;
  left: calc(50% - 10px);
  bottom: 50%;
  transform-origin: bottom;
  border: 1px solid #000000;
  border-radius: 10px;
  transform: rotate(${({ degree }) => degree}deg);
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

const HourMarkerWrapper = styled(ClockBody)`
  width: 100%;
  height: 100%;
  border: none;
`;

const HourMarkerDiv = styled.div`
  position: absolute;
  top: calc(50% - 25px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  transform: rotate(${({ degree }) => degree}deg);
  transform-origin: center 25px;
`;

const HourMarker = styled.span`
  font-size: 30px;
  padding: 0 30px;
  transform: rotate(${({ degree }) => degree}deg);
`;

export {
  ClockWrapper,
  ClockBody,
  HourHand,
  MinuteHand,
  SecondHand,
  HourMarkerWrapper,
  HourMarkerDiv,
  HourMarker,
};
