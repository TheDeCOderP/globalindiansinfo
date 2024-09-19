
import BusinessLayout from '@/components/layout/pages/Business';
import BusinessArticle from '@/components/pages/articles/categories/business'

const Business = () => {
   
    

    
    return (
   
        <section className="section">
        <BusinessLayout/>
        <BusinessArticle/>
        
      </section>
    
    ) 
}

Business.layout = "other";
export default Business;