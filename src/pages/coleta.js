import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

import AboutColeta from "../components/AboutColeta"
import DisplayColeta from "../components/DisplayColeta"

const IndexPage = () => (
  <Layout>
    <Seo title="Coleta Metereologica" />
    <AboutColeta />
    <DisplayColeta />
  </Layout>
)

export default IndexPage
