/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import "./layout.css"

const Material = ({ children }) => {

  const data = useStaticQuery(graphql`
      query {
         allDataYaml{
          nodes {
            materials{
              thumbs_path,  
              title,
              description,
              url 
            } 
          }
        }
      }
    `)
  return (

  <section className="hero">
    <div className="hero-body">
      <div className="container is-max-desktop">
         
        <h4 className="title is-4 has-text-left"> Material</h4>

          {data.allDataYaml.nodes[0].materials.map((materials, _) => (
            <div class="columns is-vcentered">
             <div class="column is-3">
              <figure class="image">
               <img src={`images/${materials.thumbs_path}`} alt="img"/>
              </figure>
             </div>
             <div class="column is-9">
              <p>{materials.description}</p>
              <p><a href={materials.url}>[Enlace]</a></p>
            </div>
          </div>

          ))}

      </div>
    </div>
  </section>
  )
}

export default Material 
