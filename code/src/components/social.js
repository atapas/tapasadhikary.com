import React from "react";

const Social = () => {
    return (
        <ul className="list-social">
            <li>
                <a href="https://twitter.com/tapasadhikary" target="_blank" rel="noopener noreferrer"><i className="icon icon-twitter"></i><span className="sr-only">read my tweets</span></a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/tapasadhikary/" target="_blank" rel="noopener noreferrer"><i className="icon icon-linkedin"></i><span className="sr-only">check linkedin</span></a>
            </li>
            <li>
                <a href="https://hashnode.com/@atapas" target="_blank" rel="noopener noreferrer"><i className="icon icon-hashnode"></i><span className="sr-only">view hashnode</span></a>
            </li>
            <li>
                <a href="https://www.facebook.com/tapasadhi" target="_blank" rel="noopener noreferrer"><i className="icon icon-facebook"></i><span className="sr-only">see facebook</span></a>
            </li>
            <li>
                <a href="https://www.instagram.com/greenroots.info/" target="_blank" rel="noopener noreferrer"><i className="icon icon-instagram"></i><span className="sr-only">view instagram</span></a>
            </li>
            <li>
                <a href="mailto:greenroots2019@gmail.com"><i className="icon icon-email"></i><span className="sr-only">send email</span></a>
            </li>
        </ul>
    )
};

export default Social;