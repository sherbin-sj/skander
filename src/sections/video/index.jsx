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
          <h3 className="title">Demo Videos</h3>
          <h4 className="sub__heading">Experience Our Work in Motion</h4>
          <p className="description">
              This demo video highlights our workflow, craftsmanship, and the dedication that drives every build — delivering spaces that are durable, efficient, and future-ready. From planning to final handover, we prioritize quality, safety, and seamless execution to turn vision into reality.
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
