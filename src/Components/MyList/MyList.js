import React from 'react';
import PropTypes from 'prop-types';
import './MyList.css';

/**
 * The MyList component is a stateless component. It will display cards with data about each movie in the myList array, incuding image and title. It has a Remove button that will trigger the removeMovie function when the button is clicked. 
 */

const MyList = ({ myList, removeMovie }) => {
    return myList.map((m, i) => (
        <div className="card card-style" style={{ width: "18rem" }} key={i + m.title}>
            <img src={m.img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{m.title}</h5>
                <button className="btn btn-danger remove-button" onClick={() => removeMovie(m)}>Remove</button>
            </div>
        </div>
    ));
}

MyList.propTypes = {
    myList: PropTypes.array,
    removeMovie: PropTypes.func
}

export default MyList;