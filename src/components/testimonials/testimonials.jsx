import React, { useEffect, useState } from "react";
import "./testimonials.css";
import AVT1 from "../../assets/avatar1.jpg";
import AVT2 from "../../assets/avatar2.jpg";
import { FaQuoteLeft, FaStar, FaLinkedin } from "react-icons/fa";

// Import Swiper
import { Swiper, SwiperSlide } from "swiper";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/swiper-bundle.min.css";

const testimonialData = [
  {
    id: 1,
    name: "Dr Mohamed Ashry",
    position: "Senior Software Engineer",
    company: "Tech Solutions Inc.",
    image: AVT1,
    rating: 5,
    review:
      "Not only was Ahmed's work on-time and to spec, he pays attention to improve the aesthetics of the site as well as the functionality. Throughout the entire process he is responsive, and willing to work through issues as they arise. It's obvious he takes tremendous pride in his work, and I wouldn't hesitate to recommend or work with him again.",
    linkedin: "https://linkedin.com/in/mohamed-ashry",
    date: "June 2023"
  },
  {
    id: 2,
    name: "Karim Omar",
    position: "Product Manager",
    company: "Digital Innovations Ltd",
    image: AVT2,
    rating: 5,
    review:
      "It has been a real pleasure working with Ahmed. He has been very professional and very clear in all communications, which I appreciate. His technical skills and attention to detail resulted in a product that exceeded our expectations.",
    linkedin: "https://linkedin.com/in/karim-omar",
    date: "August 2023"
  },
];

const Testimonials = () => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const section = document.querySelector('#testimonials');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <FaStar
        key={index}
        className={`star ${index < rating ? 'filled' : ''}`}
      />
    ));
  };

  return (
    <section id="testimonials">
      <div className="testimonials__header">
        <span className="section__subtitle">What Clients Say</span>
        <h2 className="section__title">Testimonials</h2>
      </div>

      <Swiper
        className={`container testimonials__container ${isInView ? 'animate' : ''}`}
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
      >
        {testimonialData.map(({ id, name, position, company, image, rating, review, linkedin, date }) => (
          <SwiperSlide key={id} className="testimonial">
            <div className="testimonial__content">
              <div className="testimonial__header">
                <div className="client__avatar">
                  <img src={image} alt={name} className="client__avatar-img" />
                </div>
                <div className="client__info">
                  <h3 className="client__name">{name}</h3>
                  <p className="client__position">{position}</p>
                  <p className="client__company">{company}</p>
                  <div className="client__rating">
                    {renderStars(rating)}
                  </div>
                </div>
              </div>
              
              <div className="testimonial__body">
                <FaQuoteLeft className="quote__icon" />
                <p className="client__review">{review}</p>
              </div>
              
              <div className="testimonial__footer">
                <span className="review__date">{date}</span>
                {linkedin && (
                  <a 
                    href={linkedin}
                    className="linkedin__link"
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`View ${name}'s LinkedIn profile`}
                  >
                    <FaLinkedin />
                    <span>View Profile</span>
                  </a>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
