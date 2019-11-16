import React from 'react';

const Experiment = props => {
    const cover = props.project.cover;
    const title = props.project.title;
    const demoLink = props.project.demoLink;
    const gitLink = props.project.gitLink;
    const description = props.project.description;
    const tags = props.project.tags;
    console.log(tags);
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
                {
                    tags.map((tag) => 
                        <a 
                            key = { tag.name } 
                            href={ tag.link } 
                            target = "_blank"
                            rel="tag noopener noreferrer">
                            { tag.name }
                        </a>   
                    )
                }
                
            </div>
            
        </div>
    )
};

export default Experiment;