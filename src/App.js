import React, {Component} from 'react';
import Subject from './components/Subject';
import Bar from './components/Bar';
import NoticeList from './components/NoticeList';
import Notice from './components/Notice';
import Home from './components/Home';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';

const notices=[
  {
    'id':1,
    'title':'휴강공지',
    'writer': '김교수',
    'date':'21/02/01',
    'desc': '내일수업 휴강입니다.'
  }
]

class App extends Component {
  render(){
  return (
    <div className="App">
    <BrowserRouter>
      <Subject></Subject>
      <Bar></Bar>
        <Route exact path="/">
          <Home
          id={notices[0].id}
          title={notices[0].title}
          writer={notices[0].writer}
          date={notices[0].date}>
          </Home>
        </Route>
        <Route exact path="/noticelist">
          <NoticeList
            id={notices[0].id}
            title={notices[0].title}
            writer={notices[0].writer}
            date={notices[0].date}>
          </NoticeList>
        </Route>
        <Route path="/notice">
          <Notice></Notice>
        </Route>
    </BrowserRouter>
    </div>
  );
  }
}

export default App;
