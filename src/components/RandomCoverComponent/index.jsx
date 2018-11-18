import React from 'react';
import cover from './covers/205.gif';
import './index.css';


const RandomCoverComponent = (props) => {
    return (
        <img src={cover} className="RandomCoverComponent-img" alt="mis lupin" />

    );

}

export default RandomCoverComponent;
