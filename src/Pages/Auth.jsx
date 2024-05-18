import React, { useState } from 'react'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
import { MDBContainer, MDBNavbar, MDBNavbarBrand } from 'mdb-react-ui-kit';
import { FaLaptop } from "react-icons/fa";
import { Link } from 'react-router-dom'

function Auth({ register }) {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleRegister = (e) => {
    e.preventDefault()
    // Store user data in sessionStorage
    sessionStorage.setItem('username', username)
    sessionStorage.setItem('email', email)
    sessionStorage.setItem('password', password)
    Swal.fire({
      icon: 'success',
      title: 'Registration Successful',
      text: 'You have registered successfully!'
    }).then(() => {
      navigate('/login')
    })
  }

  const handleLogin = (e) => {
    e.preventDefault()
    // Retrieve user data from sessionStorage
    const storedEmail = sessionStorage.getItem('email')
    const storedPassword = sessionStorage.getItem('password')

    if (email === storedEmail && password === storedPassword) {
      Swal.fire({
        icon: 'success',
        title: 'Login Successful',
        text: 'You have logged in successfully!'
      }).then(() => {
        navigate('/')
      })
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Login Failed',
        text: 'Invalid email or password!'
      })
    }
  }

  return (
    <div>
      <div className="row m-5 p-4">
        <div className="col-1"></div>
        <div className="col-10">
          <form 
            className='shadow m-3' 
            style={{ backgroundColor: 'rgb(142, 160, 189)' }} 
            onSubmit={register ? handleRegister : handleLogin}
          >
            <h2 className='text-center text-dark p-2'>Welcome</h2>
            <h5 className='text-center text-dark'>
              {register ? 'Register Here...' : 'Login Here...'}
            </h5>
            <div className='m-3 p-3'>
              {register && 
                <input 
                  type="text" 
                  placeholder='Username' 
                  className='form-control mb-2' 
                  value={username} 
                  onChange={(e) => setUsername(e.target.value)} 
                />
              }
              <input 
                type="email" 
                placeholder='Email' 
                className='form-control mb-2' 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
              />
              <input 
                type="password" 
                placeholder='Password' 
                className='form-control mb-2' 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
              />
            </div>
            <div className='text-center'>
              <button type="submit" className='btn btn-primary m-2'>
                {register ? 'Register' : 'Login'}
              </button>
              {register ? (
                <p className='text-dark p-2'>
                  Already Registered? <Link to={'/login'}>Login here...</Link>
                </p>
              ) : (
                <p className='text-dark p-2'>
                  New here? <Link to={'/register'}>Register here...</Link>
                </p>
              )}
            </div>
          </form>
        </div>
        <div className="col-1"></div>
      </div>
    </div>
  )
}

export default Auth
