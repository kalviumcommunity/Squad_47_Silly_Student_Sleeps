import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

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

  const deleteUser = (id) => {
    axios.delete(`http://localhost:3002/deleteUser/${id}`)
      .then(() => {
        console.log('User deleted successfully');
        setUsers(users.filter(user => user._id !== id));
      })
      .catch(error => {
        console.error('Error deleting user:', error);
      });
  };

  return (
    <div className='Container'>
      <Link to='/createUser' className='btn btn-success mb-3 mt-3 w-50 p-2 '>Add the hypersomniac</Link>
      <table className='table table-bordered  table-striped table-hover table-responsive table-condensed mt-3 '>
        <thead className='table-dark'>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>How long they slept ?</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.age}  <span>minutes</span></td>
              <td>
                <Link to={`/updateUser/${user._id}`} className='btn btn-primary'>Edit</Link>
              </td>
              <td>
                <button onClick={() => deleteUser(user._id)} className='btn btn-danger'>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Users;
