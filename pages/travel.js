
import TravelLayout from '@/components/layout/pages/Travel';
import TravelArticle from '@/components/pages/articles/categories/travel'


const Travel = () => {
    
    return (
        <section className="section">
        <TravelLayout/>
       <TravelArticle/>
      </section>
      
    )
}

Travel.layout = "other";
export default Travel;