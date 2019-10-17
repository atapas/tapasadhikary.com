import React from 'react';

const Experiment = props => {
    const cover = props.cover;
    const title = props.title;
    const link = props.link;
    const description = props.description;
    return (
        <div className="col-md-6 col-lg-4 list-project__item">
            <a href={ link } className="project__thumb" target = "_blank" 
            rel = "noopener noreferrer">
                <img src= { cover } alt="Thumbnail of Project Cover" />
            </a>
            <h3 className="project__title">
                <a href={ link } target = "_blank" rel = "noopener noreferrer">{ title }</a>
            </h3>
            <p className="project__desc">{ description }</p>
        </div>
    )
};

export default Experiment;