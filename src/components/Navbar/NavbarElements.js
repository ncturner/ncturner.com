import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';

export const Nav = styled.nav`
    background: #000;
    height: 8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: stickty;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 6rem;
    z-index: 1;
    width: 100%;
    padding: 0 2rem;
    max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 2.5rem;
    display: flex;
    align-items: center;
    font-weight: 400;
    text-decoration: none;

    img {
        height: 100%;
    }
`;


export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        color: #fff;
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        height: 5rem;
        margin: 0 2rem 0 0; 
    }
`;

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavItem = styled.li`
    margin: 0 2rem 0 0;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
`;

export const NavLinks = styled(LinkR)`
    color: #fff;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &:hover {
        color: #e75a58;
        transition: 0.2s ease-in-out;
    }

    &.active {
        border-bottom: 3px solid #e75a58;
    }
`;