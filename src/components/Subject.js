import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Subject extends Component{
    render(){
        return(
            <header>
            <h1><Link to="/">게시판</Link></h1>
            </header>
        );
    }
}

export default Subject;