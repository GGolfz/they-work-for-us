import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export const query = graphql`
  query($slug: String!) {
    votelogYaml(fields: { slug: { eq: $slug } }) {
      id
      title
      vote_date(formatString: "D MMM YY")
    }
  }
`

const VotelogPage = ({ data: { votelogYaml } }) => (
  <Layout
    pageStyles={{
      background: "#ccff66",
    }}
  >
    <SEO title="มติ" />
    <h1
      css={{
        marginTop: 0,
        paddingTop: "6rem",
      }}
    >{`${votelogYaml.title}`}</h1>
    <h3>{`${votelogYaml.vote_date}`}</h3>
  </Layout>
)

export default VotelogPage
