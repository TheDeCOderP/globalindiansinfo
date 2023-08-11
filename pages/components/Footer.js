import Link from "next/link";
import {AiFillHome}  from 'react-icons/ai'
import {FcAbout} from 'react-icons/fc'
import {BsPhone} from 'react-icons/bs'
import {GrServices} from 'react-icons/gr'
import {BiLogoFacebookCircle} from 'react-icons/bi'
import {BiLogoTwitter} from 'react-icons/bi'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'
import {BsTelephoneOutboundFill} from 'react-icons/bs'
import {IoIosMail} from 'react-icons/io'
import {AiFillInfoCircle} from 'react-icons/ai'
import {MdOutlineMiscellaneousServices} from 'react-icons/md'

const Footer = () => {
    return (

        <div className="container-fluid p-4 bg-light text-dark footer-container">
        <div className="logo-container">
<<<<<<< HEAD
       <Link href="/"> <img src="https://res.cloudinary.com/dlovqnrza/image/upload/v1691648176/site-logo_vhtzvm.png" className = "footer-logo" alt="logo"/></Link>

=======
        <Link href="/">
        <img src="https://res.cloudinary.com/dlovqnrza/image/upload/v1691648176/site-logo_vhtzvm.png" className = "footer-logo" alt="logo"/>
       </Link>
>>>>>>> 1e7d3512eb38240dbd527cdc1b476a33a4a9fd3e
        </div>
        <div className="quick-links-container">
        <h1 className="footer-titles">QUICK LINKS</h1>
        <Link href="/"> <p className="footer-des"> <AiFillHome className="footer-icons"/> Home</p></Link>
       <Link href="/about"> <p className="footer-des"> <AiFillInfoCircle className="footer-icons"/>About Us</p></Link>
        <Link href="/contact"> <p  className="footer-des"><BsPhone className="footer-icons"/>Contact Us</p></Link>
        <Link href="/services" ><p className="footer-des"><MdOutlineMiscellaneousServices className="footer-icons"/>Services Us</p></Link>
        </div>
        <div className="contact-us-links">
        <h1 className="footer-titles">SOCIAL NETWORKS</h1>
       <a href="https://www.facebook.com/groups/globalindiansinfo/" target="_blank"> <p className="footer-des"><BiLogoFacebookCircle/> Facebook</p></a>
       <a href="https://twitter.com/globalindian_in" target="_blank"> <p className="footer-des"><BiLogoTwitter/> Twitter</p></a>
       <a href="https://www.linkedin.com/in/global-indians-info-b87034259/?originalSubdomain=in" target="_blank"> <p className="footer-des"><AiFillLinkedin/> Linkedin</p></a>
        <a href="https://www.instagram.com/global_indian_official/https://www.instagram.com/global_indian_official/" target="_blank"><p className="footer-des"><AiOutlineInstagram/> Instagram</p></a>

        </div>
        <div className="contact-us-links">
        <h1 className="footer-titles">CONTACT US </h1>
<<<<<<< HEAD
       <a  href="tel:+1234567890" target="_blank"> <p className="footer-des"><BsTelephoneOutboundFill/> +44-7867090363</p></a>
       <a href="mailto:example@example.com" target="_blank"> <p className="footer-des"><IoIosMail/> info@prabisha.com</p></a>

=======
       <a href ="tel:+44-7867090363" target="_blank"> <p className="footer-des"><BsTelephoneOutboundFill/> +44-7867090363</p></a>
       <a href="mailto:info@prabisha.com" target="_blank"> <p className="footer-des"><IoIosMail/> info@prabisha.com</p></a>
>>>>>>> 1e7d3512eb38240dbd527cdc1b476a33a4a9fd3e
        
        </div>
        </div>
    )
}
export default Footer;