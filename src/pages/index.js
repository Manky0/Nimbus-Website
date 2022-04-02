import * as React from "react"
import Hero from "../components/Hero"

import Layout from "../components/layout"
import Projects from "../components/Projects"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Inicio" />
    <Hero />
    <Projects heading="Nossos Projetos" />
  </Layout>
)

export default IndexPage
