import React from 'react';
import shortid from 'shortid';

import Experiment from './experiment';
import { projects } from '../utils/projects';

const Experiments = () => {
    return (
        <section className="section-projects spacer-in-top-xxl">
            <h2 className="section-title section-title--underlined">Experiments</h2>
            <div className="row list-project">
                {
                    projects.map((project) => 
                        <Experiment key= { shortid.generate() } project={ project } />
                    )
                }
            </div>
        </section>
    );
};

export default Experiments;