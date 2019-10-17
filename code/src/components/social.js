import React from "react";

import IconLink from './iconLink';

const Social = () => {
    return (
        <ul className="list-social">
            <li>
                <IconLink href="https://twitter.com/tapasadhikary" style="icon icon-twitter" text="read my tweets"></IconLink>
            </li>
            <li>
                <IconLink href="https://www.linkedin.com/in/tapasadhikary/" style="icon icon-linkedin" text="check linkedin"></IconLink>
            </li>
            <li>
                <IconLink href="https://hashnode.com/@atapas" style="icon icon-hashnode"  text="view hashnode"></IconLink>
            </li>
            <li>
                <IconLink href="https://www.facebook.com/tapasadhi" style="icon icon-facebook"  text="see facebook"></IconLink>
            </li>
            <li>
                <IconLink href="https://www.instagram.com/greenroots.info/" style="icon icon-instagram"  text="view instagram"></IconLink>
            </li>
            <li>
                <IconLink href="mailto:greenroots2019@gmail.com" style="icon icon-email"  text="send email"></IconLink>
            </li>
        </ul>
    )
};

export default Social;