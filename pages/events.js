
import EventsLayout from '@/components/layout/pages/Events';
import EventsArticles from '@/components/pages/articles/categories/events'

const Events = () => {

    

    
    return (
        <section className="section container">
        <EventsLayout />
        <EventsArticles/>
     
       
      </section>
      
    )
}

Events.layout = "other";
export default Events;