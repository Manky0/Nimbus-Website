import * as React from "react"
import Hero from "../components/Hero"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"
import Projects from "../components/Projects"
import Seo from "../components/seo"

;<Helmet>
  <html lang="pt" />
  <title>Nimbus</title>
  <meta
    name="google-site-verification"
    content="NOpuQRFi04-45ldQgHtOOz3JmJtmxD3k3-UdKUhYs4w"
  />
</Helmet>

const IndexPage = () => (
  <Layout>
    <Seo title="Inicio" />
    <Hero />
    <Projects heading="Nossos Projetos" />
  </Layout>
)

export default IndexPage
