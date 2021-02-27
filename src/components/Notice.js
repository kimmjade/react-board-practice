import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import '../style/Notice.css';

class Notice extends Component{
    render(){
        const {params}=this.props.match;
        var id=params.notice_id;
        var data=this.props.data;
        return(
            <div>
            <h2>공지사항</h2>
            <table class="contents">
                <thead>
                    <tr>
                        <th colspan="3">{data[id-1].title}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td>작성자 {data[id-1].writer}</td>
                        <td>{data[id-1].date}</td>
                    </tr>
                    <tr>
                        <td colspan="3">{data[id-1].desc}</td>
                    </tr>
                </tbody>
            </table>
            <Link to='/noticelist'><input type="button" value="목록" class="btn"></input></Link>
            </div>
        );
    }
}

export default Notice;