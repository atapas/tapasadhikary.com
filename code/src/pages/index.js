import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import "../styles/index.scss";

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <h1>Hi there</h1>
    <p>Welcome to tapasadhikary.com.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </>
 
)

export default IndexPage
