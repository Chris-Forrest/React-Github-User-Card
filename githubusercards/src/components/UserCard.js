import React from 'react';
import styled from 'styled-components';


const UserCard = props => {
 
    console.log('props data from usercard',props)
    //const user = this.props.user
    return(
        <div className='User-Container' key={props.user.id}>
            <h2>{props.user.name}</h2>
            <img src={props.user.avatar_url} alt='a person standing on a dock with a lake and mountains behind him'/>
            <h4>Bio : {props.user.bio}</h4>
            <h4>Location : {props.user.location}</h4>
            <h4>Following : {props.user.following} </h4>
            <h4>Followers : {props.user.followers}  </h4>
            <h4>Below is a list of the user's followers</h4>
           
        </div>
    )
}
export default UserCard;