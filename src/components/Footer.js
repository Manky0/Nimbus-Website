import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import {
  AiOutlineInstagram,
  AiOutlineMail,
  AiOutlineEnvironment,
} from "react-icons/ai"

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLinksWrapper>
        <FooterDesc>
          <h1>Nimbus</h1>
          <p>
            <AiOutlineEnvironment size={17} style={{ marginRight: 5 }} />
            R. Augusto Corrêa, 01 - Guamá,
          </p>
          <p> Belém - PA, 66075-110</p>
        </FooterDesc>
        <FooterLinkItens>
          <FooterLinkTitle>Mídias Sociais</FooterLinkTitle>
          <FooterLink to="https://www.instagram.com/nimbus_ufpa/">
            <AiOutlineInstagram size={17} style={{ marginRight: 5 }} />
            Instagram
          </FooterLink>
        </FooterLinkItens>
        <FooterLinkItens>
          <FooterLinkTitle>Fale com a gente</FooterLinkTitle>
          <FooterLink>
            <AiOutlineMail size={17} style={{ marginRight: 5 }} />
            nimbuscloud100inc@gmail.com
          </FooterLink>
        </FooterLinkItens>
      </FooterLinksWrapper>
    </FooterContainer>
  )
}

export default Footer

const FooterContainer = styled.div`
  padding: 5rem calc((100vw - 1250px) / 2);

  color: white;
  background: black;
`
const FooterDesc = styled.div`
  padding: 0 2rem;
  margin-bottom: 16px;

  h1 {
    margin-bottom: 3rem;
    color: #831f8c;
  }

  @media screen and (max-width: 400px) {
    padding: 1rem;
  }
`
const FooterLinksWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media screen and (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`
const FooterLinkItens = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem 2rem;

  @media screen and (max-width: 400px) {
    padding: 1rem;
  }
`

const FooterLinkTitle = styled.h2`
  font-size: 14px;
  margin-bottom: 16px;
`

const FooterLink = styled(Link)`
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;
  color: white;

  &:hover {
    color: #831f8c;
    transition: 0.3s ease-out;
  }
`
