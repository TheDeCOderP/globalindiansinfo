import Image from "next/image";

import Link from 'next/link';
import { FaFlag, FaBusinessTime, FaStar,FaUsers, FaGraduationCap} from 'react-icons/fa';
const EventsLayout = () => {
  const EventGet = [
  
    {
   "id": 1,
   "title": "Submit an Event",
   "description": "Do you have an event catering to the Global Indians community? Mail us the details of the events and we'll consider featuring it on our Events page.",
   "imagePath":"uploads/images/jobs/submit-button.png",
   "email": "Email: info@prabisha.com.",

 
 },
 {
   "id": 2,
   "title": "Stay Connected",
   "description": "Follow us on social media, subscribe to our newsletter, or join our community forum to stay up-to-date with the latest event announcements, highlights, and     discussions",
   "imagePath": "uploads/images/jobs/stay.jpeg",
   "socialMediaLink":"https://www.facebook.com/groups/globalindiansinfo/",
  
 
 },
 {
   "id": 3,
   "title": "Contact Us",
   "description":"If you have any questions, suggestions, or if you're interested in partnering with us for an event, please feel free to reach out to our team. We're here to assist you. ",
   "imagePath": "uploads/images/jobs/contact.jpg",
   "email": "Email: info@prabisha.com."
  
 },
]
  return (
    
 <>
 <div className="jobs_page  text-center">
    <div className="row">
        <div className="col-md-12 ">
          <section className="mb-5">
            <h1 className="text-center">Welcome to the Global Indians Info Events Page!</h1>
            <p className="text-center"> Here, we keep you updated on a wide range of events that cater to the Indian diaspora worldwide. Whether you're interested in cultural  <br/>festivals,networking opportunities, educational seminars, or business conferences, you'll find it all right here.
</p>
          </section>
        </div>
      </div>
      
      {/* <div className="event_page">
      <div className="event_row row">
        <div className="col-sm-12 col-md-6">
      <div className="image-box">
        <Image
          src="/uploads/images/jobs/upp.jpg"
          alt="Partner with Us"
          width={400} height={400}
          className="aspect-ratio"
        />
      </div>
    </div>
        <div className="event_content col-sm-12 col-md-6">
          <h2>Upcoming Events</h2>
          <p>
          Stay in the loop with our list of upcoming events that you won't want to miss. From celebratory festivals to thought-provoking webinars, discover exciting opportunities to connect with fellow Global Indians and engage with our vibrant community.

          </p>
        </div>
      </div>
      <div className="event_row ">
        <div className="event_content col-sm-12 col-md-6">
          <h2>Past Events</h2>
          <p>
          Take a journey through the memorable events we've hosted or covered in the past. Get a glimpse of the diverse cultural, educational, and networking experiences that have enriched the Global Indians Info community.
          </p>
        </div>
        <div className="col-sm-12 col-md-6">
      <div className="image-box">
        <Image
          src="/uploads/images/jobs/ideas.jpg" 
          alt="Partner with Us"
          width={400} height={300}
          className="aspect-ratio"
        />
      </div>
    </div>
      </div>
    </div> */}
<div className="container">
    <div className="event_page">
  <div className="event_row row">
    <div className="col-sm-12 col-md-6">
      <div className="image-box">
        <Image
          src="/uploads/images/jobs/upp.jpg"
          alt="Partner with Us"
          width={400}
          height={400}
          className="aspect-ratio"
        />
      </div>
      <div className="body text-dark ">
      <h2>Upcoming Events</h2>
      <p className="event_para text-center">
        Stay in the loop with our list of upcoming events that you won't want to miss. From celebratory festivals to thought-provoking webinars, discover exciting opportunities to connect with fellow Global Indians and engage with our vibrant community.
      </p>
      </div>
    </div>
    
    <div className="col-sm-12 col-md-6">
      <div className="image-box">
        <Image
          src="/uploads/images/jobs/ideas.jpg"
          alt="Partner with Us"
          width={400}
          height={300}
          className="aspect-ratio"
        />
      </div>
      <div className="body text-dark">
      <h2>Past Events</h2>
      <p className="event_para text-center">
        Take a journey through the memorable events we've hosted or covered in the past. Get a glimpse of the diverse cultural, educational, and networking  experiences that have enriched the Global Indians Info <br /> community.
      </p>
      </div>
    </div>
  </div>
</div>
</div>

<div className="container">
<h1 className=" text-center mt-5 mb-5">Event Categories</h1>
          <section className=" job mb-5">
            <div className="row ">
              <div className=" col-sm-12 col-md-3">
              <div className="box">
              <div className="event_icon text-center">
                  <FaFlag size={50} /> 
                  </div>
                <h4 className="text-center">Cultural Celebrations</h4>
                <p className="text-center">Explore our rich cultural heritage through festivals, music, dance, and art events.</p>
              </div>
              </div>
              <div className="col-sm-12 col-md-3">
              <div className="box">
              <div className="event_icon text-center">
                  <FaBusinessTime size={50} /> 
                  </div>

                <h4 className="text-center">Networking and Business </h4>
                <p className="text-center">Discover networking events, workshops and conferences designed to foster professional growth and collaboration.</p>
              </div>
              </div>
              <div className="col-sm-12 col-md-3">
              <div className="box">
              <div className="event_icon text-center">
                  <FaGraduationCap size={50} />
                  </div>
                <h4 className="text-center">Educational Seminars</h4>
                <p className="text-center">Stay informed about educational and informational seminars that empower the Global Indians community with knowledge and skills.</p>
              </div>
              </div>
              <div className="col-sm-12 col-md-3">
              <div className="box">
              <div className="event_icon text-center">
                  <FaStar size={50} />
                  </div>
                <h4 className="text-center">Featured Events</h4>
                <p className="text-center">Highlight special events or partnerships that are particularly noteworthy or timely.</p>
              </div>
              </div>
            </div>
          </section>
        </div>

     <div className="get_i container">
        <div className="row">
          {
            EventGet.map((item)=>(
            
                <div className="col-sm-12 col-md-4 col-lg-4 mb-4" key={item.id}>
              
                  <div className="image">
                    <Image src={`/${item.imagePath}`} width={400} height={300} className="aspect-ratio" alt="what-we-offer"></Image>
                </div>
                <div className="body text-dark">
                  <h4 className="text-center">{item.title}</h4>
                  <p>{item.description}</p>
                  {item.id === 2 && item.socialMediaLink ? (
                  <Link className="button" href={item.socialMediaLink} target="_blank" rel="noopener noreferrer">Follow Us</Link>
                ) : (
                  <Link className="button" href={`mailto:${item.email}`}>{item.email}</Link>
                )}           
            
                           
                  </div>
                
                  </div>

              )
            )
          
          }
        
        </div>
      </div>
      </div>
     </>
      
  );
};

export default EventsLayout;
