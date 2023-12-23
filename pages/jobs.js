
import JobsLayout from '@/components/layout/pages/Jobs';
import JobsArticle from '@/components/pages/articles/categories/jobs'
import Experts from '@/components/Experts';


const Jobs = () => {
    
    return (
        <section className="section">
        <JobsLayout/>
       
        <Experts/>
        <JobsArticle/>
       
      </section>
      
    )
}

Jobs.layout = "other";
export default Jobs;