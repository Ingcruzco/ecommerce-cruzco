import React from 'react';
import styled from 'styled-components';
const Container=styled.div`
    padding:30px;
    display:flex;
    justify-content:center;
    flex-direction:column;
    align-items:center;
`;

const Hero = () => {
    return (
        <Container>
            <h1>CRUZCOSTORE</h1>
            <p>
                CRUZCOSTORE is a web application designed in ReactJS, with the aim of practicing a little bit.        
            </p>      
        </Container>
    );
};

export default Hero;