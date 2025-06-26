'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import SwiperClass from 'swiper'; 
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { teamData } from "@/data/team";
import '../app/globals.css'

export default function TeamSwiper() {
  const [swiper, setSwiper] = useState<SwiperClass | null>(null);
  const [atEnd, setAtEnd] = useState(false);
  const [atStart, setAtStart] = useState(true);
  //const [activeIndex, setActiveIndex] = useState(0);
    
  return (
    <section className="desc container mx-auto px-4 py-16">
      <h1 className='text-center mb-8'>Meet Our Team</h1>
      <Swiper
        onSwiper={setSwiper}
        //onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)} 
        spaceBetween={20} 
        slidesPerView={1}
        modules={[Navigation, Pagination]}
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 20 },
          768: { slidesPerView: 3, spaceBetween: 24 },
          1024: { slidesPerView: 4, spaceBetween: 30 },
        }}
        navigation={false} 
        pagination={{ clickable: true, /*renderBullet: (index, className) => {
    return `<span class="${className}" style="background: ${ index === activeIndex ? '#3E5C50' : 'black' }"></span>`; }*/}}
        
        
        
        onReachEnd={() => setAtEnd(true)}
        onReachBeginning={() => setAtStart(true)}
        onFromEdge={() => {setAtEnd(false); setAtStart(false);}}
      >
        {teamData.map((member, index) => (
          <SwiperSlide key={index} className="mb-10">
            <div className="bg-[#7BA48733] rounded-2xl shadow-lg p-4 sm:p-10 text-center h-full max-w-sm mx-auto">
              <div className="relative w-50 h-50 sm:w-50 sm:h-50 mx-auto mb-4 flex-shrink-0">
                <Image src={member.img} alt={member.name} fill className="rounded-full object-cover object-top border-4 border-white shadow-md"/>
              </div>
              <div className="flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-sm text-gray-500 mb-3">{member.role}</p>
                </div>
                <p className="text-xs sm:text-sm italic text-gray-600 leading-relaxed">&quot;{member.quote}&quot;</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex justify-center gap-6 mt-8">
        <button onClick={() => swiper?.slidePrev()} aria-label="Previous slide" className="p-3 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors duration-200">
          <i className={`fa-solid fa-arrow-left text-gray-700 ${atStart ? 'opacity-50' : 'opacity-100'}`}></i>
        </button>

        <button onClick={() => swiper?.slideNext()} aria-label="Next slide" className="p-3 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors duration-200">
          <i className={`fa-solid fa-arrow-right text-gray-700 ${atEnd ? 'opacity-50' : 'opacity-100'}`}></i>
        </button>
      </div>
    </section>
  );
}