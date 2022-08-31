import React from 'react';
import { 
  Nav, 
  NavbarContainer, 
  NavLogo, 
  MobileIcon, 
  NavMenu, 
  NavItem, 
  NavLinks 
} from './NavbarElements';
import {FaBars} from 'react-icons/fa';
import Logo from '../../assets/imgs/nct_logo_white.svg';




const Navbar = ( { toggle } ) => {
  return (
    <>
        <Nav>
            <NavbarContainer>
                <NavLogo to="/">
                  <img src={Logo} alt='logo' />
                </NavLogo>
                <MobileIcon onClick={toggle}>
                  <FaBars />
                </MobileIcon>
                <NavMenu>
                  <NavItem>
                    <NavLinks to="/">
                      Home
                    </NavLinks>
                  </NavItem>
                  <NavItem>
                    <NavLinks to="work">
                      Recent Work
                    </NavLinks>
                  </NavItem>
                  <NavItem>
                    <NavLinks to="about">
                      About
                    </NavLinks>
                  </NavItem>
                </NavMenu>
            </NavbarContainer>
        </Nav>
    </>
  )
}

export default Navbar;

