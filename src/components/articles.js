import React from 'react'
import '../styles/index.css'
import '../styles/bulma.min.css'
import { graphql, useStaticQuery } from 'gatsby'

const Articles = () => {

  const data = useStaticQuery(graphql`
      query {
         allDataYaml{
          nodes {
            articles{
              APA 
              url 
              image_path
              video_url
            } 
          }
        }
      }
    `)
  return (

  <section className="hero">
    <div className="hero-body">
      <div className="container is-max-desktop">
         
        <h4 className="title is-4 has-text-left"> Artículos publicados</h4>

          {data.allDataYaml.nodes[0].articles.map((article, _) => (
            <div class="columns is-vcentered">
             <div class="column is-3">
              <figure class="image">
               <img src={`images/${article.image_path}`} alt="img"/>
              </figure>
             </div>
             <div class="column is-9">
              <p>{article.APA}</p>
              <p><a href={article.url}>[Enlace]</a>
              {article.video_url && <a href={article.video_url}>[Video]</a>}
              </p>
            </div>
          </div>

          ))}

      </div>
    </div>
  </section>
  )
}

export default Articles 

