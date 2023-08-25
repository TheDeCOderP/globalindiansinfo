import React from 'react';
import { useRouter } from 'next/router';
import JobsLayout from '@/components/layout/category/JobsLayout'
import BusinessLayout from '@/components/layout/category/BusinessLayout'
import DefaultLayout from '@/components/layout/category/DefaultLayout';

const CategoryPage = () => {
  const router = useRouter();
  const { category } = router.query;

  if (category === 'business') {
    return (
      <><BusinessLayout /></>
    )
  }
  else if (category === 'jobs') {
    return (
      <><JobsLayout /></>
    )

  } else {
    return (
      <> <DefaultLayout /></>
    );
  };



}

export default CategoryPage;
