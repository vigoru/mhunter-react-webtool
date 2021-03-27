import React from 'react'

import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SideBtnWrap, SidebarLink, SidebarRoute, SidebarMenu } from './styles';

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="mapas" onClick={toggle}>Mapas</SidebarLink>
          <SidebarLink to="monsters" onClick={toggle}>Monsters</SidebarLink>
          <SidebarLink to="quests" onClick={toggle}>Quests</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to='/singin' onClick={toggle}>Sign In</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
