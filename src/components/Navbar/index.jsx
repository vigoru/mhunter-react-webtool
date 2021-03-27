import React from 'react'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavButton, NavBtnLink} from './styles';
import { FaBars } from 'react-icons/fa'

const Navbar = ({toggle}) => {
    return (
      <>
        <Nav>
          <NavbarContainer>
              <NavLogo to='/'>MHunter</NavLogo>
              <MobileIcon onClick={toggle}>
                  <FaBars />
              </MobileIcon>
              <NavMenu>
                  <NavItem>
                      <NavLinks to='mapas'>Mapas</NavLinks>
                  </NavItem>
                  <NavItem>
                      <NavLinks to='monsters'>Monsters</NavLinks>
                  </NavItem>
                  <NavItem>
                      <NavLinks to='quests'>Quests</NavLinks>
                  </NavItem>
              </NavMenu>
              <NavButton>
                  <NavBtnLink to='/signin'>Entrar</NavBtnLink>
              </NavButton>
          </NavbarContainer>  
        </Nav>  
      </>
    )
}

export default Navbar
