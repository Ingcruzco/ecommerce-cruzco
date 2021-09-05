import React, { PropTypes } from 'react';
import styled, {keyframes} from 'styled-components';

const Rotate=keyframes`
    0% { 
      transform: perspective(120px) rotateX(0deg) rotateY(0deg);
      -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg) 
    } 50% { 
      transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
      -webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg) 
    } 100% { 
      transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
      -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
    }

    &::-webkit-keyframes sk-rotateplane {
        0% { -webkit-transform: perspective(120px) }
        50% { -webkit-transform: perspective(120px) rotateY(180deg) }
        100% { -webkit-transform: perspective(120px) rotateY(180deg)  rotateX(180deg) }
      }
`;


const Spin=styled.div`

    width: 40px;
    height: 40px;
    background-color: #333;
    margin: 100px auto;
    -webkit-animation: sk-rotateplane 1.2s infinite ease-in-out;
    animation: ${Rotate} 1.2s infinite ease-in-out;
   
`;

const Container=styled.div`
    height: 80vh;
    width: 100%;
      margin:0;
      padding:0;
      display:flex;
      align-items:center;
      justify-content:center;
      flex-direction:column;
`;

const Spinner = props => {
    return (
        <Container>
            <Spin/>
            <spam>Loading...</spam>
        </Container>
        
    );
};

export default Spinner;