import styled from "styled-components"
import { Link } from "gatsby"

export const Button = styled(Link)`
  background: ${({ primary }) => (primary ? "#831F8C" : "#16417C")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "16px 40px" : "10px 16px")};
  color: #fff;
  font-size: ${({ big }) => (big ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s !important;
  border-radius: ${({ round }) => (round ? "23px" : "none")};
  min-width: 100px;
  text-align: center;

  @media screen and (max-width: 400px) {
    min-width: 50px;
  }

  &:hover {
    background: ${({ primary }) => (primary ? "#077BF1" : "#F26A2E")};
    transform: translateY(-2px);
  }
`
