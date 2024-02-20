import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { parseCookies } from 'nookies';
import { FaUserCircle, FaEnvelope, FaSignOutAlt, FaPhone, FaMobile } from 'react-icons/fa'; // Import icons from react-icons
import { destroyCookie } from 'nookies';
import Link from 'next/link';

function MyAccount() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const cookies = parseCookies();
    const storedUserData = cookies.gii;

    if (!cookies.gii || !storedUserData) {
      router.push('/');
    } else {
      // Parse the JSON string to get the complete user details
      const userData = JSON.parse(storedUserData);
      setUser(userData);
    }
    
  }, [router.asPath]);


  const handleLogout = () => {
    destroyCookie(null, 'gii');
    router.push('/login');
  };

  return (
    <div className="section mx-auto mt-3">
        <h1 className="text-center font-bold">My Account</h1>
      <div className="row flex justify-content-center bg-green text-center py-4">
      <div className="col-sm-12 col-md-8 box-shadow p-4">
     
      {user ? (
        <div className="mt-4">
          <div className='col d-flex mb-3'>
          {user.profileImage ? (
              <img src={user.profileImage} className="my-account w-5 h-5 site-primary pl-2" />
            ) : (
              <img
                src="/user.jpg"  // Replace with the path to your default image
                className="w-2 h-2 user_logo site-primary ml-1"
                alt="User"
              />
            )}
            </div>
          <div className="flex items-center align-items-center mb-2">
            
            <FaUserCircle className="w-6 h-6 site-primary mr-2" />
            <p className="text-primary font-semibold m-2">
              Welcome, {user.name || 'Hello'}!
            </p>
          </div>
          <div className="flex items-center align-items-center mb-2">
            <FaEnvelope className="w-6 h-6 site-primary mr-2" />
            <p className='m-2'>
              Email: <Link href={`mailto:${user.email}`}>{user.email || 'No email available'}</Link>
            </p>
          </div>
          <div className="flex j align-items-center mb-2">
            <FaMobile className="w-6 h-6 site-primary mr-2" />
            <p className='m-2'>
              Mobile: <Link href={`tel:${user.mobile}`}>{user.mobile || 'No mobile available'}</Link>
            </p>
          </div>
          <button
            className=" flex align-items-center align-item-center button mt-4 mb-4"
            onClick={handleLogout}
          >
            <FaSignOutAlt className="w-6 h-6 mr-2" />
            <p className='m-0'>Logout</p>
          </button>
        </div>
      ) : null}
    </div>
    </div>
    </div>
  );
}

export default MyAccount;
