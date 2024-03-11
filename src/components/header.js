import React from 'react'
import '../styles/index.css'
import '../styles/bulma.min.css'
import universityLogo1 from '../static/imgs/logo_uach.png' // Adjust paths
import universityLogo2 from '../static/imgs/logo_uss.png' // Adjust paths
import { graphql, useStaticQuery } from 'gatsby'

const Header = () => {

  const data = useStaticQuery(graphql`
      query {
         allDataYaml{ # Optional: rename if needed
          nodes {
            title
          }
        }
      }
    `)

  return (

  <section className="hero">
    <div className="hero-body">
       <div className="container is-max-desktop">

       <div className="container is-max-desktop">
         {/* Logo Container */}
        <div className="columns is-centered is-vcentered"> 
          <div className="column has-text-centered">
            <img src={universityLogo1} alt="University 1 Logo" style={{ maxHeight: '100px' }} />
          </div>
          <div className="column has-text-centered">
            <img src={universityLogo2} alt="University 2 Logo" style={{ maxHeight: '100px' }} />
          </div>
        </div>
        </div>

        <div className="conumns is-centered">
          <div className="column has-text-centered">
            <h1 className="title is-1 publication-title">{data.allDataYaml.nodes[0].title}</h1>
            {/* ... Other header content ... */}
          </div>
        </div>
      </div>
    </div>
  </section>
)
}

export default Header

