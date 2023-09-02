import { FaWhatsapp, FaLinkedin, FaPencilAlt, FaLightbulb , FaBolt,FaFlag} from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';


const JobsLayout = () => {
  const JobTitles = [
    {
      title: 'Job Search Tips',
      content: 'Expert guidance on finding and applying for jobs abroad.',
      imagePath: 'uploads/images/jobs/j1.jpg',
    },
    {
      title: 'Career Development',
      content: 'Strategies to help you excel in your international career.',
      imagePath: 'uploads/images/jobs/3.jpg',
    },
    {
      title: 'Success Stories',
      content: 'Real-life stories of Indian professionals who have made it big globally.',
      imagePath: 'uploads/images/jobs/5.jpg',
    },
    {
      title: 'Networking',
      content: 'Connect with global Indian professionals and expand your professional network.',
      imagePath: 'uploads/images/jobs/networking.webp',
    },
  ];



  const sections = [
    {
      title: " Join UK Jobs WhatsApp Group",
     
      buttonText: " Join WhatsApp Group",
      buttonLink: "https://chat.whatsapp.com/H2kjm74Dao9FNT0xWn6P9s",
      icon: <FaWhatsapp size={20}  className="ml-1" />,
 
    },
    {
      title: "For Hiring Support - UK Recruiters Group",
      buttonText: " Join Recruiters Group",
      buttonLink: "https://chat.whatsapp.com/E0fXMDA3NsnH7EsMaESWw3",
      icon: <FaWhatsapp size={20} className="ml-1" />,
    },

    {
      title: "Enhance Your Resume with Expert Review & Writing Support",
      buttonText: " Get Started",
      buttonLink: "https://www.bidisharay.com",
      icon: <FaPencilAlt size={20} className="ml-1" />,
    },
    {
      title: "Join UK Jobs & Internships LinkedIn Group",

      buttonText: " Join LinkedIn Group",
      buttonLink: "https://www.linkedin.com/groups/12883381/",
      icon: <FaLinkedin size={20} className="ml-1" />,
    },
  ];
  return (
    <div className="jobs_page container text-center">
      <div className="row">
        <div className="col-md-12">
          <section className="mb-5">
            <h2>Exploring International Career Opportunities</h2>
            <p className="text-center">Are you a professional looking to take your career to the global stage? "Global Indians Info" is your trusted resource for international job opportunities, career advice, and professional growth. Our Jobs section is designed to empower you on your path to success.</p>
          </section>
        </div>
      </div>

      <div className="row">
        {JobTitles.map((section, index) => (
          <div className="col-md-6 text-center" key={index}>
            <section className="mb-5">
              <Image src={`/${section.imagePath}`} alt={section.title} className="aspect-ratio" width={400} height={300} />
              <div className="body text-dark">
              <h4>{section.title}</h4>
              <p className="text-center">{section.content}</p>
              </div>
            </section>
          </div>
        ))}

        <div className="container">
          <section className=" job mb-5">
            <div className="row ">
              <div className=" col-md-4">
              <div className="box">
              <div className="text-center">
                  <FaLightbulb size={50} /> {/* Use the icon component */}
                  </div>
                <h4 className="text-center">Unlock Limitless Career Horizons </h4>
                <p className="text-center">Welcome to a world where dreams have no boundaries. Our Job Page is your passport to a universe of career possibilities. Whether you're in India, an NRI, or a PIO, we're here to guide you towards the job of your dreams.</p>
              </div>
              </div>
              <div className=" col-md-4">
              <div className="box">
              <div className="text-center">
                  <FaBolt size={50} /> 
                  </div>

                <h4 className="text-center">Empower Your Career Journey </h4>
                <p className="text-center">Your dream job is within reach. Let's partner to navigate the path that leads to your professional success. We're more than a page  we're your catalyst for global career achievements.</p>
              </div>
              </div>
              <div className=" col-md-4">
              <div className="box">
              <div className="text-center">
                  <FaFlag size={50} />
                  </div>
                <h4 className="text-center">Ready to Launch Your Career Odyssey</h4>
                <p className="text-center">The key to your dream job is just a click away. Dive into a world of job opportunities, choose your path, and set your career in motion with our Job Page. Your journey to success begins here.</p>
              </div>
              </div>
            </div>
          </section>
        </div>
      </div>
        <div className=" page row">
        <div className="col-md-12">
          <section className=" mb-5">
            <h2>🚀 Why Choose Our Job Page?</h2>
            <div className="row">
              <div className="col-md-4">
                <Image src="/uploads/images/jobs/global.jpeg" alt="Image 1" width={300} height={200} />
                <h4 className="text-center">Global Reach</h4>
                <p className="text-center">Explore openings from across the globe, ensuring you have access to diverse job markets.</p>
              </div>
              <div className="col-md-4">
                <Image src="/uploads/images/jobs/expert.jpg" alt="Image 2" width={300} height={200} />
                <h4 className="text-center">Expert Insights</h4>
                <p className="text-center">Gain valuable insights from career experts who understand the dynamics of international job markets.</p>
              </div>
              <div className="col-md-4">
              <Image src="/uploads/images/jobs/box.png" alt="Image 3" width={300} height={200} />
                <h4 className="text-center">Easy Navigation</h4>
                <p className="text-center">Our user-friendly platform ensures you find the perfect job with just a few clicks.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className=" page row">
        <div className="col-md-12">
          <section className=" mb-5">
            <h2>🌐 Discover a World of Possibilities</h2>
            <div className="row">
              <div className="col-md-4">
                <Image src="/uploads/images/jobs/a.webp" alt="Image 1" width={300} height={200} />
                <h4 className="text-center">Career Odyssey</h4>
                <p className="text-center"> Explore job openings that span industries and sectors, connecting you with your desired role.</p>
              </div>
              <div className="col-md-4">
                <Image src="/uploads/images/jobs/b.jpeg" alt="Image 2" width={300} height={200} />
                <h4 className="text-center">Virtual Ventures</h4>
                <p className="text-center">Embrace remote work opportunities that break down geographical barriers.</p>
              </div>
              <div className="col-md-4">
              <Image src="/uploads/images/jobs/n.jpeg" alt="Image 3" width={300} height={200} />
                <h4 className="text-center">NRI Success Stories</h4>
                <p className="text-center">Read inspiring stories of NRIs who triumphed in global job markets.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="jobs_page row" 
>
        {sections.map((section, index) => (
          <div className="col-md-6 text-center" key={index}>
            <section className="mb-5">
              <div className="body text-dark" style={{ backgroundColor: 'ffedd8' }}>
              <h4>{section.title}</h4>
              {/* <p className="text-center">{section.content}</p> */}
              <Link href={section.buttonLink}> <button className="button">{section.icon}{section.buttonText}</button></Link>
              </div>
            </section>
          </div>
        ))}
      </div>  
    </div>
  );
};
export default JobsLayout;
