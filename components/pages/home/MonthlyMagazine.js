// components/DiwaliMessage.js
import Link from 'next/link';
import MagazineList from '../../admin/magazine/homemagazines';

const MonthlyMagazine = () => {
  return (
    <div className="mt-2 monthly_section">
      <h1 className="text-center mb-4">Monthly Magazines</h1>
      <div className="row">
      <div className="text-center col-sm-12 col-md-6">
     <div className="box-shadow m-1 mb-3 p-4">
      <p>
        Join us on this extraordinary path at{' '}
        <Link href="https://www.globalindiansinfo.com" legacyBehavior>
          <a target="_blank" rel="noopener noreferrer">www.globalindiansinfo.com</a>
        </Link>{' '}
        and become part of an empowering and nurturing global Indian community.
      </p>
      <p>
        Join us on WhatsApp and Keep in touch with the Global Indian Community:{' '}
        <a
          href="https://chat.whatsapp.com/IBD5TnnlJA5JPNy3JSylxT"
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp Group
        </a>
      </p>
      </div>
      <div className="box-shadow m-1  p-4">
      <p>
        🌏 Become a GII Ambassador: Are you passionate about representing the Indian diaspora in your corner of the world? 🌍✨ We're looking for Ambassadors who will proudly carry the torch of our culture and heritage in their workplaces, universities, colleges, cities, and beyond. 🕊️🌆{' '}
        <a
          href="https://forms.gle/yKJoQ15D2dbJ6TQ18"
          target="_blank"
          rel="noopener noreferrer"
        >
          Apply here
        </a>
      </p>
      
      <div className="text-center pt-3">
            <a href="https://chat.whatsapp.com/IBD5TnnlJA5JPNy3JSylxT" className=" whatsapp_button" role="button" aria-pressed="true" target="_blank">Join Whatsapp Group Now</a>
            </div>
      </div>
      </div>
      <div className="text-center col-sm-12 col-md-6">
      <div className="box-shadow m-1 p-4  pb-5">
        <MagazineList/>
        </div>
        </div>
    </div>
    </div>
  );
};

export default MonthlyMagazine;