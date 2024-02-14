
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './CreateUser.css';

function CreateUser() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [ageError, setAgeError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setNameError('');
    setEmailError('');
    setAgeError('');
    let isValid = true;
    if (!name) {
      setNameError('Name is required');
      isValid = false;
    }
    if (!email) {
      setEmailError('Email is required');
      isValid = false;
    }
    if (!age) {
      setAgeError('Time is required');
      isValid = false;
    }

    if (isValid) {
      try {
        await axios.post('http://localhost:3002/createUser', { name, email, age });
        console.log('User created successfully');
        navigate('/');
      } catch (error) {
        console.error('Error creating user:', error);
      }
    }
  };

  return (
    <div className='container'>
      <div className='mt-3'>
        <h2>Create User</h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor='name' className='form-label'>Name</label>
            <input type='text' className='form-control' id='name' placeholder='Enter Name' value={name} onChange={(e) => setName(e.target.value)} />
            {nameError && <div className='text-danger'>{nameError}</div>}
          </div>
          <div className='mb-3'>
            <label htmlFor='email' className='form-label'>Email</label>
            <input type='email' className='form-control' id='email' placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)} />
            {emailError && <div className='text-danger'>{emailError}</div>}
          </div>
          <div className='mb-3'>
            <label htmlFor='age' className='form-label'>How long were they sleeping ?</label>
            <input type='number' className='form-control' id='age' placeholder='Enter Time in minutes..' value={age} onChange={(e) => setAge(e.target.value)} />
            {ageError && <div className='text-danger'>{ageError}</div>}
          </div>
          <button type='submit' className='btn btn-primary mb-3'>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default CreateUser;



