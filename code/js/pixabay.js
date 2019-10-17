import React from 'react';
import NavBar from './navBar';
import Search from '../containers/searchContainer'; 
import {BrowserRouter, Route} from 'react-router-dom';

const Pixa = () => {
    return (
        <BrowserRouter>
            <div>
                <NavBar/>
                <Search/>
                
            </div>
        </BrowserRouter>
    )
}

export default Pixa;