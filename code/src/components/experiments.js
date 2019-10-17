import React from 'react';

import Experiment from './experiment';
import { projects } from './projects';

const Experiments = () => {
    
    return (
        <section className="section-projects spacer-in-top-xxl">
            <h2 className="section-title section-title--underlined">Experiments</h2>
            <div className="row list-project">
                {
                    projects.map((project) => 
                    <Experiment 
                            cover = { project.cover } 
                            title = { project.title } 
                            link = { project.link } 
                            description = { project.description } >
                    </Experiment>
                    )
                }
            </div>
        </section>
    );
};

export default Experiments;