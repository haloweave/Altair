import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const ElementsPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO
        title="Elements"
      />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
        <h2 id="this-is-a-section">Contact Us</h2>
          <h3>
          +91 7348849177 | +91 7348849077
          </h3>
          <h3>
          business@altairavenue.com
            </h3>
          <h3>
          WhatsApp / Instagram
          </h3>

          <h2 id="forms">Forms</h2>
          <form method="post" action="#">
            <div className="row gtr-uniform">
              <div className="col-6 col-12-xsmall">
                <input
                  type="text"
                  name="demo-name"
                  id="demo-name"
                  defaultValue
                  placeholder="Name"
                />
              </div>
              <div className="col-6 col-12-xsmall">
                <input
                  type="email"
                  name="demo-email"
                  id="demo-email"
                  defaultValue
                  placeholder="Email"
                />
              </div>
     
              
              
              {/* Break */}
              <div className="col-6 col-12-small">
                <input
                  type="checkbox"
                  id="demo-human"
                  name="demo-human"
                  defaultChecked
                />
                <label htmlFor="demo-human">I am a human</label>
              </div>
              {/* Break */}
              <div className="col-12">
                <textarea
                  name="demo-message"
                  id="demo-message"
                  placeholder="Enter your message"
                  rows={6}
                  defaultValue={""}
                />
              </div>
              {/* Break */}
              <div className="col-12">
                <ul className="actions">
                  <li>
                    <input
                      type="submit"
                      defaultValue="Send Message"
                      className="primary"
                    />
                  </li>
                  <li>
                    <input type="reset" defaultValue="Reset" />
                  </li>
                </ul>
              </div>
            </div>
            
          </form>
         
            </div>
      </article>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    smallPic: file(
      relativePath: { eq: "fabio-comparelli-696506-unsplash.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    medPic: file(relativePath: { eq: "sophia-valkova-30139-unsplash.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    largePic: file(
      relativePath: { eq: "vladimir-malyutin-98174-unsplash.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <ElementsPage location={props.location} data={data} {...props} />
    )}
  />
)
