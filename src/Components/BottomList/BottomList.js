import React from 'react';
import PropTypes from 'prop-types';
import './BottomList.css';

const BottomList = ({myList}) => {
    return( 
        myList.map((m, i) => 
        <ul className="bottom-list" key={i + m.title}><li>{m.title}</li></ul>
    ))
}

BottomList.propTypes = {
    myList: PropTypes.array
}

export default BottomList;