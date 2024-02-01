import React from 'react';
import "../components/contact.css";

const Contact = () => {
  return (
    <div className="contact-form-container">
      <h2>Contact Corkys Footwear</h2>
      <form>
        <label htmlFor="inquiryType">What type of inquiry is this?</label>
        <select id="inquiryType" name="inquiryType">
          <option value="retailer">Become a Retailer</option>
          {/* Add more options as needed */}
        </select>

        {/* Add other form fields here based on your requirements */}
        
        <button type="submit">Submit</button>
      </form>

      <div className="social-media-links">
        <p>Connect with us on social media:</p>
        {/* Add your social media links here */}
        <a href="https://facebook.com/corkysfootwear" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://instagram.com/corkysfootwear" target="_blank" rel="noopener noreferrer">Instagram</a>
        {/* Add more social media links as needed */}
      </div>

      <div className="company-info">
        <p>Corkys Footwear, Inc</p>
        <p>10500 Maybelline Road, Suite A</p>
        <p>North Little Rock, AR 72117</p>
        <p>Phone: 1-866-924-3338</p>
        <p>Email: customerservice@corkysfootwear.com</p>
      </div>
    </div>
  );
};

export default Contact;
