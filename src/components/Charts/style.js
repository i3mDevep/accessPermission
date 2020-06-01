import styled from 'styled-components'

export const MyCard = styled.div`
  background-color: ${props => props.color};
  display: flex;
  margin: 0 auto;
  width: 100%;
  min-height: 230px;
  border-radius: 10px;
  padding: 5px;
  justify-content: center;
  align-items: center;
`
export const AreaChart = styled.div`
  height: 220px;
  width: 100%;
`