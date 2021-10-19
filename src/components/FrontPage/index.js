import React, { Component } from "react"

import { StaticImage } from "gatsby-plugin-image"
import "./Frontpage.scss"

import hero from "./assets/fp.jpeg"
import footerImage from "./assets/frontpageFooter.png"

export default class index extends Component {
  componentDidMount() {
    const body = document.body
    const content = document.querySelector(".js-content")
    const blocks = document.querySelectorAll(".block")

    const height = 100

    const updateOffset = () => {
      requestAnimationFrame(updateOffset)
      body.style.setProperty("--y", content.scrollTop)
      updateProps()
    }

    const updateProps = () => {
      let i = -1
      for (let block of blocks) {
        i += 1
        let top = blocks[i].getBoundingClientRect().top
        if (top < window.innerHeight * 1.3 && top > window.innerHeight * -1.3) {
          body.style.setProperty(`--yBlock-${i + 1}`, top)
        } else {
          body.style.setProperty(`--yBlock-${i + 1}`, 0)
        }
      }
    }

    updateProps()
    updateOffset()
  }

  render() {
    return (
      <main class="content js-content">
        <section class="block section-landing">
          <figure class="item-parallax-media">
            <StaticImage
              className="fullImage"
              src="./assets/fp.jpeg"
              placeholder="blurred"
              alt=""
            />
          </figure>
          <div class="item-parallax-content flex-container">
            <div class="landing-content centered-content">
              <h1 class="head-large">Interiors.</h1>
              <h1 class="head-large">Exteriors.</h1>
              <h1 class="head-large">Design.</h1>
              <h1 class="head-large">Perfection.</h1>
            </div>
          </div>
        </section>

        <section class="block section-intro">
          <div class="item-parallax-content flex-container">
            <div class="centered-content">
              <h2 class="head-large head-centered">About</h2>
              <p class="copy copy-white">
                Altair Avenue is a subsidiary of Veritas Fintech Solutions, a
                full- service interior design firm located in Bangalore area
                since 2008, specializing in both residential and commercial
                design. Whether you need a quick refresh of furniture and paint
                colors, or an extensive whole-house renovation, we can provide
                the expertise to make sure the project runs smoothly and gives
                you the best results possible.
              </p>
              <p class="copy copy-white">
                Our vision is to be a reputable, sustainable, and desirable
                premier luxurious interior design firm of the global market
                place providing the state-of-the- art innovative designs and
                superior quality finishing.
              </p>
            </div>
          </div>
        </section>

        <section class="block section-part">
          <figure class="item-parallax-media">
            <StaticImage
              src="./assets/midImage.jpg"
              placeholder="blurred"
              alt=""
            />
          </figure>
          <div class="item-parallax-content flex-container">
            <div class="centered-content">
              <h1 class="head-large head-centered"></h1>
              <p class="copy copy-white">
                With the finest of skilled workforce and decades of experience
                with us, we create experiences for your needs, and craft the
                finest of handcrafted wood-works, elaborate stone-works, custom
                lightings, smart home solutions, and much more to meet your
                needs.
              </p>
            </div>
          </div>
        </section>

        <section class="block overflow-hide">
          <div class="item-parallax-content flex-container img-grid">
            <figure class="img-gridItem type-right">
              <img
                src="https://images.unsplash.com/photo-1507089947368-19c1da9775ae?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb"
                alt=""
              />
              <figcaption class="img-caption">
                <h2 class="head-small">Our Vision</h2>
                <p class="copy copy-white">
                  To be a reputable, sustainable, and desirable premier
                  luxurious interior design firm of the global market place
                  providing the state-of-the- art innovative designs and
                  superior quality finishing.
                </p>
              </figcaption>
            </figure>
            <figure class="img-gridItem type-left">
              <img
                src="https://images.unsplash.com/photo-1533044309907-0fa3413da946?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb"
                alt=""
              />
              <figcaption class="img-caption">
                <h2 class="head-small">Our Mission</h2>
                <p class="copy copy-white">
                  To create experience and value that combine functionality with
                  high quality and innovation for our customers. Also, to define
                  the most sophisticated and superior standard of quality in
                  every exterior and interior designs.
                </p>
              </figcaption>
            </figure>
          </div>
        </section>

        <section class="block section-end">
          <figure class="item-parallax-media">
            <StaticImage
              src="./assets/lastImage.jpg"
              placeholder="blurred"
              alt=""
            />
          </figure>
          <div class="item-parallax-content flex-container">
            <div class="landing-content centered-content">
              <h1 class="head-large">Let's Get to Work!</h1>
            </div>
          </div>
        </section>

        <section class="custom-properties-ftw">
          <h3 class="head-small head-centered">Yeah Custom Properties</h3>
        </section>
      </main>
    )
  }
}
