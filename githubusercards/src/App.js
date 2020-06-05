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
    followers: [],
    githubUser:'',
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

  /******stretch goal input data from user to get a different github user **************/

  handleChanges = e => {
    this.setState({ ...this.state, githubUser: e.target.value})
  }

//componentDidUpdate(){

  fetchUser = e => {
  e.preventDefault();
  
    axios
      .get(`https://api.github.com/users/${this.state.githubUser}`)
      .then( res => {
        this.setState({ users:[res.data]})
        console.log('inputted users data',this.state.users)
      })
      .catch(err => console.log('error fetching inputted user\'s data',err))
  
    axios
      .get(`https://api.github.com/users/${this.state.githubUser}/followers`)
      .then(res => {
        this.setState({followers: res.data})
        console.log('inputted user followers', this.state.followers)
      })
      .catch(err => console.log('error fetching inputed users followers',err))
}
//}

  render(){
    return(
      <div className='App'>
        <h1>Github User Card App</h1>
        <form>
          <p>Please input the github username in the appropriate field. The user should then be displayed along with their followers like below's example of Me and my followers :) </p>
          <label>Github UserName</label>
          <input 
            name="githubUser"
            type='text'
            value={this.state.githubUser}
            onChange={this.handleChanges}
            />
          <button onClick={this.fetchUser}>get user</button>
        </form>
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
