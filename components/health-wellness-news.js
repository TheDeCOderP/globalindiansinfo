import NewsComponent from './healthnews'
import Banner from './Banner'

const HealthNews = () => {
    
  return (
      <>
      <Banner 
  title="📰 Latest Healthcare, Fitness, and Nutrition News 📰" 
  description="Stay informed with the latest news in healthcare, fitness, and nutrition. 
  This page provides the most current articles and insights to keep you updated on trends and developments in these important fields." 
/>

        <NewsComponent/>
    

     
    </>
    
  )
}

export default HealthNews;