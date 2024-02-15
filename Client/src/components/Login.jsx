
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Login = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');

    const navigate = useNavigate();

    const submit = (e) => {
        e.preventDefault();

        document.cookie = `name=${name}; expires=Fri, 1 Dec 9999 23:59:59 GMT`;
        document.cookie = `email=${email}; expires=Fri, 1 Dec 9999 23:59:59 GMT`;
        document.cookie = `age=${age}; expires=Fri, 1 Dec 9999 23:59:59 GMT`;
        axios.post("http://localhost:3002/createUser", { name, email, age })
            .then(res => {
                console.log(res.data);
                document.cookie = `token=${res.data.token}; expires=Fri, 1 Dec 9999 23:59:59 GMT`;  
                console.log(document.cookie);
                navigate("/users");
            })
            .catch(err => console.error(err));
    };

    const handelLogOut = () => {
            document.cookie = 'token=; expires=Thu, 06 Jan 1950 00:00:00 GMT';
            document.cookie = 'name=; expires=Thu, 06 Jan 1950 00:00:00 GMT';
            document.cookie = 'email=; expires=Thu, 06 Jan 1950 00:00:00 GMT';
            document.cookie = 'age=; expires=Thu, 06 Jan 1950 00:00:00 GMT';
        navigate('/');
    };

    return (
        <div>
            <form onSubmit={submit} className='container mt-5 mb-5 form text-center p-5 bg-light rounded shadow w-50 mx-auto'>
                <h2 className='title text-center'> Store your cookies </h2>
                <input type="text" placeholder='Enter your name' required className='form-control' value={name} onChange={(e) => setName(e.target.value)} />
                <input type="email" placeholder='Enter your email' required className='form-control' value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="number" placeholder='How long were they sleeping' required className='form-control' value={age} onChange={(e) => setAge(e.target.value)} />
      
                <button type='submit' className='submit btn btn-primary mb-3 w-50 mx-auto'> Submit </button>
            </form>
            <div className='d-flex justify-content-center align-items-center'>
                <button className='cont btn btn-primary mb-3 w-25 mx-auto' onClick={handelLogOut}> LogOut </button>
            </div>
        </div>
    );
};

export default Login;

