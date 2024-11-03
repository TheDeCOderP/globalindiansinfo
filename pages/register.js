import axios from 'axios';
import Link from 'next/link';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import globalConfig from '@/config';

const port = globalConfig.port;
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import icons as needed
import Head from 'next/head';

const AuthForm = ({ isLogin, onSubmit }) => {
  const router = useRouter();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobile, setMobile] = useState('');
  const [profileImage, setProfileImage] = useState(null);

  const handleRegistration = async (e) => {
    e.preventDefault();
  
    try {
      // Check if email and mobile already exist
      const checkDetailsResponse = await axios.post(`${port}/api/check-details`, {
        email,
        mobile,
      });

      if (checkDetailsResponse.data.emailExists) {
        Swal.fire({
          icon: 'error',
          title: 'Registration Failed',
          text: 'Email address is already registered. Please use a different email.',
        });
        return;
      }

      if (checkDetailsResponse.data.mobileExists) {
        Swal.fire({
          icon: 'error',
          title: 'Registration Failed',
          text: 'Mobile number is already registered. Please use a different mobile number.',
        });
        return;
      }
  
      const formData = new FormData();
      formData.append('name', name);
      formData.append('email', email);
      formData.append('password', password);
      formData.append('mobile', mobile); 
      formData.append('profileImage', profileImage);
     
  
      const response = await axios.post(`${port}/api/register`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
  
      const data = response.data;
  
      if (response.data.success) {
        await Swal.fire({
          icon: 'success',
          title: 'Registration Successful',
          text: 'You can now log in with your credentials.',
        });
        router.push('/login');
      } else {
        await Swal.fire({
          icon: 'error',
          title: 'Registration Failed',
          text: data.message || 'An error occurred during registration.',
        });
      }
    } catch (error) {
      await Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'An error occurred during registration.',
      });
      console.error('Error during registration:', error);
    }
  };
  


  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  
  return (
    <>
    <Head>
      <title>Register Now - Global Indians Info</title>
    </Head>
    <div className="login-background mt-5">
        <div className="overlay"></div>
    </div>
    
    <div className="bg-white p-6 px-8 rounded shadow-md  register-form ">

   
   
        
        <div className='row d-flex flex-column justify-content-center bg-white  '>
        <div className='col-md-12     '>
        <div className="text-center pb-3">
          <img src="/uploads/images/site-logo4.png" alt="Logo" className="mb-8 site-logo" />
        </div>

        <h1 className="text-center font-bold mb-4">Register</h1>

       
        <form onSubmit={isLogin ? onSubmit : handleRegistration} encType="multipart/form-data">
          {!isLogin && (
            <div className="mb-3 d-flex flex-column">
             
              <input
                type="text"
                id="name"
                name="name"
                placeholder='Enter Your Name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
          )}
          <div className="mb-3 d-flex flex-column">
          
            <input
              type="email"
              id="email"
              name="email"
              placeholder='Enter Email Address'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-3 d-flex flex-column">
           
            <div className="position-relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                value={password}
                placeholder='Enter Password'
                onChange={(e) => setPassword(e.target.value)}
                className="w-100 px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              />
              <span
                className="position-absolute top-50 end-0 translate-middle cursor-pointer"
                onClick={handleTogglePasswordVisibility}
              >
                {showPassword ? <FaEyeSlash className="w-5 h-5 site-primary" /> : <FaEye className="w-5 h-5 site-primary" />}
              </span>
            </div>
          </div>
        </form>
      </div>
      <div>
        <div className="mb-3 d-flex flex-column">
        
          <input
            type="text"
            id="mobile"
            name="mobile"
            value={mobile}
            placeholder='Mobile No.'
            onChange={(e) => setMobile(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        

       
       
        <div className="mb-3 d-flex flex-column">
          <label htmlFor="profileImage" className="block text-gray-700 text-sm font-semibold mb-2">Profile Image</label>
          <input
            type="file"
            id="profileImage"
            name="profileImage"
            onChange={(e) => setProfileImage(e.target.files[0])}
            className="w-100 px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <button onClick={handleRegistration} className="w-100 button text-white py-2 rounded-md">
          Sign Up
        </button>
        <p className="m-2 mt-4 text-center text-gray-600 text-sm">
          {isLogin ? "Don't have an account?" : 'Already have an account? '}
          <Link href="/login" className="button">
            {isLogin ? ' Sign Up' : ' Login'}
          </Link>
        </p>
  
      </div>
      </div>
    </div>
  </>
  );
};

AuthForm.layout = 'blank';

export default AuthForm;
