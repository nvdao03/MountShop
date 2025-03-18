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
        <h2 className='text-[#4F46E5] text-[20px] font-semibold'>Deal chớp nhoáng</h2>
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
              {getProducts.isLoading && (
                <>
                  <div
                    role='status'
                    className='max-w-sm p-4 border border-gray-200 rounded-sm shadow-sm animate-pulse md:p-6 dark:border-gray-700'
                  >
                    <div className='flex items-center justify-center h-48 mb-4 bg-gray-300 rounded-sm dark:bg-gray-700'>
                      <svg
                        className='w-10 h-10 text-gray-200 dark:text-gray-600'
                        aria-hidden='true'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='currentColor'
                        viewBox='0 0 16 20'
                      >
                        <path d='M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z' />
                        <path d='M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z' />
                      </svg>
                    </div>
                    <div className='h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4' />
                    <div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5' />
                    <div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5' />
                    <div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700' />
                    <div className='flex items-center mt-4'>
                      <svg
                        className='w-10 h-10 me-3 text-gray-200 dark:text-gray-700'
                        aria-hidden='true'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                      >
                        <path d='M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z' />
                      </svg>
                      <div>
                        <div className='h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2' />
                        <div className='w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700' />
                      </div>
                    </div>
                    <span className='sr-only'>Loading...</span>
                  </div>
                  <div
                    role='status'
                    className='max-w-sm p-4 border border-gray-200 rounded-sm shadow-sm animate-pulse md:p-6 dark:border-gray-700'
                  >
                    <div className='flex items-center justify-center h-48 mb-4 bg-gray-300 rounded-sm dark:bg-gray-700'>
                      <svg
                        className='w-10 h-10 text-gray-200 dark:text-gray-600'
                        aria-hidden='true'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='currentColor'
                        viewBox='0 0 16 20'
                      >
                        <path d='M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z' />
                        <path d='M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z' />
                      </svg>
                    </div>
                    <div className='h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4' />
                    <div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5' />
                    <div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5' />
                    <div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700' />
                    <div className='flex items-center mt-4'>
                      <svg
                        className='w-10 h-10 me-3 text-gray-200 dark:text-gray-700'
                        aria-hidden='true'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                      >
                        <path d='M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z' />
                      </svg>
                      <div>
                        <div className='h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2' />
                        <div className='w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700' />
                      </div>
                    </div>
                    <span className='sr-only'>Loading...</span>
                  </div>
                  <div
                    role='status'
                    className='max-w-sm p-4 border border-gray-200 rounded-sm shadow-sm animate-pulse md:p-6 dark:border-gray-700'
                  >
                    <div className='flex items-center justify-center h-48 mb-4 bg-gray-300 rounded-sm dark:bg-gray-700'>
                      <svg
                        className='w-10 h-10 text-gray-200 dark:text-gray-600'
                        aria-hidden='true'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='currentColor'
                        viewBox='0 0 16 20'
                      >
                        <path d='M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z' />
                        <path d='M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z' />
                      </svg>
                    </div>
                    <div className='h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4' />
                    <div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5' />
                    <div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5' />
                    <div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700' />
                    <div className='flex items-center mt-4'>
                      <svg
                        className='w-10 h-10 me-3 text-gray-200 dark:text-gray-700'
                        aria-hidden='true'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                      >
                        <path d='M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z' />
                      </svg>
                      <div>
                        <div className='h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2' />
                        <div className='w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700' />
                      </div>
                    </div>
                    <span className='sr-only'>Loading...</span>
                  </div>
                  <div
                    role='status'
                    className='max-w-sm p-4 border border-gray-200 rounded-sm shadow-sm animate-pulse md:p-6 dark:border-gray-700'
                  >
                    <div className='flex items-center justify-center h-48 mb-4 bg-gray-300 rounded-sm dark:bg-gray-700'>
                      <svg
                        className='w-10 h-10 text-gray-200 dark:text-gray-600'
                        aria-hidden='true'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='currentColor'
                        viewBox='0 0 16 20'
                      >
                        <path d='M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z' />
                        <path d='M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z' />
                      </svg>
                    </div>
                    <div className='h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4' />
                    <div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5' />
                    <div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5' />
                    <div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700' />
                    <div className='flex items-center mt-4'>
                      <svg
                        className='w-10 h-10 me-3 text-gray-200 dark:text-gray-700'
                        aria-hidden='true'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                      >
                        <path d='M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z' />
                      </svg>
                      <div>
                        <div className='h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2' />
                        <div className='w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700' />
                      </div>
                    </div>
                    <span className='sr-only'>Loading...</span>
                  </div>
                  <div
                    role='status'
                    className='max-w-sm p-4 border border-gray-200 rounded-sm shadow-sm animate-pulse md:p-6 dark:border-gray-700'
                  >
                    <div className='flex items-center justify-center h-48 mb-4 bg-gray-300 rounded-sm dark:bg-gray-700'>
                      <svg
                        className='w-10 h-10 text-gray-200 dark:text-gray-600'
                        aria-hidden='true'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='currentColor'
                        viewBox='0 0 16 20'
                      >
                        <path d='M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z' />
                        <path d='M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z' />
                      </svg>
                    </div>
                    <div className='h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4' />
                    <div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5' />
                    <div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5' />
                    <div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700' />
                    <div className='flex items-center mt-4'>
                      <svg
                        className='w-10 h-10 me-3 text-gray-200 dark:text-gray-700'
                        aria-hidden='true'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                      >
                        <path d='M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z' />
                      </svg>
                      <div>
                        <div className='h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2' />
                        <div className='w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700' />
                      </div>
                    </div>
                    <span className='sr-only'>Loading...</span>
                  </div>
                </>
              )}
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
