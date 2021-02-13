import React, {Component} from 'react';
import NoticeList from './NoticeList';

class Home extends Component{
    render(){
        return(
            <NoticeList 
            id={this.props.id}
            title={this.props.title}
            writer={this.props.writer}
            date={this.props.date}
            ></NoticeList>
        );
    }
}

export default Home;