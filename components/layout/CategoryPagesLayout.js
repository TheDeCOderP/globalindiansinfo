
import React from 'react';
import TopBar from '../header/TopBar';
import BottomBar from '../header/BottomBar';
import Footer from '../Footer';
import { useRouter } from 'next/router';



const CategoryPageLayout = ({ children }) => {
  const router = useRouter();

    const { category } = router.query;

  return (
    <>
     <header> <TopBar/>
     <BottomBar/>
     </header>
     <div className='category_pages_banner'>
    
     <h2 className="capitalize text-center">{category}</h2>
        </div>
      {children}
      <footer><Footer/></footer>
      </>
  );
};

export default CategoryPageLayout;
