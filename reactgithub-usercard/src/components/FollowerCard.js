import React from 'react';

function FollowerCard(props) {
    console.log(props)
    return (
        <div className="follower-card">
            <img src={props.followers.avatar_url} alt="My user pic" avatar></img>
            <h2>Me:{props.followers.login}</h2>
            <p>Location:{props.followers.location}</p>
            <p><strong>Following:</strong>{props.followers.following}</p>
            <p><strong>Followers:</strong>{props.followers.followers}</p>



        </div>

    );
}




export default FollowerCard;