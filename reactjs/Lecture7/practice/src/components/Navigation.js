import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class Navigation extends Component {
    render() {
        return (
            <div>
                <Link to="/">HOme</Link>
                <Link to="/user">User</Link>
                <Link to="/login">login</Link>
            </div>
        )
    }
}
