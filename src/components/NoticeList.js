import React, {Component} from 'react';
import './Table.css';
import {Link} from 'react-router-dom';

class NoticeList extends Component{
    render(){
        return(
            <div>
            <table className="Table">
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>작성자</th>
                        <th>날짜</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                    <td>{this.props.id}</td>
                    <td>
                        <Link to="/notice">{this.props.title}</Link>
                    </td>
                    <td>{this.props.writer}</td>
                    <td>{this.props.date}</td>
                </tr>
                </tbody>
            </table>
            </div>
        );
    }
}

export default NoticeList;