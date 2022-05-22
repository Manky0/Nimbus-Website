import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { Button } from "./Button"
import { WiDayRainWind } from "react-icons/wi"
import { BsClockHistory } from "react-icons/bs"

const Projects = ({ heading }) => {
  const data = useStaticQuery(graphql`
    query ProjectsQuery {
      allProjectsJson {
        edges {
          node {
            alt
            button
            name
            to
            img {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  `)

  function getProjects(data) {
    const projectsArray = []
    data.allProjectsJson.edges.forEach((item, index) => {
      projectsArray.push(
        <ProjectCard key={index}>
          <ProjectImg
            image={item.node.img.childImageSharp.gatsbyImageData}
            alt={item.node.alt}
          />
          <ProjectInfo>
            <TextWrap>
              {item.node.alt === "Coming Soon" ? (
                <BsClockHistory size={21} />
              ) : (
                <WiDayRainWind size={23} />
              )}
              <ProjectTitle>{item.node.name}</ProjectTitle>
            </TextWrap>
            <Button
              to={item.node.to}
              primary="true"
              round="true"
              css={`
                position: absolute;
                top: 420px;
                @media screen and (max-width: 868px) {
                  top: 240px;
                }
                font-size: 14px;
              `}
            >
              {item.node.button}
            </Button>
          </ProjectInfo>
        </ProjectCard>
      )
    })
    return projectsArray
  }

  return (
    <>
      <GradientContainerTop />
      <ProjectsContainer id="projects">
        <ProjectsHeading>{heading}</ProjectsHeading>
        <ProjectWrapper>{getProjects(data)}</ProjectWrapper>
      </ProjectsContainer>
    </>
  )
}

export default Projects

const ProjectsContainer = styled.div`
  min-height: 60vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  color: #fff;
`
const GradientContainerTop = styled.div`
  height: 60px;
  margin-top: -15px;
  //padding: 5rem calc((100vw - 1300px) / 2);
  background: linear-gradient(rgba(0, 0, 0, 1), transparent);
`

const ProjectsHeading = styled.div`
  font-size: clamp(1.5rem, 5vw, 2.3rem);
  font-weight: bold;
  text-align: center;
  margin-bottom: 5rem;
  color: #000;
`

const ProjectWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 30px;
  justify-items: center;
  padding: 0 2rem;

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 868px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
  }
`

const ProjectCard = styled.div`
  //line-height: 2;
  width: 100%;
  height: 500px;
  position: relative;
  border-radius: 10px;
  transition: 0.2s ease;

  @media screen and (max-width: 868px) {
    height: 300px;
  }
`

const ProjectImg = styled(GatsbyImage)`
  height: 100%;
  max-width: 100%;
  position: relative;
  border-radius: 10px;
  filter: brightness(70%);
  transition: 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    filter: brightness(100%);
  }
`

const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 2rem;

  @media screen and (max-width: 868px) {
    padding: 0.8rem;
  }

  @media screen and (max-width: 280px) {
    padding: 0 1rem;
  }
`

const TextWrap = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 375px;

  @media screen and (max-width: 868px) {
    top: 200px;
    margin-top: -8px;
  }
`

const ProjectTitle = styled.div`
  font-weight: 400;
  font-size: 1rem;
  margin-left: 0.5rem;
  color: white;

  @media screen and (max-width: 400px) {
    font-size: 0.7rem;
  }
`
