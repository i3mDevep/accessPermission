import { keyframes , css } from 'styled-components'

const fadeInKeyframes = keyframes`
  from {
    width: 200px;
  }
  to {
    width: 100px;
  }
`
export const DesplaceX = ({ time = '1s' , type = 'ease' } = {}) =>
    css`animation:${time} ${fadeInKeyframes} ${type};`