import React from 'react';
import PropTypes from 'prop-types';
import './Recommendations.css';

/**
 * The Recommendations component is a stateless component. It will display cards with data about each movie in the recommendations array, including image and title. It has an Add button that will trigger the addMovie function when the button is clicked.  
 */

const Recommendations = ({ recommendations, addMovie }) => {
    return recommendations.map((m, i) => (
        <div className="card card-style" style={{ width: "18rem" }} key={i + m.title}>
            <img src={m.img} className="card-img-top hello" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{m.title}</h5>
                <button className="btn btn-primary add-button" onClick={() => addMovie(m)}>Add</button>
            </div>
        </div>
    ));
}
Recommendations.propTypes = {
    recommendations: PropTypes.array,
    addMovie: PropTypes.func
}

export default Recommendations;