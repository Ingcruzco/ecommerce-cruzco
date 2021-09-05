import React  from 'react';
import styled from 'styled-components';

const Container=styled.div`
    margin:10px;
    cursor:pointer;
    display:flex;
    align-items:center;
    justify-content:center;
    // border-radius: 20px;  
    box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.377);
`;

const Card = props => {
    return (
        <Container>
            {props.children}
        </Container>
    );
};

export default Card;