import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../style/Subject.css';

class Subject extends Component{
    render(){
        return(
            <header>
            <h1 class="main"><Link to="/" class="none">Computer Engineering</Link></h1>
            </header>
        );
    }
}

export default Subject;