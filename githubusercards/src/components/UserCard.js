import React from 'react';
import styled from 'styled-components';

/******************** styled user card  **********************************/

const StyledCard = styled.div`
display:flex;
flex-direction:column;
align-items:center;
border:1px solid rgb(210, 210, 210 );
border-radius: 5px;
box-shadow: 10px 8px 12px -2px rgb(128, 127, 197);
margin: 8px;
padding: 12px;
background-color: #aed2f5;
width: 50%;
margin-left: 25%;
margin-bottom: 3%;
`

const UserCard = props => {
 
    console.log('props data from usercard',props)
    
    return(
        <StyledCard className='User-Container' key={props.user.id}>
            <h2>{props.user.name}</h2>
            <img src={props.user.avatar_url} alt='a person standing on a dock with a lake and mountains behind him'/>
            <h4>Bio : {props.user.bio}</h4>
            <h4>Location : {props.user.location}</h4>
            <h4>Following : {props.user.following} </h4>
            <h4>Followers : {props.user.followers}  </h4>
            <h4>Below is a list of the user's followers</h4>
           
        </StyledCard>
    )
}
export default UserCard;