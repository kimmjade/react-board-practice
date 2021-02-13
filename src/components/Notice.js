import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Notice extends Component{
    render(){
        return(
            <content>
                <h2>바뀜</h2>
                <p>바뀜</p>
                <Link to="/noticelist"><input type="button" value="목록"></input></Link>
            </content>
        );
    }
}

export default Notice;