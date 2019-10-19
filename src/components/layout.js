/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header/index"
import "./layout.css"

const Layout = ({ children, pageStyles, mainStyles }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          paddingTop: 0,
          minHeight: "calc(100vh - 80px)",
          ...pageStyles,
        }}
      >
        <main
          style={{
            // maxWidth: 960,
            margin: "0 auto",
            padding: 0,
            ...mainStyles,
          }}
        >
          {children}
        </main>
        <footer
          css={{
            padding: "2rem",
            background: "#222222",
            color: "#ffffff",
            a: {
              color: "#ffffff",
            },
          }}
        >
          © {new Date().getFullYear()}
          {` `}
          <a href="https://elect.in.th">ELECT</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
