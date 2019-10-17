import React from "react";
import SEO from "../components/seo";

import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/index.scss";

import Header from '../components/header';
import Features from '../components/features';
import Social from '../components/social';
import Experiments from '../components/experiments';

const IndexPage = () => {
  return(
    <>
      <SEO title="Tapas Adhikary" />
      <div className="container">
        <Header />
        <main>
          <article>
            <Features />
            <Social />
            <Experiments />
          </article>
        </main>
      </div>
    </>
  )
}

export default IndexPage
