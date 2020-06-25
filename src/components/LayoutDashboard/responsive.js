import styled from 'styled-components';

export const Responsive = styled.div`
 padding-left: calc(14vw);
 padding-bottom: 20px;
 @media (max-width: 1280px) {
    padding-left: 200px;
  }
  @media (max-width: 508px) {
    padding-left: 10px;
  }
`;
