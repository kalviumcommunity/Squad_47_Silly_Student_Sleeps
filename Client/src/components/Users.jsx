
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../App.css';

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3002/users')
      .then(response => {
        console.log('User data:', response.data);
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  return (
    <div className='Container'>
      <div className='mt-4'>
      <div className="d-flex justify-content-center">
      <Link to='/createUser' className='btn btn-success mb-3 p-2 w-50'>Click to add the hypersomniac</Link>
      </div>
      
        <table className='table mt-4 table-bordered table-hover table-striped table-responsive '>
          <thead className='table-dark'>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Time in minutes</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.age} <span>Minutes</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Users;


