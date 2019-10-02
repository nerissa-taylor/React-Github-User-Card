import React from 'react';
import User from './User';


function UserCard(props) {
    //console.log(props)
    return (
        <div className="user-card">
            <img className="pic" src={props.user.avatar_url} />
            <h2>Me:{props.user.login}</h2>
            <h3>Bio:{props.user.bio}</h3>
            <h2>Location:{props.user.location}</h2>
            <h2><strong>Following:</strong>{props.user.following}</h2>
            <h2><strong>Followers:</strong>{props.user.followers}</h2>



        </div>

    );
}




export default UserCard;