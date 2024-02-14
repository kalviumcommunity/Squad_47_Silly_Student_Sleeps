
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function UpdateUser() {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:3002/getUser/${id}`)
      .then(response => {
        const userData = response.data;
        console.log('User data:', userData);
        setName(userData.name);
        setEmail(userData.email);
        setAge(userData.age);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:3002/updateUser/${id}`, { name, email, age })
      .then(response => {
        console.log('User updated successfully');
        navigate('/');
      })
      .catch(error => {
        console.error('Error updating user:', error);
      });
  };
  

  return (
    <div className='container'>
      <div className='mt-5'>
        <h2>Update User</h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor='name' className='form-label'>Name</label>
            <input type='text' className='form-control' id='name' placeholder='Enter Name' value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className='mb-3'>
            <label htmlFor='email' className='form-label'>Email</label>
            <input type='email' className='form-control' id='email' placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className='mb-3'>
            <label htmlFor='age' className='form-label'>How long were they sleeping ?</label>
            <input type='number' className='form-control' id='age' placeholder='Enter Time in minutes..' value={age} onChange={(e) => setAge(e.target.value)} />
          </div>
          <button type='submit' className='btn btn-primary mb-3'>Update</button>
        </form>
      </div>
    </div>
  );
}

export default UpdateUser;
