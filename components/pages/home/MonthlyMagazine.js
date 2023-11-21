// components/DiwaliMessage.js
import Link from 'next/link';

const DiwaliMessage = () => {
  return (
    <div className="container mt-2 monthly_section">
      <h1 className="text-center mb-4">This Diwali, kindle the warmth of global togetherness! 🪔✨</h1>
      <div className="text-center col col-md-10 box-shadow  p-4">
      <p>
        Discover “Global Indians Info”, your heartfelt monthly companion brought to life by the “Global Indians”, a passionate endeavour by “Prabisha Consulting (www.prabisha.com)”.
      </p>
      <p>
        It's not just a magazine; it's a heartfelt bridge that unites NRIs worldwide. Dive into the stories, wisdom, and inspiration that unite Indians on their global journeys.
      </p>
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
      <p>
        Flip through our magazine:{' '}
        <a
          href="https://flipbookpdf.net/web/site/1d5897eabae3d58d06a73ffdf802f580699a4fcd202311.pdf.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Flipbook
        </a>
      </p>
      <p>
        🌍🤗 #GlobalIndians #DiwaliJoy #prabishaconsulting #globalindiancommunity
      </p>

      <div className="text-center pt-3">
            <a href="https://chat.whatsapp.com/IBD5TnnlJA5JPNy3JSylxT" className=" whatsapp_button" role="button" aria-pressed="true" target="_blank">Join Whatsapp Group Now</a>
            </div>
      </div>
    </div>
  );
};

export default DiwaliMessage;
