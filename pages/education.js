

import EducationLayout from '@/components/layout/pages/Education';
import EducationArticle from '@/components/pages/articles/categories/education'


const Education = () => {
    
    return (
        <section className="section container">
        <EducationLayout/>
        <EducationArticle/>
        
      </section>
      
    )
}

Education.layout = "other";
export default Education;