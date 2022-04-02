import * as React from "react"
import Header from "./Header"
import { GlobalStyle } from "./styles/GlobalStyles"

const Layout = ({ children }) => {
  return (
    <>
      <Header />

      <main>{children}</main>
      <GlobalStyle />
    </>
  )
}

export default Layout
