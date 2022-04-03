import React from "react"
import styled from "styled-components"
import atomImage from "../assets/images/atom.png"
import headImage from "../assets/images/head.png"
import Video from "../assets/videos/video-2.mp4"

const About = () => {
  return (
    <AboutContainer id="about">
      <TopLine>Sobre a Nimbus</TopLine>
      <Description>Somos mais que uma agência de previsão temporal</Description>
      <ContentWrapper>
        <ColumnOne>
          <Abouts>
            <img src={headImage} height="50px" />
            <h3>Pesquisa</h3>
            <p>
              Nosso trabalho tem como foco desenvolver a solução de problemas
              utilizando ciência de dados, e apontar caminhos para novas
              estratégias.
            </p>
          </Abouts>
          <Abouts>
            <img src={atomImage} height="50px" />
            <h3>Desenvolvimento</h3>
            <p>
              Projetamos, construimos e remodelamos produtos por meio de dados
              ou ferramentas internas. E tentamos nos conectar com instituições
              de ensino e pesquisa para o aperfeiçoamento de nossas tecnologias.
            </p>
          </Abouts>
        </ColumnOne>
        <VideoBg src={Video} type="video/mp4" autoPlay loop muted playsInline />
      </ContentWrapper>
    </AboutContainer>
  )
}

export default About

const AboutContainer = styled.div`
  width: 100%;
  background: #f5f5f3;
  color: #000;
  padding: 5rem calc((100vw - 1300px) / 2);
  height: 100%;
`

const TopLine = styled.p`
  color: #831f8c;
  font-size: 1rem;
  padding-left: 2rem;
  margin-bottom: 0.75;
`

const Description = styled.p`
  text-align: start;
  padding-left: 2rem;
  margin-bottom: 2.5rem;
  font-size: clamp(1.5rem, 5vw, 2rem);
  font-weight: bold;
`

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0 2rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const ColumnOne = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
`

const Abouts = styled.div`
  padding-top: 1rem;
  padding-right: 2rem;

  img {
    margin-top: 1rem;
  }

  h3 {
    margin-bottom: 1rem;
    font-size: 1.5rem;
    font-style: italic;
  }

  p {
    color: #3b3b3b;
  }
`

const CoumnTwo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 2rem;
  grid-gap: 15px;

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`

const Text = styled.div`
  border-radius: 15px;
  background: #831f8c;
  height: 100%;
  padding: 1rem;
  color: white;
`
const VideoBg = styled.video`
  margin-top: 2rem;
  height: 100%;
  width: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  border-radius: 15px;
`
