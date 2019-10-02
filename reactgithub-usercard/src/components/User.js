import React from 'react';
import axios from 'axios';
import UserCard from './UserCard';
import FollowerCard from './FollowerCard';

class User extends React.Component {
    constructor() {
        super();
        this.state = {
            userData: {},

            followerData: [],
            userName: 'nerissaj'

        }
    }
    componentDidMount = () => {
        axios
            .get(`https://api.github.com/users/${this.state.userName}`)

            .then(response => {
                console.log(response.data)
                this.setState({
                    userData: response.data
                });
            })
            .catch(err => console.log('nooo'))

        axios
            .get(`https://api.github.com/users/${this.state.userName}/followers`)

            .then(response => {
                console.log(response.data)
                this.setState({
                    followerData: response.data
                });
            })
            .catch(err => console.log('nooo'));

    }


    handleChanges = e => {
        this.setState({ userName: e.target.value });
    };

    render() {
        return (
            <div className="users">
                <h1>Hello from Users!!</h1>
                <UserCard user={this.state.userData} />

                <input
                    type="text"
                    value={this.state.userName}
                    onChange={this.handleChanges}
                    name="userName" />

                <button onClick={this.state.fetchUsers}>Get Users Followers</button>
                {this.state.followerData.map(follower => {


                    return (
                        <div key={follower.id}>
                            <FollowerCard followers={follower} />
                        </div>
                    )
                })}
            </div>



        )
    }
}
export default User;

