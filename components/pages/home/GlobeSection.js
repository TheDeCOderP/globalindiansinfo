import Globe from './Globe.js';
const GlobeSection = () => {
    return (
 <div className="globe_section">
    <div className="row">
        <div className="about_us col-sm-12 col-md-6 col-lg-6 box-shadow">
         <h1 className="text-center">We Are <span className="green">Global Indians</span></h1>
         <p><b>Welcome to "Global Indians Info"! </b> 
        At Global Indians Info, we believe in the power of the global Indian community. We are a vibrant and diverse group of individuals, brought together by our shared passion for going global, building careers overseas, and embracing the opportunities that the world has to offer.<br />
        Our community is your bridge to success, connecting you with like-minded individuals who have already excelled on their global journeys. Whether you're a student aspiring to study abroad, a professional seeking international job opportunities, an entrepreneur with dreams of expanding your business worldwide, or a travel enthusiast eager to explore the globe, we've got you covered. <br />
       Explore our website to access a wealth of knowledge, news, and articles that will help you achieve your dream of going global. Remember, there's no place in the world that's outside our vicinity when we come together as "Global Indians." Let us be your trusted guide on this exciting journey!
       </p>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6 hide_on_mobile">
         <Globe/>
        </div>
    </div>
 </div>
    )
}
export default GlobeSection;