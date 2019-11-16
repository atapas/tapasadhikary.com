import React from 'react';

const Experiment = props => {
    const cover = props.cover;
    const title = props.title;
    const demoLink = props.demoLink;
    const gitLink = props.gitLink;
    const description = props.description;
    return (
        <div className="col-md-6 col-lg-4 list-project__item">
            <a href={ demoLink } className="project__thumb" target = "_blank" 
            rel = "noopener noreferrer">
                <img src= { cover } alt="Thumbnail of Project Cover" />
            </a>
            <h3 className="project__title">
                <a href={ gitLink } target = "_blank" rel = "noopener noreferrer">{ title }</a>
                <a href={ gitLink } target = "_blank" rel = "noopener noreferrer" className="project__title--media spacer-in-left-sm"><i className="icon icon-github"></i></a>
            </h3>
            <p className="project__desc">{ description }</p>
            <div className="tags">
                <a href="#" rel="tag">vue</a>
                <a href="#" rel="tag">ember</a>
                <a href="#" rel="tag">netlify</a>
                <a href="#" rel="tag">gatsby</a>
            </div>
        </div>
    )
};

export default Experiment;