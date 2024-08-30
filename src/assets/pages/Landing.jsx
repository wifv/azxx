import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import '../css/landing.css'
import huh from '../images/huh.webp'
import Products from './Products';

const landing = () => {
  return (
    <div className='landing'>
      <Swiper
        slidesPerView={1}
        loop={true}
      >
        <SwiperSlide style={{backgroundImage: `url(${huh})`}} className='big-swiper'></SwiperSlide>
        <SwiperSlide style={{backgroundImage: `url(${huh})`}} className='big-swiper'></SwiperSlide>
        <SwiperSlide style={{backgroundImage: `url(${huh})`}} className='big-swiper'></SwiperSlide>
      </Swiper>

      <section className="categories-section">
        <h1>Categories</h1>

        <div className="big-categories">
          <div className="category-item">
            <img src={huh} className='category-img'/>
            <h3>atratikalomkpch</h3>
          </div>
          <div className="category-item">
            <img src={huh} className='category-img'/>
            <h3>atratikalomkpch</h3>
          </div>
          <div className="category-item">
            <img src={huh} className='category-img'/>
            <h3>atratikalomkpch</h3>
          </div>
          <div className="category-item">
            <img src={huh} className='category-img'/>
            <h3>atratikalomkpch</h3>
          </div>
          <div className="category-item">
            <img src={huh} className='category-img'/>
            <h3>atratikalomkpch</h3>
          </div>
          <div className="category-item">
            <img src={huh} className='category-img'/>
            <h3>atratikalomkpch</h3>
          </div>
          <div className="category-item">
            <img src={huh} className='category-img'/>
            <h3>atratikalomkpch</h3>
          </div>
          <div className="category-item">
            <img src={huh} className='category-img'/>
            <h3>atratikalomkpch</h3>
          </div>
        </div>

        <button type='button' className='see-categories'>See All</button>
      </section>

      <Products />
    </div>
  )
}

export default landing
