import React, {Component} from 'react';
import Subject from './components/Subject';
import Bar from './components/Bar';
import Content from './components/Content';
import './App.css';

class App extends Component {
  render(){
  return (
    <div className="App">
     <Subject></Subject>

     <Bar></Bar>
     <Content></Content>
    </div>
  );
  }
}

export default App;
