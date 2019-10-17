import React from "react";

const Feature = props => {
    const isPrimary = props.primary ? true : false;
    const title = props.data.title;
    const description = props.data.description;
    const link = props.data.link;
    const linkText = props.data.linkText;

    let sectionStyle, btnStyle;

    if (isPrimary) {
        sectionStyle = 'col-md-6 section-featured section-featured--primary';
        btnStyle = 'btn btn-raised btn-raised--brand';
    } else {
        sectionStyle = 'col-md-6 section-featured section-featured--secondary';
        btnStyle = 'btn btn-raised btn-raised--default';
    }

    return (
        <>
        {
            <section className={ sectionStyle }>
              <h2 className="section-title">{ title }</h2>
              <p className="section-desc">{ description }</p>
              <a href={ link } className={ btnStyle } target="_blank" rel="noopener noreferrer">{ linkText }</a>
            </section>
        }
        </>
    )
};

export default Feature;