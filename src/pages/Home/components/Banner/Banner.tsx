import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, Autoplay } from 'swiper/modules'
import path from '../../../../constants/path'
import 'swiper/swiper-bundle.css'
import BannerLeft from '../../../../assets/imgs/banner/hero_banner_left.png'
import BannerRight from '../../../../assets/imgs/banner/hero_banner_right.png'
import BannerImgThree from '../../../../assets/imgs/banner/hero-banner-3.png'
import BannerImgFour from '../../../../assets/imgs/banner/hero-banner-4.png'
import BannerImgFive from '../../../../assets/imgs/banner/hero-banner-5.png'
import BannerImgSix from '../../../../assets/imgs/banner/hero-banner-6.png'

function Banner() {
  return (
    <div className='relative container'>
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        slidesPerView={1}
        spaceBetween={30}
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        navigation={{ nextEl: '.button-next', prevEl: '.button-prev' }}
      >
        <SwiperSlide className='pt-[120px] pb-10 !grid grid-cols-1 md:grid-cols-2 gap-x-5'>
          <Link to={path.productlist} className='hidden md:block h-[350px] rounded-2xl'>
            <img src={BannerLeft} alt='Banner Left' className='w-full block h-full rounded-2xl' />
          </Link>
          <Link to={path.productlist} className='h-[350px] rounded-2xl'>
            <img src={BannerRight} alt='Banner Right' className='w-full block h-full rounded-2xl' />
          </Link>
        </SwiperSlide>
        <SwiperSlide className='pt-[120px] pb-10 !grid grid-cols-1 md:grid-cols-2 gap-x-5'>
          <Link to={path.productlist} className='hidden md:block h-[350px] rounded-2xl'>
            <img src={BannerImgFive} alt='Banner Left' className='w-full block h-full rounded-2xl' />
          </Link>
          <Link to={path.productlist} className='h-[350px] rounded-2xl'>
            <img src={BannerImgSix} alt='Banner Right' className='w-full block h-full rounded-2xl' />
          </Link>
        </SwiperSlide>
        <SwiperSlide className='pt-[120px] pb-10 !grid grid-cols-1 md:grid-cols-2 gap-x-5'>
          <Link to={path.productlist} className='hidden md:block h-[350px] rounded-2xl'>
            <img src={BannerImgThree} alt='Banner Left' className='w-full block h-full rounded-2xl' />
          </Link>
          <Link to={path.productlist} className='h-[350px] rounded-2xl'>
            <img src={BannerImgFour} alt='Banner Right' className='w-full block h-full rounded-2xl' />
          </Link>
        </SwiperSlide>
      </Swiper>
      <button className='absolute button-prev z-10 bg-white flex items-center justify-center rounded-[50%] w-[40px] left-[2%] top-2/4 translate-x-[0] translate-y-1/2 h-[40px]'>
        <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'>
          <path
            d='M15.7049 7.41L14.2949 6L8.29492 12L14.2949 18L15.7049 16.59L11.1249 12L15.7049 7.41Z'
            fill='#1A1A1A'
          />
        </svg>
      </button>
      <button className='absolute z-10 button-next bg-white flex items-center justify-center rounded-[50%] w-[40px] right-[2%] top-2/4 translate-x-[0] translate-y-1/2 h-[40px]'>
        <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'>
          <path
            d='M8.29492 16.59L12.8749 12L8.29492 7.41L9.70492 6L15.7049 12L9.70492 18L8.29492 16.59Z'
            fill='#1A1A1A'
          />
        </svg>
      </button>
    </div>
  )
}

export default Banner
