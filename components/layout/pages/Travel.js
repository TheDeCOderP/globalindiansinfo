import { FaWhatsapp, FaLinkedin,FaArrowRight, FaLightbulb , FaBolt,FaFlag} from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';


const TravelsLayout = () => {
  const JobTitles = [
    {
      title: 'Travel Guides',
      content: 'Detailed travel guides to exciting destinations around the world.',
      imagePath: 'uploads/images/jobs/x.jpeg',
    },
    {
      title: 'Travel Tips',
      content: 'Practical advice for smooth and enjoyable international travel.',
      imagePath: 'uploads/images/jobs/y.jpeg',
    },
    {
      title: 'Cultural Insights',
      content: 'Learn about the rich cultures and traditions of different countries.',
      imagePath: 'uploads/images/jobs/z.jpg',
    },
    {
      title: 'Travelers Stories',
      content: 'Personal narratives and adventures from global Indian travellers.',
      imagePath: 'uploads/images/jobs/xx.jpeg',
    },
  ];



 
  return (
    <div className="jobs_page container text-center">
      <div className="row">
        <div className="col-md-12">
          <section className="mb-5">
            <h1 className='text-center'>Exploring the World as a Global Indian</h1>
            <p className="text-center">Are you a travel enthusiast eager to explore the world? Global Indians Info is your travel companion, providing you<br /> with travel guides, tips, and personal stories from fellow global Indians who have traversed the globe.</p>
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



     
      </div>  
    </div>
  );
};
export default TravelsLayout;
