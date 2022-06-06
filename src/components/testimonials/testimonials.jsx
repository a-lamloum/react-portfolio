import React from "react";
import "./testimonials.css";
import AVT1 from "../../assets/avatar1.jpg";
import AVT2 from "../../assets/avatar2.jpg";



import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'
import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'

// Import Swiper styles
// import 'swiper/swiper-bundle.min.css'
// import 'swiper/swiper.min.css'
// import "swiper/css";
// import "swiper/css/pagination";

const data = [
  {
    name: "Dr Mohamed Ashry",
    image: AVT1,
    review:
      "Not only was Ahmed work on-time and to spec, he pays attention to improve the aesthetics of the site as well as the functionality. Throughout the entire process he is responsive, and willing to work through issues as they arise. It’s obvious he takes tremendous pride in his work, and I wouldn’t hesitate to recommend or work with him again.",
  },
  {
    name: "Karim Omar",
    image: AVT2,
    review:
      "It has been a real pleasure working with Ahmed. He has been very professional and very clear in all communications, which I appreciate.",
  },

];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Reviw from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[ Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {data.map(({ name, image, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={image} className="client__avatar-img"></img>
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
