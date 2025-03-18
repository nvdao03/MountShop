import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, Autoplay } from 'swiper/modules'
import { Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import 'swiper/swiper-bundle.css'
import productApi from '../../../../apis/product.api'
import ProductItem from '../../../ProductList/components/ProductItem/Product'

export default function Sale() {
  const getProducts = useQuery({
    queryKey: ['products'],
    queryFn: () => productApi.getProducts()
  })

  return (
    <div className='bg-[#D5D2F9] py-10 mt-8'>
      <div className='container relative'>
        <h2 className='text-[#4F46E5] text-[18px] font-semibold'>Deal chớp nhoáng</h2>
        <div className='mt-7'>
          <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            slidesPerView={1}
            spaceBetween={30}
            pagination={{ clickable: true }}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            navigation={{ nextEl: '.button-next', prevEl: '.button-prev' }}
          >
            <SwiperSlide className='pb-10 !grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5'>
              {getProducts.data &&
                getProducts.data.data.data.products.slice(0, 5).map((product) => (
                  <Link to='#!'>
                    <ProductItem key={product._id} product={product} />
                  </Link>
                ))}
            </SwiperSlide>
            <SwiperSlide className='pb-10 !grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5'>
              {getProducts.data &&
                getProducts.data.data.data.products.slice(5, 10).map((product) => (
                  <Link to='#!'>
                    <ProductItem key={product._id} product={product} />
                  </Link>
                ))}
            </SwiperSlide>
            <SwiperSlide className='pb-10 !grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5'>
              {getProducts.data &&
                getProducts.data.data.data.products.slice(10, 15).map((product) => (
                  <Link to='#!'>
                    <ProductItem key={product._id} product={product} />
                  </Link>
                ))}
            </SwiperSlide>
            <SwiperSlide className='pb-10 !grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5'>
              {getProducts.data &&
                getProducts.data.data.data.products.slice(15, 20).map((product) => (
                  <Link to='#!'>
                    <ProductItem key={product._id} product={product} />
                  </Link>
                ))}
            </SwiperSlide>
          </Swiper>
          <button className='[box-shadow:0px_0px_4px_0px_rgba(0,_0,_0,_0.25)] absolute button-prev z-10 bg-white flex items-center justify-center rounded-[50%] w-[40px] -translate-y-[50%] left-0 top-2/4 translate-x-[0]  h-[40px]'>
            <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'>
              <path
                d='M15.7049 7.41L14.2949 6L8.29492 12L14.2949 18L15.7049 16.59L11.1249 12L15.7049 7.41Z'
                fill='#1A1A1A'
              />
            </svg>
          </button>
          <button className='[box-shadow:0px_0px_4px_0px_rgba(0,_0,_0,_0.25)] absolute z-10 button-next bg-white flex items-center justify-center rounded-[50%] w-[40px] -translate-y-[50%] right-0 top-2/4 translate-x-[0] h-[40px]'>
            <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'>
              <path
                d='M8.29492 16.59L12.8749 12L8.29492 7.41L9.70492 6L15.7049 12L9.70492 18L8.29492 16.59Z'
                fill='#1A1A1A'
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
