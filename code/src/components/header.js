import React from "react";

import HeroImage from "../images/photo-tapas2.png";

const Header = props => (
  <header className="page-header">
    <div className="section-header">
      <h1 className="section-title section-title--underlined text-left"><strong>Tapas</strong> Adhikary</h1>
      <p className="section-desc">
      &#9757; UI/UX Enthusiast | &#128187; Work @MicroFocus | ✍️ Blogger | 👨‍🏫 Mentor | &#127908; Speaker | &#127839; Foodie
      </p>
    </div>
    <img src={ HeroImage } alt="Main" className="img-hero"/>
    <blockquote className="hero-quote"><em>Sharing</em> <span className="midline">is the only way to</span> <em className="emp--lg">learn</em></blockquote>
  </header>
)

export default Header
