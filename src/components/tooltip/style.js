import styled, { css } from "styled-components";

const TooltipWrapper = styled.div`
  ${({ left, top }) => css`
    position: absolute;
    left: ${left}px;
    top: ${top}px;
    width: 150px;
    height: 50px;
    background-color: #ffffff;
    border: 1px solid #000000;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    gap: 20px;
    z-index: 10;
  `}
`;

export { TooltipWrapper };
