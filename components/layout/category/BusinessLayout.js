import React from 'react';
import { useRouter } from 'next/router';
import Articles from '@/api/articles/articles'
import Image from 'next/image';
import Link from 'next/link';

const JobsLayout = () => {
  const router = useRouter();
  const { category } = router.query;
  const categoryBlogs = Articles.filter(article => article.categories.includes(category));

   
  return (
    <section className="category_page">
       <div className='category_pages_banner'>
    
    <h2 className="capitalize text-center">{category}</h2>
       </div>
       <section className="section">
    <div className="container">
    
    
    <div className="row">
        
        <div className="col-md-4 mb-4 fade show">
            <div className="card">
                <img src="/uploads/images/categories/business/it.jpg" className="card-img-top" alt="IT Solutions"/>
                <div className="card-body">
                    <h5 className="card-title">IT Solutions</h5>
                    <p className="card-text">Website & App development</p>
                    <a href="#" className="btn button">Learn More</a>
                </div>
            </div>
        </div>

        <div className="col-md-4 mb-4 fade show">
            <div className="card">
                <img src="/uploads/images/categories/business/digital.jpg" className="card-img-top" alt="Digital Marketing"/>
                <div className="card-body">
                    <h5 className="card-title">Digital Marketing</h5>
                    <p className="card-text">SEO, SMM, Graphic Design, Video & Animation</p>
                    <a href="#" className="btn button">Learn More</a>
                </div>
            </div>
        </div>

        
        <div className="col-md-4 mb-4 fade show">
            <div className="card">
                <img src="/uploads/images/categories/business/hr.jpg" className="card-img-top" alt="HR Solutions"/>
                <div className="card-body">
                    <h5 className="card-title">HR Solutions</h5>
                    <p className="card-text ">Talent Acquisition, VA, Part-Time Staff, Contract Jobs, Interns</p>
                    <a href="#" className="btn button ">Learn More</a>
                </div>
            </div>
        </div>
    </div>

    
    <div className="row">
        <div className="col-md-12 m-4">
            <h2 className="text-center mt-2">Business Networking</h2>
            <h5 className="text-center mt-4">Presenting a fast-growing and vibrant UK based Business Network...</h5>
            <div className="text-center mt-4">
            <p>In this group, all group members are encouraged to promote their genuine businesses, their products and services without any charges. Members can share Business Tips, Business News and Customer Feedbacks. They can even request for Business References in this group or may ask any business-related queries in this group.
Together, let's make a vibrant business community which promotes business growth. Share and Invite your friends to Join this “UK Businesses” Community.
Note:
Only genuine business owners are allowed to join this group. Company Name and Company Number needs to be provided and you should be one of the directors / officers listed there.
This is an initiative by Prabisha Consulting and businesses working in similar areas will not be allowed due to conflict of interest: IT Solutions, Digital Marketing and HR Solutions.
Admin’s decision on any matters will be final and binding. Any disrespect or deviation will lead to immediate removal from the group.
Thanks for your kind understanding and support. Let’s grow this initiative together.
</p>
                <a href="https://chat.whatsapp.com/LHOc67IrYBUFq3BajpQdRZ" className="btn btn-success m-4">Join the Network</a>
            </div>
        </div>
    </div>

     
     
      <div className="row">
        {categoryBlogs.map(item => (
          <div key={item.id} className="article_column col-sm-12 col-lg-4 col-md-4">
            <Link href={`/article/${item.slug}`}>
              <div className="blog_image">
                <Image src={`/${item.imagepath}`} width={300} height={300} alt="blog_image" />
              </div>
              <div className="article_body">
                <h3>{item.title}</h3>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
    </section></section>
  );
};


export default JobsLayout;
