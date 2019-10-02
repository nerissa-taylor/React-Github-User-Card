import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserCard from './components/UserCard';
import User from './components/User';
import FollowerCard from './components/FollowerCard';


class App extends React.Component {
  render() {
    return (
      <div>


        <h1>This is my UserList</h1>
        <User />


      </div>
    )
  }
}
export default App;
