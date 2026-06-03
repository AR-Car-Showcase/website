import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import './Screenshots.css';

const screenshots = [
  { src: '/assets/screenshots/3D_Studio_BMW.png', alt: 'BMW 3D Studio' },
  { src: '/assets/screenshots/AR_Mode_BMW.png', alt: 'BMW AR Mode' },
  { src: '/assets/screenshots/AR_Mode_BMW_Customized.png', alt: 'BMW AR Customized' },
  { src: '/assets/screenshots/AR_Mode_BMW_Interior.png', alt: 'BMW AR Interior' },
  { src: '/assets/screenshots/light_home.png', alt: 'Home Screen Light' },
  { src: '/assets/screenshots/dark_home.png', alt: 'Home Screen Dark' },
  { src: '/assets/screenshots/light_explore.png', alt: 'Explore Catalog' },
  { src: '/assets/screenshots/light_cardetails.png', alt: 'Car Details' },
  { src: '/assets/screenshots/light_3D_Studio.png', alt: '3D Studio' },
  { src: '/assets/screenshots/dark_3D_Studio_customized.png', alt: 'Customized Model Dark' },
  { src: '/assets/screenshots/light_AR_mode.png', alt: 'AR Mode' },
  { src: '/assets/screenshots/AR_customized.png', alt: 'AR Customized' },
  { src: '/assets/screenshots/light_recommendation.png', alt: 'AI Recommendations' },
  { src: '/assets/screenshots/dark_compare_chatbot.png', alt: 'Compare Chatbot' }
];

const Screenshots = () => {
  return (
    <section id="screenshots" className="section screenshots">
      <div className="container">
        <div className="section-header">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Interface <span className="gradient-text">Gallery</span>
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Explore our beautifully designed mobile application with full dark mode support.
          </motion.p>
        </div>

        <motion.div
          className="carousel-container"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: true,
            }}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            navigation={true}
            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
            className="screenshot-swiper"
          >
            {screenshots.map((shot, index) => (
              <SwiperSlide key={index} className="screenshot-slide">
                <img src={shot.src} alt={shot.alt} className="glass" />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default Screenshots;
