import {combineReducers} from 'redux';
import  searchState from './searchState';
import infoImg from './infoImg';


const allReducers  = combineReducers ({
    search: searchState,
    infoImg: infoImg
})


export default allReducers;