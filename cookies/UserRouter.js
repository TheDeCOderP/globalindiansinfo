import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { parseCookies } from 'nookies';

function UserRouter({ children }) {
  const router = useRouter();
  const cookies = parseCookies();

  // Define the public routes that do not require authentication
  const publicRoutes = ['/login', '/register', '/', '/about', '/contact', '/forgot-password', '/magazines']; // Add static public routes here

  useEffect(() => {
    const isAuthenticated = cookies.gii;

    // Check if the current route is public (including dynamic reset-password routes)
    const isPublicRoute = publicRoutes.includes(router.pathname) || router.pathname.startsWith('/reset-password');

    // Check if the current route is public (including dynamic reset-password routes)
    const isAdminPath = publicRoutes.includes(router.pathname) || router.pathname.startsWith('/pcsadmin');

    // If the user is not authenticated and tries to access a protected route
    if (!isAuthenticated && !isPublicRoute && !isAdminPath) {
      // Show an alert message
      alert('You need to log in to access this page.');

      // Redirect immediately to login
      setTimeout(() => {
        router.replace('/login');
      }, 0);
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.pathname]);

  return <div>{children}</div>;
}

export default UserRouter;
