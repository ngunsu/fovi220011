/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import People from "./people"
import Articles from "./articles"
import Material from "./material"
import "./layout.css"

const Layout = ({ children }) => {
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
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />

      <div className="container is-max-desktop">
        <div style={{height: '2px', backgroundColor: 'lightgrey', width: '100%'}}></div>
      </div>

      <People/>

      <div className="container is-max-desktop">
        <div style={{height: '2px', backgroundColor: 'lightgrey', width: '100%'}}></div>
      </div>

      <Articles/>

      <div className="container is-max-desktop">
        <div style={{height: '2px', backgroundColor: 'lightgrey', width: '100%'}}></div>
      </div>

      <Material/>

    </>
  )
}

export default Layout
