import React from 'react';
import './App.css';
/*****************************my imports ****************************************/
import axios from 'axios';
import UserCard from './components/UserCard';
import FollowersCard from './components/FollowersCard';

class App extends React.Component {

  state = {
    user: [],
  }
  
  componentDidMount() {
    axios
      .get('https://api.github.com/users/Chris-Forrest')
        .then( res => {
          console.log(res)
        })
        .catch( err => console.log('Fetch user error', err))
  }


  render(){
    return(
      <div className='App'>
        <h1>Github User</h1>
        <UserCard  />
        <FollowersCard />
      </div>
    )
  }
}

export default App;
