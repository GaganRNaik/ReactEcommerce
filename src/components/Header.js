import styled from "styled-components";
import React from 'react'
import { NavLink } from "react-router-dom";
import Nav from "./Nav";

const Header = () => {
  return (
    <MainHeder>
      <NavLink to='/'>
        <img src="./images/logo.png" alt="my logo"></img>
      </NavLink>
      <Nav></Nav>
    </MainHeder>
  );
}

const MainHeder = styled.header`
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  .logo {
    height: 5rem;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
  }
`;

export default Header