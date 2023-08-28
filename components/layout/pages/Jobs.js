import { FaWhatsapp, FaLinkedin } from 'react-icons/fa';

const JobsLayout = () => {
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
    <div className="container">
      <div className="row">
        {sections.map((section, index) => (
          <div className="col-md-6 text-center mb-4 " key={index}>
            <div className="body text-dark jobs_bg">
            <h4>{section.title}</h4>
            <p className="text-center">{section.content}</p>
            {section.buttonLink && (
              <a href={section.buttonLink} className="btn button">
                {section.buttonText} {section.icon}
              </a>
            )}
          </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobsLayout;
