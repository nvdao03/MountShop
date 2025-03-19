import { useQuery } from '@tanstack/react-query'
import { Link, useParams } from 'react-router-dom'
import productApi from '../../apis/product.api'
import ProductRating from '../../components/ProductRating'
import { fomatNumberToSocialStyle, formatCurrency, rateSale } from '../../types/utils.type'
import CartImg from '../../assets/imgs/cart/card.png'
import { useEffect, useMemo, useState } from 'react'

export default function ProductDetail() {
  const { id } = useParams()

  const { data: productDetailData } = useQuery({
    queryKey: ['product', id],
    queryFn: () => productApi.getProductDetail(id as string)
  })

  const [currentIndexImage, setCurrentIndexImage] = useState([0, 5]) // mảng current index có độ dài là 5
  const product = productDetailData?.data.data
  const [activeImage, setActiveImage] = useState('') // Tạo state quản lý active
  const currentImages = useMemo(() => (product ? product?.images.slice(...currentIndexImage) : []), [product])

  useEffect(() => {
    if (product && product.images.length > 0) {
      setActiveImage(product.images[0])
    }
  }, [product])

  const chooseActive = (img: string) => {
    setActiveImage(img)
  }

  if (!product) return null

  return (
    <div className='mt-[88px] bg-[#F5F5FA] py-6'>
      <div className='p-4'>
        <div className='container'>
          <div className='grid lg:grid-cols-12 gap-9 grid-cols-1'>
            <div className='col-span-6 bg-white p-8 rounded-lg'>
              {!product && (
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
              )}
              {product && (
                <>
                  <div className='relative w-full pt-[100%] shadow rounded-lg'>
                    <img
                      src={activeImage}
                      alt={product.name}
                      className='absolute rounded-lg top-0 left-0 w-full h-full bg-white object-cover'
                    />
                  </div>
                  <div className='relative mt-4 grid grid-cols-5 gap-1'>
                    {currentImages.map((img, index) => {
                      // const isActive = index === 0
                      return (
                        <div className='relative w-full pt-[100%]' key={img} onClick={() => chooseActive(img)}>
                          <img
                            src={img}
                            alt={product.name}
                            className='absolute top-0 rounded-lg left-0 w-full cursor-pointer h-full bg-white object-cover'
                          />
                          {/* {isActive && <div className='rounded-lg absolute inset-0 border-2 border-primary'></div>} */}
                        </div>
                      )
                    })}
                  </div>
                </>
              )}
            </div>
            <div className='col-span-6 bg-white p-6 rounded-lg'>
              {!product && (
                <>
                  <div className='col-span-5'>
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
              {product && (
                <>
                  <h1 className='text-xl font-medium'>{product.name}</h1>
                  <div className='mt-3 flex items-center gap-4'>
                    <div className='flex items-center gap-x-2'>
                      <span className='block'>{product.rating}</span>
                      <ProductRating rating={product.rating} />
                    </div>
                    <div>|</div>
                    <div className='flex items-center gap-x-1 leading-[0]'>
                      <span>Đã bán</span>
                      <span>{fomatNumberToSocialStyle(product.sold)}</span>
                    </div>
                  </div>
                  <div className='mt-8 flex items-center'>
                    <p className='text-3xl font-medium text-primary'>{formatCurrency(product.price)}đ</p>
                    <p className='text-gray-500 line-through ml-4'>₫{formatCurrency(product.price_before_discount)}</p>
                    <div className='ml-5 rounded-md bg-primary text-white px-2 py-1 text-xs font-semibold'>
                      {rateSale(product.price_before_discount, product.price)} giảm giá
                    </div>
                  </div>
                  <div className='mt-10'>
                    <button className='w-full py-3 text-primary flex items-center justify-center gap-x-3 border border-solid border-primary rounded-lg'>
                      <span>Thêm vào giỏ hàng</span>
                      <svg xmlns='http://www.w3.org/2000/svg' width='24' height='25' viewBox='0 0 24 25' fill='none'>
                        <path
                          d='M19.5249 14.7224H9.34625L9.57351 15.8336H18.8936C19.4283 15.8336 19.8247 16.3301 19.7062 16.8516L19.5146 17.6945C20.1636 18.0095 20.6111 18.6748 20.6111 19.4447C20.6111 20.5281 19.725 21.4045 18.6381 21.3889C17.6025 21.374 16.7509 20.5337 16.723 19.4984C16.7077 18.9329 16.9342 18.4203 17.3064 18.0557H10.0269C10.3873 18.4087 10.6111 18.9004 10.6111 19.4447C10.6111 20.5493 9.69 21.4388 8.57396 21.387C7.58299 21.341 6.77705 20.5403 6.72497 19.5496C6.68476 18.7845 7.08733 18.1102 7.69896 17.7584L5.25983 5.83355H2.83333C2.37309 5.83355 2 5.46046 2 5.00022V4.44466C2 3.98442 2.37309 3.61133 2.83333 3.61133H6.39337C6.78924 3.61133 7.13045 3.88984 7.20979 4.27765L7.52806 5.83355H21.1663C21.7011 5.83355 22.0974 6.33011 21.9789 6.85157L20.3375 14.0738C20.2513 14.4532 19.914 14.7224 19.5249 14.7224ZM16.1667 9.44466H14.5V8.05577C14.5 7.74893 14.2513 7.50022 13.9444 7.50022H13.3889C13.0821 7.50022 12.8333 7.74893 12.8333 8.05577V9.44466H11.1667C10.8598 9.44466 10.6111 9.69338 10.6111 10.0002V10.5558C10.6111 10.8626 10.8598 11.1113 11.1667 11.1113H12.8333V12.5002C12.8333 12.8071 13.0821 13.0558 13.3889 13.0558H13.9444C14.2513 13.0558 14.5 12.8071 14.5 12.5002V11.1113H16.1667C16.4735 11.1113 16.7222 10.8626 16.7222 10.5558V10.0002C16.7222 9.69338 16.4735 9.44466 16.1667 9.44466Z'
                          fill='#4F46E5'
                        />
                      </svg>
                    </button>
                    <Link
                      to='/cart'
                      className='w-full mt-4 py-3 text-white bg-primary flex items-center justify-center gap-x-3 border border-solid border-primary rounded-lg'
                    >
                      Mua ngay
                    </Link>
                  </div>
                  <div className='mt-10'>
                    <img src={CartImg} alt='' className='w-full block' />
                  </div>
                </>
              )}
            </div>
          </div>

          <div className='grid md:grid-cols-12 gap-9 mt-8 grid-cols-1'>
            <div className='col-span-6 bg-white p-6 rounded-lg'>
              <h2 className='font-semibold text-[17px]'>Giới thiệu về sản phẩm</h2>
              <div className='mt-6'>
                <div
                  className='leading-[1.6]'
                  dangerouslySetInnerHTML={{
                    __html: product.description
                  }}
                ></div>
              </div>
            </div>
            <div className='col-span-6 bg-white p-6 rounded-lg'>
              <h2 className='font-semibold text-[17px]'>Thông tin cơ bản</h2>
              <div className='mt-6'>
                <div className='lg:grid-cols-12 grid gap-3'>
                  <p className='lg:col-span-4 col-span-12'>Tên sản phẩm :</p>
                  <p className='lg:col-span-8 col-span-12 text-primary'>{product.name}</p>
                </div>
              </div>
              <div className='mt-6'>
                <div className='lg:grid-cols-12 grid gap-3 grid-cols-1'>
                  <p className='lg:col-span-4 col-span-12'>Khuyến mãi :</p>
                  <p className='lg:col-span-8 col-span-12 text-primary'>
                    {rateSale(product.price_before_discount, product.price)}
                  </p>
                </div>
              </div>
              <div className='mt-6'>
                <div className='lg:grid-cols-12 grid gap-3 grid-cols-1'>
                  <p className='lg:col-span-4 col-span-12'>Giá bán gốc :</p>
                  <p className='lg:col-span-8 col-span-12 text-primary'>
                    {formatCurrency(product.price_before_discount)}đ
                  </p>
                </div>
              </div>
              <div className='mt-6'>
                <div className='lg:grid-cols-12 grid gap-3 grid-cols-1'>
                  <p className='lg:col-span-4 col-span-12'>Giảm giá còn:</p>
                  <p className='lg:col-span-8 col-span-12 text-primary'>{formatCurrency(product.price)}đ</p>
                </div>
              </div>
              <div className='mt-6'>
                <div className='lg:grid-cols-12 grid gap-3 grid-cols-1'>
                  <p className='lg:col-span-4 col-span-12'>Số lượng đã bán :</p>
                  <p className='lg:col-span-8 col-span-12 text-primary'>{product.sold} sản phẩm</p>
                </div>
              </div>
              <div className='mt-6'>
                <div className='lg:grid-cols-12 grid gap-3 grid-cols-1'>
                  <p className='lg:col-span-4 col-span-12'>Sản phẩm hiện còn :</p>
                  <p className='lg:col-span-8 col-span-12 text-primary'>{product.quantity} sản phẩm</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
