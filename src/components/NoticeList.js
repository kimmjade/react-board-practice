import React, {Component} from 'react';
import './Table.css';
import {Link} from 'react-router-dom';

class NoticeList extends Component{
    render(){
        var noticelists=[];
        var data=this.props.data;
        var i=0;
        while(i<data.length){
            noticelists.push(
                <tr key={data[i].id}><td>{data[i].id}</td>
                <td>
                    <Link to={"/notice/"+data[i].id}>{data[i].title}</Link>
                </td>
                <td>{data[i].writer}</td>
                <td>{data[i].date}</td></tr>);
            i++;
        }
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
                    {noticelists}
                </tbody>
            </table>
            </div>
        );
    }
}

export default NoticeList;