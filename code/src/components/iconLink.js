import React from "react";

const IconLink = props => {
    const href = props.href;
    const text = props.text;
    const style = props.styles;
    return (
        <a 
            href = { href }
            target = "_blank" 
            rel = "noopener noreferrer">
            <i className = { style }></i>
            <span className = "sr-only">{ text }</span>
        </a>
    )
};

export default IconLink;