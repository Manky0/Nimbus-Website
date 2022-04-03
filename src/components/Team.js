import React from "react"
import styled from "styled-components"

const Team = () => {
  return (
    <TeamContainer id="team">
      <ContentWrapper>
        <ColumnOne>
          <Person>
            <PersonImage src="https://github.com/npm.png" />
            <PersonInfo>
              <h4>Aizo Oliveira</h4>
              <p>Marketing</p>
            </PersonInfo>
          </Person>
          <Person>
            <PersonImage src="https://github.com/GLNobre.png" />
            <PersonInfo>
              <h4>Gabriel Nobre</h4>
              <p>CEO</p>
            </PersonInfo>
          </Person>
          <Person>
            <PersonImage src="https://github.com/npm.png" />
            <PersonInfo>
              <h4>Luiz Eduardo</h4>
              <p>Projetista</p>
            </PersonInfo>
          </Person>
          <Person>
            <PersonImage src="https://github.com/ASTRAson.png" />
            <PersonInfo>
              <h4>Ryan Carlos</h4>
              <p>Programador</p>
            </PersonInfo>
          </Person>
          <Person>
            <PersonImage src="https://github.com/Manky0.png" />
            <PersonInfo>
              <h4>Valdinei Rodrigues</h4>
              <p>Programador</p>
            </PersonInfo>
          </Person>
        </ColumnOne>
        <ColumnTwo>
          <TopLine>Nossa equipe</TopLine>
          <Description>
            A Nimbus é formada por uma equipe apaixonada por Data Science,
            inovadora e sempre disposta a compartilhar conhecimento.{" "}
            <b>
              Somos estudantes de Engenharia da Computação na Universidade
              Federal do Pará
            </b>{" "}
            com uma só missão: produzir tecnologia que melhore a vida de todos.
          </Description>
        </ColumnTwo>
      </ContentWrapper>
    </TeamContainer>
  )
}

export default Team

const TeamContainer = styled.div`
  width: 100%;
  //background: #f5f5f3;
  color: #000;
  padding: 5rem calc((100vw - 1500px) / 2);
  height: 100%;
`
const ColumnOne = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 1rem;
  row-gap: 1rem;
  margin-bottom: 1rem;
`
const ColumnTwo = styled.div`
  //margin-left: 1rem;
`

const PersonInfo = styled.div`
  display: grid;
`

const Person = styled.div`
  display: grid;
  grid-template-columns: 90px 1fr;

  h4 {
    font-style: italic;
  }

  p {
    @media screen and (max-width: 450px) {
      font-size: 12px;
    }
    color: #3b3b3b;
  }
`

const PersonImage = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 100%;
  border: 3px solid black;
`

const TopLine = styled.p`
  text-align: start;
  //padding-right: 2rem;
  margin-bottom: 2.5rem;
  font-size: clamp(1.5rem, 5vw, 2.3rem);
  font-weight: bold;
`
const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0 2rem;
  margin-bottom: 50px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const Description = styled.p`
  color: #3b3b3b;
`