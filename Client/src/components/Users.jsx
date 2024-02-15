import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Users() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [selectedName, setSelectedName] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3002/users')
      .then(response => {
        console.log('User data:', response.data);
        setUsers(response.data);
        setFilteredUsers(response.data); 
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
        setFilteredUsers(filteredUsers.filter(user => user._id !== id)); // Update filteredUsers as well
      })
      .catch(error => {
        console.error('Error deleting user:', error);
      });
  };

  const handleNameChange = (event) => {
    setSelectedName(event.target.value);
    if (event.target.value === '') {
      setFilteredUsers(users);
    } else {
      const filtered = users.filter(user => user.name.toLowerCase().includes(event.target.value.toLowerCase()));
      setFilteredUsers(filtered);
    }
  };

  return (
    <div className='Container'>
      <Link to='/createUser' className='btn btn-success mb-3 mt-3 w-50 p-2 '>Add the hypersomniac</Link>
      <div className="mb-3">
        <label htmlFor="nameDropdown" className="form-label me-2  ">Filter by Name:</label>
        <select id="nameDropdown" className="form-select w-100" onChange={handleNameChange} value={selectedName}>
          <option value="">All Names</option>
          {users.map(user => (
            <option key={user._id} value={user.name}>{user.name}</option>
          ))}
        </select>
      </div>
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
          {filteredUsers.map(user => (
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
