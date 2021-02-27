import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import '../style/Bar.css';

class Bar extends Component{
    render(){
        return(
            <nav>
                <ul>
                    <li><NavLink to="/noticelist" className="nav">공지사항</NavLink></li>
                    <li><a href="#">자유게시판</a></li>
                    <li><a href="#">질문</a></li>
                    <li><a href="#">시험 성적</a></li>
                </ul>
            </nav>
        );
    }
}

export default Bar;