import React from "react";

import IconLink from './iconLink';

const Social = () => {
    return (
        <section className="section-social spacer-in-top-xxl">  
            <ul className="list-social">
                <li>
                    <IconLink href="https://twitter.com/tapasadhikary" styles="icon icon-twitter" text="read my tweets"></IconLink>
                </li>
                <li>
                    <IconLink href="https://www.linkedin.com/in/tapasadhikary/" styles="icon icon-linkedin" text="check linkedin"></IconLink>
                </li>
                <li>
                    <IconLink href="https://hashnode.com/@atapas" styles="icon icon-hashnode"  text="view hashnode"></IconLink>
                </li>
                <li>
                    <IconLink href="https://www.facebook.com/tapasadhi" styles="icon icon-facebook"  text="see facebook"></IconLink>
                </li>
                <li>
                    <IconLink href="https://www.instagram.com/greenroots.info/" styles="icon icon-instagram"  text="view instagram"></IconLink>
                </li>
                <li>
                    <IconLink href="mailto:greenroots2019@gmail.com" styles="icon icon-email"  text="send email"></IconLink>
                </li>
            </ul>
        </section>
    )
};

export default Social;