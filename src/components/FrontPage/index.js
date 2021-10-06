import React, { Component } from 'react'

import { StaticImage } from "gatsby-plugin-image"
import './Frontpage.scss'

import hero from "./assets/fp.jpeg"
import footerImage from "./assets/frontpageFooter.png"


export default class index extends Component {
  componentDidMount(){
    const body = document.body;
    const content = document.querySelector('.js-content');
    const blocks = document.querySelectorAll('.block');
    
    const updateOffset = () => {
      requestAnimationFrame(updateOffset);
      body.style.setProperty('--y', content.scrollTop);
      updateProps();
    }
    
    const updateProps = () => {  
      let i = -1;
      for(let block of blocks) {
        i += 1;
        let top = blocks[i].getBoundingClientRect().top;
        if(top < window.innerHeight*1.3 && top > window.innerHeight*-1.3) {
          body.style.setProperty(`--yBlock-${i+1}`, top);
        } else {
          body.style.setProperty(`--yBlock-${i+1}`, 0); 
        }
      }
    }
    
    updateProps();
    updateOffset();
  }


  render() {

    return (
      
      <main class="content js-content">
  
  <section class="block section-landing">
    <figure class="item-parallax-media">
      <img src={hero} alt="" />
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
        <h2 class="head-small head-centered">Visibility</h2>
        <p class="copy copy-white">
        One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections.
        </p>
        <p class="copy copy-white">
  The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. "What's happened to me?" he thought.
        </p>
      </div>
    </div>
  </section>
  
  <section class="block section-part">
    <figure class="item-parallax-media">
      <img src="https://images.unsplash.com/photo-1622372738946-62e02505feb3?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb" alt="" />
    </figure>
    <div class="item-parallax-content flex-container">
      <div class="centered-content">
        <h1 class="head-large head-centered">Garden <br/>of Eden</h1>
        <p class="copy copy-white">
          One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin.
        </p>
      </div>
    </div>
  </section>
  
  <section class="block">
    <div class="item-parallax-content flex-container img-grid">
      <figure class="img-gridItem type-right">
        <img src="https://images.unsplash.com/photo-1507089947368-19c1da9775ae?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb" alt="" />
        <figcaption class="img-caption">
          <h2 class="head-small">Free Soul</h2>
          <p class="copy copy-white">
            Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.
          </p>
        </figcaption>
      </figure>
      <figure class="img-gridItem type-left">
        <img src="https://images.unsplash.com/photo-1533044309907-0fa3413da946?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb" alt="" />
        <figcaption class="img-caption">
          <h2 class="head-small">Free Mind</h2>
          <p class="copy copy-white">
            A peep at some distant orb has power to raise and purify our thoughts like a strain of sacred music, or a noble picture, or a passage from the grander poets.
          </p>
        </figcaption>
      </figure>
    </div>
  </section>
  
  <section class="block section-end">
    <figure class="item-parallax-media">
      <img src="https://images.unsplash.com/photo-1567016507665-356928ac6679?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb" alt="" />
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