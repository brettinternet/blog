import React from "react"

import Layout from "components/layout"
import Section from "components/Section"

const IndexPage = ({ location }) => (
  <Layout
    headProps={{
      title: "",
      keywords: ["blog", "brettinternet", "brettgardiner"],
    }}
    location={location}
  >
    <Section>hi</Section>
  </Layout>
)

export default IndexPage
