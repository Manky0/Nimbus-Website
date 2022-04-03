import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404 Não encontrado" />
    <h1>Erro 404: Página não encontrada</h1>
    <p>Parece que esta página não existe, tente acessar de outra maneira ;(</p>
  </Layout>
)

export default NotFoundPage
