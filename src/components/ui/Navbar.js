import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
// import ButtonGroup from "@material-ui/core/ButtonGroup";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
// import Button from "@material-ui/core/Button";
// import AddIcon from "@material-ui/icons/Add";
// import RemoveIcon from "@material-ui/icons/Remove";
const Container=styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    color:white;
    margin:0;
    padding:0;
    background:#212529;
`;
const Cruzcostore=styled.h1`
    padding:20px 10px;
    font-size:medium;
`;
const HomeLink=styled(Link)`
    cursor:pointer;
    color:white;
    text-decoration:none;
    background:#0B0C0C;
    padding:10px;
    &:hover{
        background:#343a40;
        color:#DADADA;
    }
`;
const LikReferences=styled.a`
    cursor:pointer;
    padding:10px;
    &:hover{
        color:#DADADA;
    }
`;
const ContainerNavigation=styled.div`
    padding:0 30px 0 10px;
`;
const Navbar = props => {
    return (
        <Container>
            <Cruzcostore>CRUZCOSTORE</Cruzcostore>
            <ContainerNavigation>
                <HomeLink to="/">Home</HomeLink>
                <LikReferences>Features</LikReferences>
                <LikReferences>Login</LikReferences>
                <LikReferences>Register</LikReferences>
                <Badge color="secondary" badgeContent={10}>
                <ShoppingCartIcon />{" "}
                </Badge>
            </ContainerNavigation>
        </Container>
    );
};


export default Navbar;