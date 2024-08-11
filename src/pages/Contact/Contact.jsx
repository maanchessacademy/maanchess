import React, { useState } from 'react';
import "./Contact.css";

const Contact = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [age, setAge] = useState('');
  const [rating, setRating] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappMessage = `Name: ${name}%0APhone: ${phone}%0AAge: ${age}%0ARating: ${rating}%0AMessage: ${message}`;

    const whatsappUrl = `https://wa.me/7649866386?text=${whatsappMessage}`;

    window.location.href = whatsappUrl;
  };

  return (
    <>
      <div className="contact_main">
        <div className="contact_wrap">
          <div className="contact_form">
            <div className="contact_form-card1">
              <div className="contact_form-card2">
                <form className="contact_form" onSubmit={handleSubmit}>
                  <p className="contact_form-heading"> Get In Touch </p>

                  <div className="contact_form-field">
                    <input
                      required
                      placeholder="Name"
                      className="contact_input-field"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>

                  <div className="contact_form-field">
                    <input
                      required
                      placeholder="Phone"
                      className="contact_input-field"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>

                  <div className="contact_form-field">
                    <input
                      required
                      placeholder="Student's Age"
                      className="contact_input-field"
                      type="number"
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                    />
                  </div>

                  <div className="contact_form-field">
                    <input
                      placeholder="Rating (Fide/Chess.com/Lichess)"
                      className="contact_input-field"
                      type="text"
                      value={rating}
                      onChange={(e) => setRating(e.target.value)}
                    />
                  </div>

                  <div className="contact_form-field">
                    <textarea
                      required
                      placeholder="Message"
                      cols="30"
                      rows="3"
                      className="contact_input-field"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                  </div>

                  <button className="contact_sendMessage-btn" type="submit">Send Message</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
