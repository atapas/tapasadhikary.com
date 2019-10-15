import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import HeroImage from "../images/photo-tapas2.png"
import SEO from "../components/seo"

import 'bootstrap/dist/css/bootstrap.min.css';

import "../styles/index.scss";

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <div className="container">
      <header className="page-header">
        <div className="section-header">
          <h1 className="section-title section-title--underlined text-left"><strong>Tapas</strong> Adhikary</h1>
          <p className="section-desc">Ut at pharetra mauris, eget cursus mauris. Pellentesque faucibus elit in maximus tincidunt  nunc.</p>
        </div>
        <img src={HeroImage} className="img-hero"/>
        <blockquote className="hero-quote"><em>Sharing</em> <span className="midline">is the only way to</span> <em className="emp--lg">learn</em></blockquote>
      </header>
      <main>
        <article>
          <div className="row">
            <section className="col-md-6 section-featured section-featured--primary">
              <h2 className="section-title">Blogger</h2>
              <p className="section-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vestibulum accumsan purus at rutrum.</p>
              <a href="#" className="btn btn-raised btn-raised--brand">See what I wrote</a>
            </section>
            <section className="col-md-6 section-featured section-featured--secondary">
              <h2 className="section-title">Mentor</h2>
              <p className="section-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vestibulum accumsan purus at rutrum.</p>
              <a href="#" className="btn btn-raised btn-raised--default">See what I mentor</a>
            </section>
          </div>
          <section className="section-social spacer-in-top-xxl">
            <ul className="list-social">
              <li><a href="#"><i className="icon icon-twitter"></i><span className="sr-only">read my tweets</span></a></li>
              <li><a href="#"><i className="icon icon-facebook"></i><span className="sr-only">see facebook</span></a></li>
              <li><a href="#"><i className="icon icon-linkedin"></i><span className="sr-only">check linkedin</span></a></li>
              <li><a href="#"><i className="icon icon-instagram"></i><span className="sr-only">view instagram</span></a></li>
              <li><a href="#"><i className="icon icon-email"></i><span className="sr-only">send email</span></a></li>
            </ul>
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
    <Link to="/page-2/">Go to page 2</Link>
    </div>
  </>
 
)

export default IndexPage
