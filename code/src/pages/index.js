import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import 'bootstrap/dist/css/bootstrap.min.css';

import "../styles/index.scss";

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <div className="container">
      <header className="row">
        <div className="col-md-6">
          <h1><strong>Tapas</strong> Adhikary</h1>
          <p className="text-lead">Ut at pharetra mauris, eget cursus mauris. Pellentesque faucibus elit in maximus tincidunt  nunc.</p>
        </div>
        <div className="col-md-6">
          <blockquote><em>Sharing</em> is the only way to <em>learn</em></blockquote>
        </div>
      </header>
      <main>
        <article>
          <div className="row">
            <section className="col-md-6"></section>
            <section className="col-md-6"></section>
          </div>
          <section className="list-social">
            <ul>
              <li><a href="#"></a></li>
            </ul>
          </section>
          <section className="">
            <h2 className="section-title">Experiments</h2>
            <div className="row list-project">
              <div className="col-md-6 col-lg-4 list-project__item">
                <a href="#" className="project__thumb">
                  <img src="https://www.lform.com/_assets/packages/wp/assets/uploaded/2017/08/lform_javascript_blog_header_image-1600x1080.jpg" alt="Thumbnail of Project Name" />
                </a>
                <h3 className="project__title"><a href="#">Project Name</a></h3>
                <p className="project__desc">Ut at pharetra mauris, eget cursus mauris. Pellentesque aucibus elit in max.</p>
              </div>
              <div className="col-md-6 col-lg-4 list-project__item">
                <a href="#" className="project__thumb">
                  <img src="https://www.lform.com/_assets/packages/wp/assets/uploaded/2017/08/lform_javascript_blog_header_image-1600x1080.jpg" alt="Thumbnail of Project Name" />
                </a>
                <h3 className="project__title"><a href="#">Project Name</a></h3>
                <p className="project__desc">Ut at pharetra mauris, eget cursus mauris. Pellentesque aucibus elit in max.</p>
              </div>
              <div className="col-md-6 col-lg-4 list-project__item">
                <a href="#" className="project__thumb">
                  <img src="https://www.lform.com/_assets/packages/wp/assets/uploaded/2017/08/lform_javascript_blog_header_image-1600x1080.jpg" alt="Thumbnail of Project Name" />
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
