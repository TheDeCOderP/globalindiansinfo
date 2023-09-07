
import JobsLayout from '@/components/layout/pages/Jobs';
import JobsArticle from '@/components/pages/articles/categories/jobs'


const Jobs = () => {
    
    return (
        <section className="section">
        <JobsLayout/>
        <JobsArticle/>
       
      </section>
      
    )
}

Jobs.layout = "other";
export default Jobs;