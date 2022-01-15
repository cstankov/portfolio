import React, { useRef } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_sumgi5n",
        "template_ecnyda2",
        form.current,
        "user_ZSgrsvTzBJJX63vPNN0XM"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="contactSection" id="Contact">
      <div className="contactContainer">
        <h1 className="contactHeader">Contact Form</h1>
        <form ref={form} onSubmit={sendEmail} className="contactForm">
          <ul className="contactForm">
            <li>
              <input type="text" name="user_name" placeholder="Name" />
            </li>
            <li>
              <input type="email" name="user_email" placeholder="Email" />
            </li>
            <li>
              <textarea name="message" placeholder="Message" />
            </li>
            <li>
              <input type="submit" value="Send" />
            </li>
          </ul>
        </form>
      </div>
    </section>
  );
};

export default Contact;
