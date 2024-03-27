import React from 'react'
import '../styles/index.css'
import '../styles/bulma.min.css'
import { graphql, useStaticQuery } from 'gatsby'

const People = () => {

  const data = useStaticQuery(graphql`
      query {
         allDataYaml{
          nodes {
            team{
              name
              position
              email
              image_path
            } 
          }
        }
      }
    `)
  return (

  <section className="hero">
    <div className="hero-body">
      <div className="container is-max-desktop">
         
        <h4 className="title is-4 has-text-left"> Equipo de trabajo </h4>

        <div className="columns is-centered is-vcentered"> 
          {data.allDataYaml.nodes[0].team.map((team, _) => (
            <div class="column is-narrow">
              <figure class="image is-128x128">
                <img src={`/images/${team.image_path}`} alt={team.name} class= "is-rounded"/>
              </figure>
              <div class="profile-info">
                <p class="title is-5">{team.name}</p>
                <p class="subtitle is-6"><a href={`mailto:${team.email}`}> Correo </a></p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  </section>
  )
}

export default People 

