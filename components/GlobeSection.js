import Globe from './Globe.js';
const GlobeSection = () => {
    return (
 <div className="globe_section container">
    <div className="row">
        <div className="about_us col-sm-12 col-md-6 col-lg-6">
         <h1>We Are <span className="green">Global Indians</span></h1>
         <p>As our name suggests - This community is made by Indians from all over the globe to share their knowledge and help our community passionate about going global or building and pursuing a career overseas. We share Knowledge, News, Important Articles or what have you to achieve that dream of going Global Because "WE ARE GLOBAL INDIANS" And there's no place that's outside our vicinity - All you need is the right guide!

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