'use client'
import {useState, useEffect, useLayoutEffect, useRef, useCallback} from 'react'
import Image from "next/image"
import Link from "next/link"
import Head from "next/head"
import GalleryBanner from "@/components/GalleryBanner"
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay } from 'swiper/modules';
import { Navigation, Scrollbar } from 'swiper/modules';
import "swiper/css";
import MasonryGallery from '@/components/MasonryGallery';


import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import TeamSlider from '@/components/TeamSlider'


const items = [
  { src: '/assets/images/g-1.png', alt: 'Description 1' },
  { src: '/assets/images/g-2.png', alt: 'Description 2' },
  { src: '/assets/images/g-6.png', alt: 'Description 6' },
  { src: '/assets/images/g-3.png', alt: 'Description 3' },
  { src: '/assets/images/g-4.png', alt: 'Description 4' },
  { src: '/assets/images/g-5.png', alt: 'Description 5' },
  { src: '/assets/images/g-7.png', alt: 'Description 6' },
  
  { src: '/assets/images/g-9.png', alt: 'Description 6' },
  { src: '/assets/images/g-8.png', alt: 'Description 6' },
  // Add more items as needed
];
const GalleryPage = () => {
  
 
  return (
    <>
      <Head>
        <title>Stance Health</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GalleryBanner />
      <section className='sec gallery-sec'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
               <div className='tabs-style'>
               <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
  <li className="nav-item" role="presentation">
    <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">All Images</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Physiotherapy</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Clinic </button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link" id="pills-physio-tab" data-bs-toggle="pill" data-bs-target="#pills-physio" type="button" role="tab" aria-controls="pills-physio" aria-selected="false">Physio</button>
  </li>
</ul>
<div className="tab-content" id="pills-tabContent">
  <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
  <MasonryGallery items={items} />
  </div>
  <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">
  <MasonryGallery items={items} />
  </div>
  <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabindex="0">
  <MasonryGallery items={items} />
  </div>
  <div className="tab-pane fade" id="pills-physio" role="tabpanel" aria-labelledby="pills-physio-tab" tabindex="0">
  <MasonryGallery items={items} />
  </div>
</div>
               </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default GalleryPage