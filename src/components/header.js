import React from 'react'
import '../styles/index.css'
import '../styles/bulma.min.css'
import YouTube from 'react-youtube'
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
            showcase{
              title
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

        <div className="columns is-centered is-vcentered"> 
          {data.allDataYaml.nodes[0].institutions.map((institution, index) => (
            <div className="column has-text-centered" key={index}>
              <img src={`/images/${institution.logo_path}`} alt={institution.name} style={{ maxHeight: '100px' }} />
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
             <YouTube videoId="i4e1z7lkDRU" opts={{height: '390', width: '640'}} />
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

