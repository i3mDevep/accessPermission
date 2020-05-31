import styled from 'styled-components'

export const ContainerTable = styled.div`
  overflow: auto;
  padding: 30px;
  width:40%;
  max-height: 500px;
  @media (max-width: 1200px) {
    width: 50%;
  }
  @media (max-width: 1000px) {
    width: 100%;
  }
`
export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: white;
  text-align: left;
  border-collapse:collapse;
  font-size: 13px;

  & tbody {
      background-color: white;
  }
  & td,th {
    padding: 20px;
    border-bottom: 2px solid #f0f0f0;
  }
  & tr:hover td{
      background-color: #fdc317;
      color: white;
  }
`
export const Thead = styled.thead`
  background-color:#0b4779;
  color: white;
`