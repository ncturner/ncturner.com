import React from 'react';
import { TopbarContainer, Icon, CloseIcon, TopbarWrapper, TopbarMenu, TopbarLink} from './TopbarElements';

const Topbar = ( { isOpen, toggle } ) => {
  return (
    <TopbarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <TopbarWrapper>
            <TopbarMenu>
                <TopbarLink to="/" onClick={toggle}>
                    Home
                </TopbarLink>
                <TopbarLink to="work" onClick={toggle}>
                    Recent Work
                </TopbarLink>
                <TopbarLink to="about" onClick={toggle}>
                    About
                </TopbarLink>
            </TopbarMenu>
        </TopbarWrapper>
    </TopbarContainer>
  )
}

export default Topbar