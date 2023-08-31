import { FaWhatsapp, FaLinkedin } from 'react-icons/fa';
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
      title: "Join UK Jobs WhatsApp Group",
      content:
        "Here is a professional forum to share and discuss JOBS & Internships related opportunities and queries in the UK. To join this curated group of Professionals, sharing “Your LinkedIn Profile Link” is mandatory. All requests are thoroughly verified before providing approval to join the group. This is a “MANDATORY” requirement.",
      buttonText: "Join WhatsApp Group",
      buttonLink: "https://chat.whatsapp.com/H2kjm74Dao9FNT0xWn6P9s",
      icon: <FaWhatsapp className="ml-1" />,
    },
    {
      title: "Enhance Your Resume with Expert Review & Writing Support",
      content:
        "Elevate your chances of success with the guidance of a skilled resume writer. To Access Professional Assistance, Connect with Bidisha at wa.me/447867090359. Get a FREE RESUME REVIEW by reaching out to Bidisha. Explore additional job-searching tools and insights at www.bidisharay.com. She can also help with Interview Preparation. Prepare for interviews with confidence and make strides in your career journey.",
        buttonLink: " ",
    },
    {
      title: "Join UK Jobs & Internships LinkedIn Group",
      content: "For regular updates, join the LinkedIn group.",
      buttonText: "Join LinkedIn Group",
      buttonLink: "https://www.linkedin.com/groups/12883381/",
      icon: <FaLinkedin className="ml-1" />,
    },
    {
      title: "For Hiring Support - UK Recruiters Group",
      content:
        "Join a professional networking group for all UK-based recruiters. Share your hiring requirements for jobs and internships to hire highly qualified and experienced resources quickly. Network with other recruiters to exchange hiring-related information, news, and trends.",
      buttonText: "Join Recruiters Group",
      buttonLink: "https://chat.whatsapp.com/E0fXMDA3NsnH7EsMaESWw3",
      icon: <FaWhatsapp className="ml-1" />,
    },
  ];
  return (
    <div className="container text-center">
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
      <div className="row">
        {sections.map((section, index) => (
          <div className="col-md-6 text-center" key={index}>
            <section className="mb-5">
             
              <div className="body text-dark">
              <h4>{section.title}</h4>
              <p className="text-center">{section.content}</p>
              <Link href={section.buttonLink}> <button className="button">{section.icon}{section.buttonText}</button></Link>
              </div>
            </section>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};


export default JobsLayout;
