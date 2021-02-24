import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Bar extends Component{
    render(){
        return(
            <nav>
                <ul>
                    <li><Link to="/noticelist">공지사항</Link></li>
                    <li><a href="#">자유게시판</a></li>
                    <li><a href="#">질문</a></li>
                    <li><a href="#">시험 성적</a></li>
                </ul>
            </nav>
        );
    }
}

export default Bar;