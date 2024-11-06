import Image from 'next/image';
import Link from 'next/link';
import { FaUsers } from 'react-icons/fa'; // Community icon

const CommunitySection = () => {
  return (
    <section className=" container my-5">
      <div className="row align-items-center shadow p-4 rounded">
        {/* Image Column */}
        <div className="col-md-6 text-center">
          <img
            src="/uploads/community.jpg" // Replace with the path to your community image
            alt="Community"
            width={500}
            height={300}
            className="img-fluid rounded"
          />
        </div>
        
        {/* Content Column */}
        <div className="col-md-6">
          <div className="community-content">
          <FaUsers className="secondary-text community-icon me-2 mb-3" style={{ fontSize: '3rem' }} />

            <h2 className="mb-3 d-flex align-items-center">
               
              Join Our Community
            </h2>
            <p className="text-muted">
              Discover a thriving network of global Indians, where you can connect, share experiences, and collaborate on initiatives that make a difference. Our community fosters growth, learning, and a sense of belonging for individuals from diverse backgrounds.
            </p>
            <div className='pt-3'>
            <Link href="/community" passHref legacyBehavior className='pt-4'>
              <a className="button">Go to Community Page</a>
            </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
