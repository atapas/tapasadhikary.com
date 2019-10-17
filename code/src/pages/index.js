import React from "react";
import SEO from "../components/seo";

import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/index.scss";

import Header from '../components/header';
import Featured from '../components/featured';
import Social from '../components/social';


const IndexPage = () => {
  const primaryFeatureData = {
    'title': 'Blogger',
    'description': 'Technical Blogging is my Passion. I hope you will find something worth looking at or reading. My blog page is just a click away!',
    'link': 'https://blog.greenroots.info',
    'linkText': 'See what I blog'
  }
  const secondaryFeatureData = {
    'title': 'Mentor',
    'description': "As the saying goes, 'The greatest mentor is who Inspires!'. It is also an avenue to gain knowledge. Mentoring is Fun. ",
    'link': 'https://mentorcruise.com/mentor/TapasAdhikary/',
    'linkText': 'See what I mentor'
  }

  return(
  <>
    <SEO title="Tapas Adhikary" />
    <div className="container">
      <Header />
      <main>
        <article>
          <div className="row">
            <Featured primary = { true } data = { primaryFeatureData }></Featured>
            <Featured primary = { false} data = { secondaryFeatureData }></Featured>
          </div>
          <section className="section-social spacer-in-top-xxl">
            <Social />
          </section>
          <section className="section-projects spacer-in-top-xxl">
            <h2 className="section-title section-title--underlined">Experiments</h2>
            <div className="row list-project">
              <div className="col-md-6 col-lg-4 list-project__item">
                <a href="#" className="project__thumb">
                  <img src="https://www.thoughtco.com/thmb/mvmMSSC5cnBtqNmQ_hfFSTD7yew=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/css-code-in-text-editor--web-page-internet-technology-862672426-5c8455ddc9e77c0001a67650.jpg" alt="Thumbnail of Project Name" />
                </a>
                <h3 className="project__title"><a href="#">Project Name</a></h3>
                <p className="project__desc">Ut at pharetra mauris, eget cursus mauris. Pellentesque aucibus elit in max.</p>
              </div>
              <div className="col-md-6 col-lg-4 list-project__item">
                <a href="#" className="project__thumb">
                <img src="https://www.thoughtco.com/thmb/mvmMSSC5cnBtqNmQ_hfFSTD7yew=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/css-code-in-text-editor--web-page-internet-technology-862672426-5c8455ddc9e77c0001a67650.jpg" alt="Thumbnail of Project Name" />
                </a>
                <h3 className="project__title"><a href="#">Project Name</a></h3>
                <p className="project__desc">Ut at pharetra mauris, eget cursus mauris. Pellentesque aucibus elit in max.</p>
              </div>
              <div className="col-md-6 col-lg-4 list-project__item">
                <a href="#" className="project__thumb">
                <img src="https://www.thoughtco.com/thmb/mvmMSSC5cnBtqNmQ_hfFSTD7yew=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/css-code-in-text-editor--web-page-internet-technology-862672426-5c8455ddc9e77c0001a67650.jpg" alt="Thumbnail of Project Name" />
                </a>
                <h3 className="project__title"><a href="#">Project Name</a></h3>
                <p className="project__desc">Ut at pharetra mauris, eget cursus mauris. Pellentesque aucibus elit in max.</p>
              </div>
              <div className="col-md-6 col-lg-4 list-project__item">
                <a href="#" className="project__thumb">
                <img src="https://www.thoughtco.com/thmb/mvmMSSC5cnBtqNmQ_hfFSTD7yew=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/css-code-in-text-editor--web-page-internet-technology-862672426-5c8455ddc9e77c0001a67650.jpg" alt="Thumbnail of Project Name" />
                </a>
                <h3 className="project__title"><a href="#">Project Name</a></h3>
                <p className="project__desc">Ut at pharetra mauris, eget cursus mauris. Pellentesque aucibus elit in max.</p>
              </div>
            </div>
          </section>
        </article>
      </main>
    </div>
  </>
  )
 
}

export default IndexPage
