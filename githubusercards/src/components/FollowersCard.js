import React from 'react';
import styled from 'styled-components';


const FollowersCard = props => {

    console.log('followers data as props', props)

    return(

        <div className='Follower-Container'>
           
            <h3 key={props.follower.id} >{props.follower.login}</h3>
            <img src={props.follower.avatar_url} alt='image of user' />
        </div>
    )
}
export default FollowersCard;