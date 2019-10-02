import React from 'react';
import User from './User';


function UserCard(props) {
    console.log(props)
    return (
        <div className="user-card">
            <img src={props.user.avatar_url} alt="My user pic" avatar></img>
            <h2>Me:{props.user.login}</h2>
            <p>Location:{props.user.location}</p>
            <p><strong>Following:</strong>{props.user.following}</p>
            <p><strong>Followers:</strong>{props.user.followers}</p>



        </div>

    );
}




export default UserCard;