import Image from "next/image";
import { FaGlobe, FaEnvelope, FaMobile } from 'react-icons/fa';
import Link from "next/link"

const BusinessLayout  = () => {
  const sections = [
    {
      title: 'Business Expansion Strategies',
      content: 'Expert guidance on taking your business global, including market research and international partnerships.',
      imagePath: 'uploads/images/jobs/2.webp',
    },
    {
      title: 'Success Stories',
      content: 'Inspiring stories of Indian entrepreneurs who have achieved <br />global success.',
      imagePath: 'uploads/images/jobs/1.jpg',
    },
    {
      title: 'Resources',
      content: 'Tools and resources to help you navigate the complexities of <br />international business.',
      imagePath: 'uploads/images/jobs/R.jpg',
    },
    {
      title: 'Networking',
      content: 'Connect with fellow Indian entrepreneurs who share your<br/> global ambitions.',
      imagePath: 'uploads/images/jobs/networking.webp',
    },
  ];


  const prabishacontact = [
    {
      title:"+44 (0) 78670 90363",
      link:"tel:+44 (0) 78670 90363",
      icon:<FaMobile size={30} className="mr-5" />,
      
    },
    {
      title:"info@prabisha.com",
      link:"mailto:info@prabisha.com",
       icon:<FaEnvelope size={30} className="mr-5" />,
      
    },
   {
      title:"Visit Website",
      link:"https://www.prabisha.co.uk/",
      icon:<FaGlobe size={30} className="mr-5" />
      
    },
    
 ]


  return (
    <div className="section text-center">
      <div className="row">
        <div className="col-md-12">
          <section className="mb-5">
            <h1 className="text-center">Globalizing Your Business Ventures</h1>
            <p className="text-center">Are you an Indian entrepreneur with dreams of taking your business to international markets we are your dedicated partner in helping you expand and <br />thrive on a global scale. Our Business section provides you with the insights and resources you need to succeed in the global business landscape.</p>
          </section>
        </div>
      </div>
      <div className="row">
        {sections.map((section, index) => (
          <div className="col-md-6 text-center" key={index}>
            <section className="mb-5">
              <Image src={`/${section.imagePath}`} alt={section.title} className="aspect-ratio" width={400} height={300} />
              <div className="body text-dark">
              <h4>{section.title}</h4>
              <div
     className="text-center"
         dangerouslySetInnerHTML={{ __html: section.content }}
  />
              </div>
            </section>
          </div>
        ))}
      </div>
      <div className="container">
        <div className="row">
          <div className="prabisha_description text-center body text-dark mb-4 p-5">
       <p className="text-center">Having a dependable and trusted partner for essential business growth services is paramount in today's competitive landscape. Whether it's Website Development, Mobile App Development, SEO, Digital Marketing, Video Production, Book Cover Design, Book Publication, or HR Solutions like Talent Acquisition and Corporate Training, the right partner brings expertise, efficiency, and strategic insights. Their specialized knowledge ensures high-quality outcomes aligned with industry trends. By entrusting these tasks to experts, businesses can focus on core competencies, enhance efficiency, and achieve scalability. Reliable partners also save time, reduce costs, and provide comprehensive solutions under one roof. Moreover, their guidance fosters informed decision-making, helping businesses reach their goals effectively. Long-term partnerships cultivate trust and loyalty, facilitating seamless collaboration on future initiatives. Ultimately, a dependable partner isn't just a vendor; they're a key driver of growth, enabling businesses to thrive in the dynamic marketplace.</p>
         <h4>For all these services, you can get in touch with Prabisha Consulting</h4>
          <div className="container mt-5">
          <div className="row">
          {
            prabishacontact.map((item , index)=>(
              <div className="col-sm-12 col-md-4 col-lg-4" key={index}>
                <div className="prabisha_contacts">
                  <Link href={item.link} className="text-light">
                {item.icon}</Link> 
                <Link href={item.link} target="_blank" className="text-light">
            <span>{item.title}</span> </Link> 

              </div>
          </div>

            ))
           }
          </div>
          </div>
           </div>
        
          
        </div>
  
        <div className="row">
          <div className="col-md-12 m-4">
            <h1 className="text-center mt-2">Business Networking</h1>
            <h5 className="text-center mt-4">Presenting a fast-growing and vibrant UK based Business Network...</h5>
            <div className="text-center mt-4">
              <p className="text-center"> 
                In this group, all group members are encouraged to promote their genuine businesses, their products and services without any charges. Members can share Business Tips, Business News and Customer Feedbacks. They can even request for Business References in this group or may ask any business-related queries in this group.
                Together, let's make a vibrant business community which promotes business growth. Share and Invite your friends to Join this “UK Businesses” Community.
                Note:
               Only genuine business owners are allowed to join this group. Company Name and Company Number needs to be provided and you should be one of the directors / officers listed there.
                 This is an initiative by Prabisha Consulting and businesses working in similar areas will not be allowed due to conflict of interest: IT Solutions, Digital Marketing and HR Solutions.
                Admin’s decision on any matters will be final and binding. Any disrespect or deviation will lead to immediate removal from the group.
                Thanks for your kind understanding and support. Let’s grow this initiative together.
              </p>
              <a href="https://chat.whatsapp.com/LHOc67IrYBUFq3BajpQdRZ" className="btn button m-4" target="_blank">Join the Network</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


 
  
  export default BusinessLayout;
  