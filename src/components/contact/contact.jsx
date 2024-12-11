import React, { useRef, useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import { MdOutlineEmail, MdLocationOn } from 'react-icons/md';
import { RiMessengerLine, RiSendPlaneFill } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';
import './contact.css';

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ show: false, success: false, message: '' });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    const section = document.querySelector('#contact');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setSubmitStatus({ show: false, success: false, message: '' });

    try {
      await emailjs.sendForm(
        'service_e2bhjgq',
        'template_vbw7r4m',
        form.current,
        '9C_E7NPbKEkr4h984'
      );

      setSubmitStatus({
        show: true,
        success: true,
        message: 'Thank you for your message! I will get back to you soon.'
      });
      
      setFormData({ name: '', email: '', message: '' });
      form.current.reset();
    } catch (error) {
      setSubmitStatus({
        show: true,
        success: false,
        message: 'Something went wrong. Please try again or contact me directly via email.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: <MdOutlineEmail />,
      title: 'Email',
      value: 'ahmadomar.sci@gmail.com',
      link: 'mailto:ahmadomar.sci@gmail.com',
      primary: true
    },
    {
      icon: <RiMessengerLine />,
      title: 'Messenger',
      value: 'PhAhmedOmar',
      link: 'https://m.me/PhAhmedOmar'
    },
    {
      icon: <BsWhatsapp />,
      title: 'WhatsApp',
      value: '+4915752370477',
      link: 'https://api.whatsapp.com/send?phone=4915752370477'
    },
    {
      icon: <MdLocationOn />,
      title: 'Location',
      value: 'Saarbrücken, Germany',
      link: null
    }
  ];

  return (
    <section id="contact" className={isInView ? 'animate' : ''}>
      <div className="section__header">
        <h5 className="section__subtitle">Get In Touch</h5>
        <h2 className="section__title">Contact Me</h2>
        <p className="section__description">
          I'm currently available for freelance work or full-time positions.
          If you have a project that you want to get started, think you need my help
          with something, or just want to say hello, then get in touch.
        </p>
      </div>

      <div className="container contact__container">
        <div className="contact__methods">
          {contactMethods.map((method, index) => (
            <div 
              key={index}
              className={`contact__method ${method.primary ? 'primary' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="contact__method-icon">
                {method.icon}
              </div>
              <h4>{method.title}</h4>
              <h5>{method.value}</h5>
              {method.link && (
                <a
                  href={method.link}
                  target="_blank"
                  rel="noreferrer"
                  className="contact__link"
                >
                  Send a message
                </a>
              )}
            </div>
          ))}
        </div>

        <form 
          ref={form} 
          onSubmit={sendEmail} 
          className="contact__form-container"
        >
          <div className="form__group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="John Doe"
              required
            />
          </div>

          <div className="form__group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="john@example.com"
              required
            />
          </div>

          <div className="form__group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows="7"
              placeholder="Hello, I'd like to discuss..."
              required
            ></textarea>
          </div>

          <button 
            type="submit"
            className={`submit__button ${isSubmitting ? 'submitting' : ''}`}
            disabled={isSubmitting}
          >
            <span className="button__text">
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </span>
            <RiSendPlaneFill className="button__icon" />
            {isSubmitting && <span className="button__loader"></span>}
          </button>

          {submitStatus.show && (
            <div className={`submit__status ${submitStatus.success ? 'success' : 'error'}`}>
              {submitStatus.message}
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
