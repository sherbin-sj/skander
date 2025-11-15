import React from "react";
import "./Video.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { blogs } from "../../data";

const Video = () => {
  return (
    <section id="video">
      <div className="container">
        <div className="section__header">
          <h3 className="title">Some Video Samples</h3>
          <h4 className="sub__heading">Experience Our Work in Motion</h4>
          <p className="description">
            Take a closer look at our craftsmanship through these project
            videos. Each clip showcases the quality, precision, and innovation
            that define Skander’s work — from concept planning to final
            construction. Whether it’s residential, commercial, or civil
            projects, our commitment to excellence is built into every frame.
          </p>
        </div>
        <div>
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            navigation={true}
            loop={true}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {blogs.map((blog, index) => (
              <SwiperSlide className="blog" key={index}>
                <div className="video__container">
                  <video src={blog.image} autoPlay muted loop playsInline />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Video;
