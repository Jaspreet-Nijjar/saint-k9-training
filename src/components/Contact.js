import '../styles/contact.css';
import {
  FaWhatsapp,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaPhone,
} from 'react-icons/fa';

export const Contact = () => {
  return (
    <section id="contact">
      <div className="contact-container">
        <h1 className="contact-heading">Get in touch with Saint K9 Training</h1>
        <p className="contact-dates">Monday - Friday - 09:00 - 19:00</p>
        <p className="contact-dates">Sunday - 09:00 - 13:00</p>
        <p className="contact-dates">Saturday - 09:00 - 15:00</p>
        <div className="social-icons-contact">
          <FaWhatsapp size={45} className="icon-contact whatsapp" />
          <FaEnvelope size={30} className="icon-contact border" />
          <FaPhone size={30} className="icon-contact phone border" />
          <FaFacebook size={30} className="icon-contact border" />
          <FaInstagram size={30} className="icon-contact border" />
        </div>

        <form>
          <label className="input-container">Your full name*</label>
          <input type="text" placeholder="Jane Doe" />

          <label className="input-container">Your email address*</label>
          <input type="email" placeholder="jane@emailaddress.com" required />

          <div className="form-grid">
            <div className="grid-input">
              <label className="input-container">Your contact number*</label>
              <input
                type="tel"
                maxLength="11"
                placeholder="07712345678"
                required
              />
            </div>

            <div className="grid-input">
              <label className="input-container">Your location*</label>
              <input type="text" placeholder="Harlow" required />
            </div>

            <div className="grid-input">
              <label className="input-container">Your dog's breed*</label>
              <input type="text" placeholder="Crossbreed" required />
            </div>

            <div className="grid-input">
              <label className="input-container">Your dog's age*</label>
              <input type="text" placeholder="1 year" required />
            </div>
          </div>

          <label className="input-container">Your message*</label>
          <textarea
            placeholder="Hi Saint K9 Training, I'd like to find out more about..."
            cols="30"
            rows="5"
            required
          ></textarea>
          <button className="contact-btn">Send message</button>
        </form>
      </div>
    </section>
  );
};
