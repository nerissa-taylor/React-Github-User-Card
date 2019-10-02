import React from 'react';

function FollowerCard(props) {
    console.log(props)
    return (
        <div className="follower-card">
            <img className="pic" src={props.followers.avatar_url} alt="My user pic" avatar></img>
            <h4>Me:{props.followers.login}</h4>
            <h4>Url:{props.followers.url}</h4>



        </div>

    );
}




export default FollowerCard;