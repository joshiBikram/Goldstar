import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './home.css'
import { catData } from '../Data/catData';
import { productData } from '../Data/ProductData';
import { Link } from 'react-router-dom';




function Home() {
  return (
    <>
    <section className='banner'>
        <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
        <SwiperSlide><img src="https://www.goldstarshoes.com/MediaThumb/large/Media/own-your-path.png" alt="" /></SwiperSlide>
      <SwiperSlide><img src="https://www.goldstarshoes.com/MediaThumb/large/Media/boss-your-way-up-4000x2000.png" alt="" /></SwiperSlide>
      <SwiperSlide><img src="https://www.goldstarshoes.com/MediaThumb/original/Media/1904_2000x4000.png" alt="" /></SwiperSlide>
      
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>
    </section>

    <section className='cat'>
        {catData.map((a)=>(
            <div key={a.id} className='box'>
            <img src={a.img}/>
            <h4>{a.catname}</h4>
        </div>
        ))}
        
    </section>

    <section className='product'>
      <h2>New Arrivals</h2>
      <div className="flex">
        {productData.slice(0,8).map((a)=>(
          <div className="pbox" key={a.id}>
            <img src={a.thumbnail} alt="" />
            <h4>{a.title}</h4>
            <Link to={`/detail/${a.id}`}>Read More</Link>
          </div>
        ))}
        
      </div>

    </section>
    </>
    
  )
}

export default Home