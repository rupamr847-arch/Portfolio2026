import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:rupambor8@gmail.com" data-cursor="disable">
                rupambor8@gmail.com
              </a>
            </p>
            <h4>Phone &amp; Location</h4>
            <p>
              <a href="tel:+917003769208" data-cursor="disable">
                +91-7003769208
              </a>
            </p>
            <p style={{ color: "#adacac", fontSize: "14px", marginTop: "2px" }}>
              Hyderabad, India
            </p>
          </div>
          <div className="contact-box">
            <h4>Social &amp; Professional</h4>
            <a
              href="https://linkedin.com/in/rupam-bor-5069b2196"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
            <a
              href="mailto:rupambor8@gmail.com"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Email <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Video Producer &amp; <br /> Motion Graphics Specialist <span>Rupam Bor</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
