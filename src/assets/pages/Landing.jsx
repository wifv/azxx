import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import '../css/landing.css'

const landing = () => {
  return (
    <div className='landing'>
      <Swiper
        slidesPerView={1}
        loop={true}
      >
        <SwiperSlide>bomba</SwiperSlide>
      </Swiper>
    </div>
  )
}

export default landing
