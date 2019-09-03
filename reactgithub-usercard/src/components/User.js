import React from 'react';
import axios from 'axios';

class User extends React.Component {

    state = {
        users: [],
        login: "",
        location: "",
        following: "",
        followers: ""

    }

    componentDidMount() {
        axios
            .get("https://api.github.com/users/nerissaj/")

            .then(response => this.setState({ users: response.data }))

            .catch(err => console.log('nooo'))
        console.log(this.state.data);
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.users !== prevState.users) {
            if (this.state.users === 'nerissaj') {
                fetch('https://api.github.com/users/nerissaj/')
                    .then(response => response.json())
                    .then(response => this.setState({ users: response.data }))
                    .catch(err => console.log('nooo'))

            }
        }
    }
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };
    fetchUsers = event => {
        event.preventDefault();
        fetch(`https://api.github.com/users/${this.state.users.id}/followers`)
            .then(response => this.setState({ users: response.data }))
            .catch(err => console.log('nooo'))

    };
    render() {
        return (
            <div className="users">
                <h1>Hello from Users!!</h1>
                <input
                    type="text"
                    value={this.state.user}
                    onChange={this.handleChange}
                    name="user" />
                <button onClick={this.fetchUsers}>Get Users</button>
                <div className="user">
                    {this.state.users.map(user => (
                        <div key={user.id} user={user}>User</div>
                    ))}
                </div>
            </div>


        )
    }
}
export default User;

