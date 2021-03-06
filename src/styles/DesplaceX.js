import { keyframes , css } from 'styled-components'

const fadeInKeyframes = keyframes`
  from {
    width: 40%;
  }
  to {
    width: 100%;
  }
`
export const DesplaceX = ({ time = '1s' , type = 'ease' } = {}) =>
    css`animation:${time} ${fadeInKeyframes} ${type};`