import { keyframes, css } from "styled-components";

const fadeInKeyframes = keyframes`
  from {
    top:1000;
  }
  to {
    top: -1000px;
  }
`;
export const HiddenToolbox = ({ time = "1s", type = "ease" } = {}) =>
  css`
    animation: ${time} ${fadeInKeyframes} ${type};
    animation-fill-mode: forwards;
  `;
