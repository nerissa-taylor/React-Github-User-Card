import React from 'react';


function UserCard(props) {
    return (
        <div>
            <h2>{props.users.login}</h2>
            <p>{props.users.location}</p>
            <p>{props.users.following}</p>
            <p>{props.followers.followers}</p>
            <div>
                {props.users.map(user => (<div key={user.id}>{user.login}</div>
                ))}
            </div>
        </div>
    );
}




export default UserCard;