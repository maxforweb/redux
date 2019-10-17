import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Results from './results';
import ActiveImg from './activeImg'

const Images = ( images ) => {
    return (
        <div>
            <Results img={images} />
            <ActiveImg/>
        </div>
    )
}


export default Images;