import React from "react"
import styled from "styled-components"
import { Button } from "./Button"
import Video from "../assets/videos/video.mp4"

const Hero = () => {
  return (
    <HeroContainer id="top">
      <HeroBg>
        <VideoBg src={Video} type="video/mp4" autoPlay loop muted playsInline />
      </HeroBg>
      <HeroContent>
        <HeroItens>
          <HeroH1>
            <text>Bem-vindo à </text>
            <NimbusText>Nimbus</NimbusText>
            <text>!</text>
          </HeroH1>
          <HeroP>
            Sua startup de data science para previsão de séries temporais
            metereológicas.
          </HeroP>
          {/*<Button primary="true" round="true" big="true" to="/about">
            Saiba mais
  </Button>*/}
        </HeroItens>
      </HeroContent>
    </HeroContainer>
  )
}

export default Hero

const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 0 1rem;
  position: relative;
  margin-top: -65px;
  color: #ffff;

  :before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 2;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.6) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
  }
`
const NimbusText = styled.text`
  background: linear-gradient(to right, #831f8c, #17b9cf);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
`

const HeroBg = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`

const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`

const HeroContent = styled.div`
  z-index: 3;
  height: calc(100vh - 80px);
  max-height: 100%;
  padding: 0rem calc((100vw - 1400px) / 2);
`

const HeroItens = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  max-height: 100%;
  padding: 0;
  color: #fff;
  line-height: 1.1;
  font-weight: bold;
`

const HeroH1 = styled.h1`
  font-size: clamp(2rem, 5.9vw, 4rem);
  margin-bottom: 1.5rem;
  letter-spacing: 1px;
  padding: 0 1rem;
  color: #dfebf7;
`

const HeroP = styled.p`
  font-size: clamp(1.2rem, 2vw, 3rem);
  margin-bottom: 2rem;
  font-weight: 200;
  color: #8b8c94;
`
