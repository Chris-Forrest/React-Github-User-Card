import React from 'react';
import styled from 'styled-components';

/************styled follower card ************************************/

const StyledFollower = styled.div`
display:flex;
flex-direction:column;
align-items:center;
border:1px solid rgb(210, 210, 210 );
border-radius: 5px;
box-shadow: 10px 8px 12px -2px rgb(128, 127, 197);
margin: 8px;
padding: 12px;
background-color: #037ffc;
width: 50%;
margin-left: 25%;
margin-bottom: 3%;
`


const FollowersCard = props => {

    console.log('followers data as props', props)

    return(

        <StyledFollower className='Follower-Container'>
           
            <h3 key={props.follower.id} >{props.follower.login}</h3>
            <img src={props.follower.avatar_url} alt='image of user' />
        </StyledFollower >
    )
}
export default FollowersCard;