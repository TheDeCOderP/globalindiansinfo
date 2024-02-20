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
    destroyCookie(null, 'realestate');
    router.push('/login');
  };

  return (
    <div className="container mx-auto my-8 ">
      <div className=" flex justify-center bg-green text-center h-32 ">
      <h1 className="text-3xl font-bold mb-4">My Account</h1>
      </div>
      {user ? (
        <div className="flex flex-col space-y-4">
          <div className="flex items-center">
            <FaUserCircle className="w-6 h-6 site-primary mr-2" />
            <p>
              Welcome,<b className='text-primary'> {user.name || 'Hello'}!</b>
            </p>
          </div>
          <div className="flex items-center">
            <FaEnvelope className="w-6 h-6 site-primary mr-2" />
            <p>
            <Link href={`mailto:${user.email}`}   > {user.email || 'No email available'} </Link>
            </p>
          </div>
          <div className="flex items-center">
            <FaMobile className="w-6 h-6 site-primary mr-2" />
            <p>
           <Link href={`tel:${user.mobile}`}   >{user.mobile || 'No mobile available'}</Link>
            </p>
          </div>
          <div
            className="flex items-center p-2 cursor-pointer hover:bg-gray-100"
            onClick={handleLogout}
          >
            <FaSignOutAlt className="w-6 h-6 site-primary mr-2" />
            Logout
          </div>
         
        </div>
      ) : null}
    </div>
  );
}

export default MyAccount;
