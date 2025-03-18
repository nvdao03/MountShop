import { useQuery } from '@tanstack/react-query'
import productApi from '../../../../apis/product.api'
import Product from '../../../ProductList/components/ProductItem'
import { Link } from 'react-router-dom'

export default function Suggestions() {
  const getProducts = useQuery({
    queryKey: ['products'],
    queryFn: () => productApi.getProducts()
  })

  return (
    <div className='mt-12'>
      <div className='container'>
        <h2 className='text-black text-[18px] font-semibold'>Gợi ý dành cho bạn</h2>
        <div className='mt-7 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5'>
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
              <div>
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
              </div>
            </>
          )}
          {getProducts.data &&
            getProducts.data.data.data.products.slice(0, 20).map((product) => (
              <Link to='#!'>
                <Product key={product._id} product={product} />
              </Link>
            ))}
        </div>
      </div>
    </div>
  )
}
