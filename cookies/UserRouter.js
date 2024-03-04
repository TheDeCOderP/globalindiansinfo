import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { parseCookies } from 'nookies';

function AdminRouter({ children }) {
  const [val, setVal] = useState(false);
  const router = useRouter();
  const cookies = parseCookies();

  useEffect(() => {
    // Redirect to login or register page if not authenticated
    if (!cookies.gii && router.pathname !== '/login') {
      router.push('/login');
    }
  }, []); // <-- Add an empty dependency array

  return <div>{children}</div>;
}

export default AdminRouter;
