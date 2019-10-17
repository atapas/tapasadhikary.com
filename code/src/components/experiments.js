import React from 'react';

import Experiment from './experiment';
import { projects } from './projects';

const Experiments = () => {
    // const shuffle = (array) => array.sort(() => Math.random() - 0.5);
    // const shuffled = shuffle(projects);
    return (
        <section className="section-projects spacer-in-top-xxl">
            <h2 className="section-title section-title--underlined">Experiments</h2>
            <div className="row list-project">
                {
                    projects.map((project) => 
                    <Experiment 
                            key={ project.id }
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