import React from "react";
import "./footer.css";
import { Clock, Facebook, Instagram, Linkedin, Mail, MapPin, Phone, TrainFront, Twitter } from "lucide-react";
const Footer = () => {
  return (
    <div className="footerMain">
      <div className="footerTop">
        <div className="space-y-2 " >
          <div className="footerTopText">Contact Us</div>
          <div className="space-y-1" style={{
           
          }}>
          <p className="gray-300 contactUs">Address: 123 Main Street, New Delhi, India</p>
          <p className="gray-300 contactUs">
            Email:&nbsp;
            support@example.com
          </p>
          <p className="gray-300 contactUs">
            Phone:&nbsp;
            +91&nbsp;98765&nbsp;43210
          </p>
          </div>

        </div>
        <div className="space-y-2" >
          <div className="footerTopText footerStyleFallowUs" >Follow Us</div>
          <div className="space-x-2 ">
            <Facebook className="iconFooter" />
            <Linkedin className="iconFooter" />
            <Instagram className="iconFooter" />
            <Twitter className="iconFooter" />
          </div>
        </div>
        <div className="space-y-2" >
             <div className="footerTopText">Head Office</div>
             <div>
 <p className="flex-align-items-center space-x-1"><span><MapPin className="iconFooter-2"/></span> <span>123 Business Tower, Sector 21, Mumbai</span></p>
             <p className="flex-align-items-center space-x-1"><span><Phone className="iconFooter-2"/></span> <span>+91 12345 67890</span></p>
             <p className="flex-align-items-center space-x-1"><span><Clock className="iconFooter-2"/></span> <span>Mon - Fri: 9:00 AM to 6:00 PM</span></p>
             <p className="flex-align-items-center space-x-1"><span><Mail className="iconFooter-2"/></span> <span>headoffice@example.com</span></p>
             <p className="flex-align-items-center space-x-1"><span><TrainFront className="iconFooter-2"/></span> <span>Nearest Metro: Western Line - Andheri Station</span></p>
             </div>
            
        </div>
      </div>
      <div className="footerBottom">
        @2021 All Right Reserved. Privacy Policy
      </div>
    </div>
  );
};

export default Footer;
