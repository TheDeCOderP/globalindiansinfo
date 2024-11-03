import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { setCookie } from 'nookies';
import { useRouter } from 'next/router';
import axios from 'axios';
import Swal from 'sweetalert2';
import Link from 'next/link';
import globalConfig from '@/config';
import Head from 'next/head';

const port = globalConfig.port;

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleChange1 = (e) => {
    setEmail(e.target.value);
  };

  const handleChange2 = (e) => {
    setPassword(e.target.value);
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post(`${port}/api/login`, {
        email,
        password,
      });

      if (response.data.success) {
        const userData = response.data.user || {};
        const serializedUserData = JSON.stringify(userData);

       // console.log('Serialized User Data:', serializedUserData);

        setCookie(null, 'gii', serializedUserData, { path: '/' });

        Swal.fire({
          icon: 'success',
          title: 'Welcome to GII!',
          text: 'Login successful. Now you can view all the Pages',
          showConfirmButton: false,
          timer: 1500,
        });

        router.push('/');
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Login Failed',
          text: response.data.message,
        });
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong during login. Please try again later.',
      });
    }
  };

  const handleForgotPassword = () => {
    console.log('Forgot Password Clicked');
  };

  return (
    <>
    <Head>
      <title>Login Now - Global Indians Info</title>
    </Head>
      <div className="login-background ">
        <div className="overlay"></div>
      </div>
      <div className=" p-8 rounded shadow-md  login-form pt-5">
        
        <div className='row d-flex justify-content-center bg-white rounded '>
        <div className='col-md-12 box-shadow p-2 pt-4  '>
        <div className="text-center pb-3">
          <img src="/uploads/images/site-logo4.png" alt="Logo" className="mb-8 site-logo" />
        </div>

        <h1 className="text-center font-bold mb-4">Login</h1>
        <form onSubmit={(e) => e.preventDefault()} className=' p-2 d-flex flex-column'>
          <div className="mb-3 d-flex flex-column">
           
            <input
              type="email"
              id="email"
              placeholder='Enter Your Email'
              name="email"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 d-flex flex-column"
              onChange={handleChange1}
            />
          </div>
          <div className="mb-3  d-flex flex-column">
         
            <div className="position-relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                placeholder='Enter Password'
                className="d-flex w-100 px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                onChange={handleChange2}
              />
              <div
                className="position-absolute top-50 end-0 translate-middle cursor-pointer"
                onClick={handleTogglePasswordVisibility}
              >
                {showPassword ? <FaEyeSlash className="w-5 h-5 site-primary" /> : <FaEye className="w-5 h-5 site-primary" />}
              </div>
            </div>
          </div>
          <div className="flex flex-column items-center justify-between mb-4">
            <div className="flex items-center mb-2">
              <input type="checkbox" id="rememberMe" className="m-1" />
              <label htmlFor="rememberMe" className=" text-sm text-gray-600">
                Remember me
              </label>
            </div>
            <Link href="/forgot-password" className="primary text-sm hover:underline" onClick={handleForgotPassword}>
              Forgot Password?
            </Link>
          </div>
          <button onClick={handleLogin} className="w-full button text-white py-2 rounded-md">
            Login / Sign In
          </button>
          <p className="mt-4 text-center text-gray-600 text-sm">
            Do not have an account?
            <Link href="/register" className="primary hover:underline">
              {' '}
              Sign Up
            </Link>
          </p>
        </form>
        </div>
        </div>
        <div className='text-center mt-4 text-white'>
        <Link href="/" className='text-white'>Back to Home Page</Link>
        </div>
      
      </div>
    </>
  );
};

Login.layout = 'blank';

export default Login;
