import { keyframes , css } from 'styled-components'

const fadeInKeyframes = keyframes`
  from {
   left: -120px;
  }
  to {
    left: 0px;
  }
`
export const Traslation = ({ time = '1s' , type = 'ease' } = {}) =>
    css`animation:${time} ${fadeInKeyframes} ${type};`