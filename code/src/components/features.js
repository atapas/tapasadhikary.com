import React from "react";

import Feature from './feature';

const Features = () => {
    const primaryFeatureData = {
        'title': 'Blogger',
        'description': 'Technical Blogging is my Passion. I hope you will find something worth looking at or reading. My blog page is just a click away!',
        'link': 'https://blog.greenroots.info',
        'linkText': 'See what I blog'
    }
    const secondaryFeatureData = {
        'title': 'Mentor',
        'description': "As the saying goes, 'The greatest mentor is who Inspires!'. It is also an avenue to gain knowledge. Mentoring is Fun. ",
        'link': 'https://mentorcruise.com/mentor/TapasAdhikary/',
        'linkText': 'See what I mentor'
    }
    return (
        <div className="row">
            <Feature primary = { true } data = { primaryFeatureData }></Feature>
            <Feature primary = { false} data = { secondaryFeatureData }></Feature>
        </div>
    );
};

export default Features;