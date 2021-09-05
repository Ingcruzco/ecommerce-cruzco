import React, { useContext } from 'react';
import { TaskContext } from '../../context/provider/ProductsContext';
import styled from 'styled-components';
import Card from '../../components/ui/Card';
import Hero from '../../components/ui/Hero';
import Spinner from '../../components/ui/Spinner';


const Container=styled.div`
    display:grid;
    row-gap: 20px;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: minmax(100px, auto);
`;


const Home = props => {
    const {isLoading,products}=useContext(TaskContext);
    if(isLoading){
        return <Spinner>Loading...</Spinner>
    }
    return (
        <div>
            <Hero/>
            <Container>
                { 
                    products.map((product,index)=>{
                        return (<Card key={index}>{product.name}</Card>);
                    })
                }    
            </Container>
        </div>
    );
};

export default Home;