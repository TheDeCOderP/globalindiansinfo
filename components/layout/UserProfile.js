import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { parseCookies } from 'nookies';
import { UserCircleIcon, ArrowRightCircleIcon } from '@heroicons/react/24/outline';
import { destroyCookie } from 'nookies';
import Link from 'next/link';

function AdminProfile({ children }) {
  const [user, setUser] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const cookies = parseCookies();
    const storedUserData = cookies.gii;

    if (!cookies.gii || !storedUserData) {
      setUser(null);
    } else {
      // Parse the JSON string to get the complete user details
      const userData = JSON.parse(storedUserData);
      setUser(userData);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const handleLogout = () => {
    destroyCookie(null, 'gii');
    router.push('/login');
  };

  return (
    <div className="container">
      {user ? (
        <div className="d-flex align-items-center justify-content-center">
          <div
            className="d-flex align-items-center justify-content-center"
            onClick={() => setShowDropdown(!showDropdown)}
          >
           <p className='too-small m-0 p-2'>{user.name}</p> 
            {user.profileImage ? (
              <img src={user.profileImage} className="user_logo w-5 h-5 site-primary pl-2" />
            ) : (
              <img
                src="/user.jpg"  // Replace with the path to your default image
                className="w-2 h-2 user_logo site-primary ml-1"
                alt="User"
              />
            )}
          </div>
          {showDropdown && (
            <div className='position-relative profile-dropdown'>
  <div className="absolute-positioning position-absolute translate-middle p-2 bg-white border rounded shadow-md z-9999">
    <div className="d-flex align-items-center p-2 cursor-pointer hover-bg-gray-100 too-small">
     
      <Link href="/account">My Account</Link>
    </div>
  
  <div
    className="d-flex align-items-center p-2 hover-bg-gray-100 too-small"
    onClick={handleLogout}
    style={{ cursor: 'pointer' }} // Add this style
  >
    Logout
  </div>


  </div>
  </div>
)}

        </div>
      ) : (
        <div className="text-center">
          <Link href="/login" legacyBehavior>
            <a className="button">Login Now</a>
          </Link>
        </div>
      )}
      {children}
    </div>
  );
}

export default AdminProfile;
