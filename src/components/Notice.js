import React,{Component} from 'react';

class Notice extends Component{
    render(){
        const {params}=this.props.match;
        var id=params.notice_id;
        var data=this.props.data;
        return(
            <div>
            <h1>{data[id-1].title}</h1>
            <p>작성자 {data[id-1].writer}</p>
            <p>{data[id-1].desc}</p>
            </div>
        );
    }
}

export default Notice;