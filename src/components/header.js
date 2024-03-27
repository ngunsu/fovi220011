import React from 'react'
import '../styles/index.css'
import '../styles/bulma.min.css'
import { graphql, useStaticQuery } from 'gatsby'

const Header = () => {

  const data = useStaticQuery(graphql`
      query {
         allDataYaml{
          nodes {
            title
            abstract
            institutions {
              name
              logo_path
            }
            showcase_title
            showcase_url
          }
        }
      }
    `)
  return (

  <section className="hero">
    <div className="hero-body">
      <div className="container is-max-desktop">

        <div className="columns is-centered is-vcentered"> 
          {data.allDataYaml.nodes[0].institutions.map((institution, index) => (
            <div className="column has-text-centered" key={index}>
              <img src={`images/${institution.logo_path}`} alt={institution.name} style={{ maxHeight: '100px' }} />
            </div>
          ))}

        </div>

        <div className="columns is-centered">
          <div className="column has-text-centered">
            <h1 className="title is-1 publication-title">{data.allDataYaml.nodes[0].title}</h1>
          </div>
        </div>


       <div className="columns is-centered">
          <div className="column has-text-centered">
              <iframe frameborder="0" allowfullscreen="" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" title="showcase" width="640" height="390" src={`${data.allDataYaml.nodes[0].showcase_url}?enablejsapi=1&amp;origin=http%3A%2F%2Flocalhost%3A8888&amp;widgetid=1" id="widget2`}></iframe>
          </div>
        </div>

       <div className="columns is-centered">
          <div className="column has-text-justified">
            {data.allDataYaml.nodes[0].abstract}
          </div>
        </div>

      </div>
    </div>
  </section>
  )
}

export default Header

