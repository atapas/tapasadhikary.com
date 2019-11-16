import React from 'react';

import Experiment from './experiment';
import { projects } from '../utils/projects';
// import { shuffle } from '../utils/generic';

const Experiments = () => {
    //const shuffled = shuffle(projects);
    return (
        <section className="section-projects spacer-in-top-xxl">
            <h2 className="section-title section-title--underlined">Experiments</h2>
            <div className="row list-project">
                {
                    projects.map((project) => 
                        <Experiment key= { project.id } project={ project } />
                    )
                }
            </div>
        </section>
    );
};

export default Experiments;