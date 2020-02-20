import React from 'react';
import Img from 'gatsby-image';
import {Link} from 'gatsby';

const Card = ({imageFluid, imageAlt, title, description, courseCode}) => {
    return (
        <div className="card" style={{height: '100%', display: "flex", flexDirection: "column"}}>
            <div className="card-image">
                <figure className="image">
                    <Img fluid={imageFluid} alt={imageAlt} />
                </figure>
            </div>
            <div className="card-content"  style={{marginBottom: "auto"}}>
                <h1 className="title">{title}</h1>
                <div className="content">
                    {description}
                </div>
            </div>
            <div className="card-footer">
                <Link to={`/course/${courseCode}`} className="card-footer-item has-background-primary has-text-white">Vybrať</Link>
            </div>
        </div>
    );
};

export default Card;
