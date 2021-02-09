import React, {Component} from 'react';

class Bar extends Component{
    render(){
        return(
            <nav>
                <ul>
                    <li><a href="#">공지사항</a></li>
                    <li><a href="#">자유게시판</a></li>
                    <li><a href="#">질문</a></li>
                    <li><a href="#">시험 성적</a></li>
                </ul>
            </nav>
        );
    }
}

export default Bar;