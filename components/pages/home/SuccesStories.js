// Import necessary dependencies
import React from 'react';

// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

// Your Next.js component
const SuccessStories = () => {
    return (

        <div className="row  flex justify-content-center">
            <div className="col-md-8 text-center box-shadow p-4">
                <h1 className='text-center'>Success Stories</h1>
                <div className='pb-3'><b className='text-center'>Meet Dr. Shubham, a valued member of our UK Jobs WhatsApp Group. Watch his remarkable story here: </b></div>

                {/* YouTube Video */}
                <div className="embed-responsive embed-responsive-16by9 mb-2">
                    <iframe
                        className="embed-responsive-item"
                        src="https://www.youtube.com/embed/CDPF49PB8Rw?si=3l2vUMlWngMxDuO5"
                        allowFullScreen
                        title="YouTube Video"
                    />
                </div>

                <p className='text-center mt-2'>We collaborated to craft a compelling CV and optimized his LinkedIn profile, leading to multiple interview offers and securing a prestigious position in a reputed UK based dental care organization. Dr. Shubham is now eager to share his journey and insights with fellow students, offering inspiration for those aspiring to grow their careers abroad.
                </p>

<div className='row flex justify-content-center'>
                <div className='col-sm-4 '>
                <div className=' box-shadow p-4 m-2'>
                    <p className='text-center'>
                        For UK Jobs, Join:</p>
                        <a  className="button" href=" https://chat.whatsapp.com/H2kjm74Dao9FNT0xWn6P9s " target='blank'>Join Now</a>
                        </div>
                        </div>
                        <div className='col-sm-4'>
                        <div className=' box-shadow p-4 m-2'>
                        <p className='text-center'>
                        For India Jobs, Join:</p>
                        <a  className="button" href="https://chat.whatsapp.com/KGbEPtFJF76D8yQkN2iGC2" target='blank'>Join Now</a>
                        </div>
                        </div>
                       
                    
                </div>
            </div>
        </div>

    );
};

export default SuccessStories;
