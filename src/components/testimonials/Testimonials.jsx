import React from "react";
import "./testimonials.css";
import avatar1 from "../../assets/avatar1.jpg";
import avatar2 from "../../assets/avatar2.jpg";
import avatar3 from "../../assets/avatar3.jpg";
import avatar4 from "../../assets/avatar4.jpg";
import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    id: 1,
    avatar: avatar1,
    name: "Hannah",
    review:
      "Very professional service, delivered on time. Aniket communicates well at every stage to check I am happy, using videos to show changes, which is great for a website beginner like me 👍🏻 definitely would recommend 😀",
  },
  {
    id: 2,
    avatar: avatar2,
    name: "Oreos",
    review:
      "I'm absolutely blown away! He did a phenomenal job in very little time. Way better than I expected and I will absolutely be returning.",
  },
  {
    id: 3,
    avatar: avatar3,
    name: "German masnata",
    review:
      "Accepted my request for a super fast delivery before going to sleep. He finished at 5 am, which speaks of his dedication to his work. I am very pleased with my result. Perfect I would say. I highly recommend this editor..",
  },
  {
    id: 4,
    avatar: avatar4,
    name: "Rakesh Verma",
    review:
      "Aniket and his team are PROs!!! I have worked with many developers over the past 25 years and I can say that if you are organized, they. will meet and over deliver on your expectations. They get it and are passionate about your project.",
  },
];

function Testimonials() {
  return (
    <section id="testimonials">
      <h5>Happy Clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Autoplay, Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        autoplay={{
          delay: 1300,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
      >
        {data.map(({ id, avatar, name, review }) => {
          return (
            <SwiperSlide key={id} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="avatar1" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default Testimonials;
