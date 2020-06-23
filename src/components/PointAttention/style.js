import styled from 'styled-components';
import { Card } from 'react-bootstrap';

// eslint-disable-next-line import/prefer-default-export
export const CustomeCard = styled(Card)`
    padding: 1rem 1rem;
    color: #303f9f;
    width: 30%;
    min-width: 300px;
    margin:10px;
    text-align: justify;
    border-radius: .25rem;
    -webkit-box-shadow: 0 5px 11px 0 rgba(0,0,0,0.18), 0 4px 15px 0 rgba(0,0,0,0.15);
    position: relative;
    overflow: hidden;
    cursor: default;
    z-index: 2;
    & div {
        text-align: center;
        color: #ffff;
        background: linear-gradient(40deg, #111d5e, #303f9f);
    }
    & ul {
        padding: 5px;
    }
    & li {
        margin-left: 2px;
    }
    & footer {
        text-align: right;
    }
}`
