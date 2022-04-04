import * as React from "react"
import About from "../components/About"
import Hero from "../components/Hero"

import Layout from "../components/layout"
import Projects from "../components/Projects"
import Seo from "../components/seo"
import Team from "../components/Team"

const IndexPage = () => (
  <Layout>
    <Seo title="Nimbus Data Science" />
    <Hero />
    <Projects heading="Nossos Projetos" />
    <About />
    <Team />
  </Layout>
)

export default IndexPage
