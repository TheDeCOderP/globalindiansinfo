import React from 'react';
import Image from 'next/image';

const sections = [
  {
    title: 'Study Abroad Guides',
    content: 'Detailed guides on choosing the right destination, universities, <br />scholarships and visa processes.',
    imagePath: 'uploads/images/education/study.jpg',
  },
  {
    title: 'Career Planning',
    content: 'Advice on aligning your education with your career goals <br /> and tips for success.',
    imagePath: 'uploads/images/education/career.jpg',
  },
  {
    title: 'Student Stories',
    content: 'Inspiring stories from fellow Indian students who have pursued <br />education abroad.',
    imagePath: 'uploads/images/education/student.jpg',
  },
  {
    title: 'Exam Prep',
    content: 'Resources and Tips to help you excel in standardized tests<br /> like GRE, TOEFL, and IELTS.',
    imagePath: 'uploads/images/education/exam.jpg',
  },
];

const EducationalJourney = () => {
  return (
    <div className=" text-center">
      <div className="row">
        <div className="col-md-12">
          <section className="mb-5">
            <h1 className='text-center'>Empowering Your Educational Journey</h1>
            <p className="text-center">Are you an Indian student aspiring to study abroad? We at <span className='green'>Global Indians </span>info are your dedicated partner in making your dreams of international education a reality.<br />
             Our Education section is designed to provide you with valuable insights, resources, and support as you get on this life-changing journey.</p>
          </section>
        </div>
      </div>

      <div className="row">
        {sections.map((section, index) => (
          <div className="col-md-6 text-center" key={index}>
            <section className="mb-5">
              <Image src={`/${section.imagePath}`} alt={section.title} className="aspect-ratio" width={800} height={800} />
              <div className="body text-dark">
              <h4>{section.title}</h4>
              <div
     className="text-center"
         dangerouslySetInnerHTML={{ __html: section.content }}
  />              </div>
            </section>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationalJourney;
4