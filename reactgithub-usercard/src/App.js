import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserCard from './components/UserCard';


function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <UserCard users={user} />


      </header>
    </div>
  );
}

export default App;
