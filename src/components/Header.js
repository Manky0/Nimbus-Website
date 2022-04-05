import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { FaBars } from "react-icons/fa"
import { menuData } from "../data/MenuData"
import { Button } from "./Button"
import scrollTo from "gatsby-plugin-smoothscroll"
import logopng from "../assets/images/logo.png"

const Header = () => {
  return (
    <Nav>
      <NavLogo to="/">
        <img src={logopng} alt="logo-png" />
      </NavLogo>
      <Bars onClick={() => null} />
      <NavMenu>
        {menuData.map((item, index) => (
          <NavLink onClick={() => scrollTo(item.link)} key={index}>
            {item.title}
          </NavLink>
        ))}
      </NavMenu>
      {/*
      <NavBtn>
        <Button primary="true" round="true" to="/contact">
          - - -
        </Button>
      </NavBtn> */}
    </Nav>
  )
}

export default Header

const Nav = styled.nav`
  background: rgba(0, 0, 0, 0.75);
  height: 65px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  z-index: 100;
  position: sticky;
  top: 0;
`

const NavLink = styled.button`
  color: #dfebf7;
  background-color: transparent;
  border-color: transparent;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-weight: 500;
  font-size: 1.07em;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
`

const NavLogo = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-weight: 700;
  font-size: 1.2em;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
`

const Bars = styled(FaBars)`
  display: none;
  color: #fff;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  //margin-right: -48px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`
