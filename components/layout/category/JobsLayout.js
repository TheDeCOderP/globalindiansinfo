import React from 'react';
import { FaWhatsapp, FaLinkedin } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import Articles from '@/api/articles/articles';
import { useRouter } from 'next/router';

const JobsLayout = () => {
  const router = useRouter();
  const { category } = router.query;
  const categoryBlogs = Articles.filter(article => article.categories.includes(category));

  return (
    <section className="category_page">
      <div className="category_pages_banner">
        <h2 className="capitalize text-center">{category}</h2>
      </div>
      <section className="section">
      <section className="category-body">
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-6">
              <h2>Join UK Jobs WhatsApp Group</h2>
              <p>
                Here is a professional forum to share and discuss JOBS & Internships related opportunities and queries in the UK.
                To join this curated group of Professionals, sharing “Your LinkedIn Profile Link” is mandatory. All requests are thoroughly verified before providing approval to join the group. This is a “MANDATORY” requirement.
              </p>
              <a href="https://chat.whatsapp.com/H2kjm74Dao9FNT0xWn6P9s" className="btn btn-primary">
                Join WhatsApp Group <FaWhatsapp className="ml-1" />
              </a>
            </div>
            <div className="col-md-6">
              <h2>Enhance Your Resume with Expert Review & Writing Support</h2>
              <p>
                Elevate your chances of success with the guidance of a skilled resume writer.
              </p>
              <p>
                To Access Professional Assistance, Connect with Bidisha at{' '}
                <a href="https://wa.me/447867090359">wa.me/447867090359</a>.
              </p>
              <p>Get a FREE RESUME REVIEW by reaching out to Bidisha.</p>
              <p>
                Explore additional job-searching tools and insights at{' '}
                <a href="https://www.bidisharay.com">www.bidisharay.com</a>.
              </p>
              <p>
                She can also help with Interview Preparation. Prepare for interviews with confidence and make strides in
                your career journey.
              </p>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-6">
              <h2>Join UK Jobs & Internships LinkedIn Group</h2>
              <p>For regular updates, join the LinkedIn group.</p>
              <a href="https://www.linkedin.com/groups/12883381/" className="btn btn-primary">
                Join LinkedIn Group <FaLinkedin className="ml-1" />
              </a>
            </div>
            <div className="col-md-6">
              <h2>For Hiring Support - UK Recruiters Group</h2>
              <p>Join a professional networking group for all UK-based recruiters.</p>
              <p>
                Share your hiring requirements for jobs and internships to hire highly qualified and experienced
                resources quickly.
              </p>
              <p>Network with other recruiters to exchange hiring-related information, news, and trends.</p>
              <a href="https://chat.whatsapp.com/E0fXMDA3NsnH7EsMaESWw3" className="btn btn-primary">
                Join Recruiters Group <FaWhatsapp className="ml-1" />
              </a>
            </div>
          </div>
        </div>

        <div className="container mt-5">
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
      </section>
    </section></section>
  );
};

export default JobsLayout;
