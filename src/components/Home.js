import React, {Component} from 'react';
import NoticeList from './NoticeList';

class Home extends Component{
    render(){
        return(
            <NoticeList 
            data={this.props.data}
            ></NoticeList>
        );
    }
}

export default Home;