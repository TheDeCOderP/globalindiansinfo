import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { parseCookies, setCookie } from 'nookies';

function UserRouter({ children }) {
  const router = useRouter();
  const cookies = parseCookies();

  // Define the public routes that do not require authentication
  const publicRoutes = ['/login', '/register', '/', '/about', '/contact', '/forgot-password', '/magazines'];

  useEffect(() => {
    const isAuthenticated = cookies.gii;

    // Check if the current route is public (including dynamic reset-password routes)
    const isPublicRoute = publicRoutes.includes(router.pathname) || router.pathname.startsWith('/reset-password');
    const isAdminPath = router.pathname.startsWith('/pcsadmin');

    // If the user is not authenticated and tries to access a protected route
    if (!isAuthenticated && !isPublicRoute && !isAdminPath) {
      // Show an alert message
      alert('You need to log in to access this page.');

      // Save the attempted path in cookies for redirecting after login
      setCookie(null, 'redirectPath', router.pathname, { path: '/' });

      // Redirect to login with the redirect path
      router.replace(`/login?redirect=${router.pathname}`);
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.pathname]);

  return <div>{children}</div>;
}

export default UserRouter;
