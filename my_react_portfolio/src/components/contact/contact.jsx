import React from "react";
import "./contact.css";
import { HiOutlineMail } from "react-icons/hi";
import { RiMessengerLine } from "react-icons/ri";
import { RiWhatsappLine } from "react-icons/ri";
import { useRef } from "react";
import emailjs from "emailjs-com";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_e2bhjgq",
        "template_vbw7r4m",
        form.current,
        "9C_E7NPbKEkr4h984"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <HiOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>ahmadomar.sci@gmail.com</h5>
            <a href="mailto:ahmadomar.sci@gmail.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>PhAhmedOmar</h5>
            <a href="https://m.me/PhAhmedOmar" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <RiWhatsappLine className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+4915752370477</h5>
            <a
              href="https://api.whatsapp.com/send?phone=4915752370477"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>
        <div className="contact__form">
          <form ref={form} onSubmit={sendEmail} className="contact__form">
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              required
            ></input>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            ></input>
            <textarea
              name="textarea"
              rows="7"
              placeholder="Your message"
              required
            ></textarea>
            <input
              type="submit"
              value="Send Message"
              className="btn btn-primary"
            />
            {/* <button type="submit" name="submit" className="btn btn-primary">
              Send Message
            </button> */}
          </form>
            
        </div>
      </div>
    </section>
  );
}

export default Contact;
