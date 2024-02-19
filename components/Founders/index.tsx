"use client";
import SectionHeader from "../Common/SectionHeader";

import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import { motion } from "framer-motion";
import SingleFounder from "./SingleFounder";
import foundersDataEng from "./foundersDataEng";
import foundersDataFr from "./foundersDataFr";

const Testimonial = ( {currentLanguage} ) => {
  const foundersData = currentLanguage === 'en' ? foundersDataEng : foundersDataFr;

  return (
    <>
      <section>
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <div className="animate_top mx-auto text-center">
            {currentLanguage === 'en' ?
              <SectionHeader
                headerInfo={{
                title: `TEAM`,
                subtitle: `Discover our Founders`,
                description: `Explore the profiles of each of our founders to gain insight into their diverse backgrounds and expertise.`,
                }}
              /> :
              <SectionHeader
                headerInfo={{
                title: `Équipe`,
                subtitle: `Découvrez nos Fondateurs`,
                description: `Explorez les profils de chacun de nos fondateurs pour obtenir un aperçu de leurs parcours diversifiés et de leur expertise.`,
                }}
              />}
          </div>
          {/* <!-- Section Title End --> */}
        </div>

        <motion.div
          variants={{
            hidden: {
              opacity: 0,
              y: -20,
            },

            visible: {
              opacity: 1,
              y: 0,
            },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1, delay: 0.1 }}
          viewport={{ once: true }}
          className="animate_top mx-auto mt-15 max-w-c-1235 px-4 md:px-8 xl:mt-20 xl:px-0"
        >
          {/* <!-- Slider main container --> */}
          <div className="swiper testimonial-01 mb-20 pb-22.5">
            {/* <!-- Additional required wrapper --> */}
            <Swiper
              spaceBetween={50}
              slidesPerView={2}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay, Pagination]}
              breakpoints={{
                // when window width is >= 640px
                0: {
                  slidesPerView: 1,
                },
                // when window width is >= 768px
                768: {
                  slidesPerView: 2,
                },
              }}
            >
              {foundersData.map((review) => (
                <SwiperSlide key={review?.id}>
                  <SingleFounder review={review} currentLanguage={currentLanguage} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Testimonial;
