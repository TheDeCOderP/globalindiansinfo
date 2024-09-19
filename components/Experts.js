import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

function Experts() {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-5">Meet Our Experts</h1>
      <div className="row">
        <div className="col-md-6">
          <div className="experts border m-3">
            <img
              src="https://www.pratyushkumar.co.uk/wp-content/uploads/2023/10/WhatsApp-Image-2021-05-06-at-4.07.56-PM.jpeg"
              alt="pratyush"
              className="img-fluid rounded experts-contain"
            />
            <div className="p-3">
              <h2 className="mt-3 text-black" style={{ fontSize: "20px" }}>
                Meet{" "}
                <span style={{ fontSize: "25px", color: "#101ea9" }}>
                  Pratyush Kumar
                </span>{" "}
                Your Trusted Coach for Career, Leadership, and Business Success
              </h2>
              <p className="mt-3">
                Based in the vibrant city of London, Pratyush Kumar brings over
                25 years of industry expertise from his distinguished career in
                top global investment banks. He's mastered the art of steering
                complex multilingual tech and non-tech projects while leading
                diverse teams in various leadership roles.
              </p>
              <a href="https://www.pratyushkumar.co.uk/" target="_blank"><button className="button">Visit Now</button> </a>

              <div className="flex mt-3 gap-4">
                <a href="https://wa.me/+44-7867090363" target="_blank">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/124/124034.png?ga=GA1.1.24716503.1696394622"
                    width="50px"
                    height="45px"
                    alt="whatsapp"
                  />
                </a>
                <a href="mailto:pratyush@prabisha.com">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/732/732200.png"
                    width="50px"
                    height="50px"
                    alt="email"
                  />
                </a>
                <a href="tel:+44-7867090363">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/561/561253.png"
                    width="50px"
                    height="45px"
                    alt="phone"
                  />
                </a>
                <a href="https://www.linkedin.com/in/pratyushk/" target="_blank">
                  <img
                    src="https://img.icons8.com/?size=48&id=13930&format=png"
                    width="50px"
                    height="50px"
                    alt="linkedin"
                  />
                </a>
                <a href="https://www.pratyushkumar.co.uk/" target="_blank">
                  <img
                    src="https://img.icons8.com/?size=48&id=VJz2Ob51dvZJ&format=png"
                    width="50px"
                    height="45px"
                    alt="website"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="experts m-3 border">
            <img
              src="https://bidisharay.com/wp-content/uploads/2023/05/WhatsApp-Image-2023-05-31-at-14.27.10.jpeg"
              alt="bidisha"
              className="img-fluid rounded experts-contain"
            />
            <div className="p-3">
              <h2 className="mt-3 text-black" style={{ fontSize: "20px" }}>
                Empower Your Professional Journey with{" "}
                <span style={{ fontSize: "25px", color: "#101ea9" }}>
                  Bidisha Ray
                </span>{" "}
                Your Expert in Professional Resume Writing Services in the UK
              </h2>
              <p className="mt-3">
                Welcome to Bidisha Ray's World of Professional Resume Writing
                Services in the UK, Career Advancement, LinkedIn Excellence, and
                Interview Preparation. Do you wonder “how I can fix my resume
                and make my resume ATS Compliant?” Then look no further and
                reach out to Bidisha Ray.
              </p>
             <a href="https://bidisharay.com" target="_blank" ><button className="button">Visit Now</button> </a>


              <div className="flex mt-3 gap-4">
                <a href="https://wa.me/+447867090359" target="_blank">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/124/124034.png?ga=GA1.1.24716503.1696394622"
                    width="50px"
                    height="45px"
                    alt="whatsapp"
                  />
                </a>
                <a href="mailto:bidishacvcoach@gmail.com" target="_blank">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/732/732200.png"
                    width="50px"
                    height="50px"
                    alt="email"
                  />
                </a>
                <a href="tel:+447867090359" target="_blank">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/561/561253.png"
                    width="50px"
                    height="45px"
                    alt="phone"
                  />
                </a>
                <a href="https://www.linkedin.com/in/bidisharay/" target="_blank">
                  <img
                    src="https://img.icons8.com/?size=48&id=13930&format=png"
                    width="50px"
                    height="50px"
                    alt="linkedin"
                  />
                </a>
                <a href="https://bidisharay.com" target="_blank">
                  <img
                    src="https://img.icons8.com/?size=48&id=VJz2Ob51dvZJ&format=png"
                    width="50px"
                    height="45px"
                    alt="website"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experts;
