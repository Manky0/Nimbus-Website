import * as React from "react"
import Footer from "./Footer"
import Header from "./Header"
import { GlobalStyle } from "./styles/GlobalStyles"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main style={{ minHeight: "60vh" }}>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
