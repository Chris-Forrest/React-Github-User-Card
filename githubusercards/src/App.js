import React from 'react';
import './App.css';
/*****************************my imports ****************************************/
import axios from 'axios';
import UserCard from './components/UserCard';
import FollowersCard from './components/FollowersCard';

class App extends React.Component {
  /****************set initial state  ******************************/

  state = {
    users: [],
    followers: []
  }

  /***************component did mount axios calls  *******************************/
  
  componentDidMount() {
    axios
      .get(`https://api.github.com/users/Chris-Forrest`)
        .then(res => {
          this.setState({ users: [res.data] })
          console.log('user data', this.state.users)
        })
        .catch( err => console.log('Fetch user error', err))
    axios
      .get(`https://api.github.com/users/Chris-Forrest/followers`)
        .then( res => {
          this.setState({ followers: res.data })
          console.log('followers data', this.state.followers)
        })
        .catch(err => console.log('error fetching followers', err))

  }


  render(){
    return(
      <div className='App'>
        <h1>Github User</h1>
       
        {this.state.users.map( user => (
          < UserCard user={user} />
        ))}
        
        {this.state.followers.map( follower => (
          < FollowersCard follower={follower} />
        ))}

      </div>
    )
  }
}

export default App;
