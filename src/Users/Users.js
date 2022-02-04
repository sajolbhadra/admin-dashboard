import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import User from '../User/User';

const Users = () => {
  
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    return (
        <div>
            <h1>All User</h1>
            <Row>
                    {
                        users.map(user => <User
                        key={user.email}
                        user={user}>
                        </User>)
                    }
            </Row>
        </div>
    );
};

export default Users;