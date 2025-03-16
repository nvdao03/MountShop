import { Link } from 'react-router-dom'

export default function ProductItem() {
  return (
    <Link to='/'>
      <div className='bg-white overflow-hidden shadow rounded-md hover:translate-y-[0.05rem] hover:shadow-md duration-300 transition-transform'>
        {/* image */}
        <div className='w-full relative pt-[100%]'>
          <img
            src='https://down-vn.img.susercontent.com/file/vn-11134201-7ra0g-m6yvj5h9sp7l8d_tn.webp'
            alt=''
            className='absolute top-0 left-0 bg-white w-full h-full object-cover'
          />
        </div>
        {/* Content */}
        <div className='p-2 overflow-hidden'>
          {/* title */}
          <h4 className='min-h-[2rem] line-clamp-2 text-xs'>
            Thắt lưng nam da cao cấp khóa hợp kim tự động sang trọng lịch lãm - Nịt da bảo hành 12 tháng
          </h4>
          {/* Price */}
          <div className='flex items-center mt-3'>
            <div className='line-through text-xs max-w-[50%] text-gray-500 truncate'>
              <span>₫</span>
              <span>5.000</span>
            </div>
            <div className='text-orange truncate ml-1'>
              <span className='text-xs'>₫</span>
              <span>2.000</span>
            </div>
          </div>
          {/* quantity */}
          <div className='mt-3 flex items-end gap-x-3 text-[12px]'>
            <div className='flex items-center gap-x-1'>
              <svg viewBox='0 0 9.5 8' className='w-3 h-3'>
                <defs>
                  <linearGradient id='ratingStarGradient' x1='50%' x2='50%' y1='0%' y2='100%'>
                    <stop offset={0} stopColor='#ffca11' />
                    <stop offset={1} stopColor='#ffad27' />
                  </linearGradient>
                  <polygon
                    id='ratingStar'
                    points='14.910357 6.35294118 12.4209136 7.66171903 12.896355 4.88968305 10.8823529 2.92651626 13.6656353 2.52208166 14.910357 0 16.1550787 2.52208166 18.9383611 2.92651626 16.924359 4.88968305 17.3998004 7.66171903'
                  />
                </defs>
                <g fill='url(#ratingStarGradient)' fillRule='evenodd' stroke='none' strokeWidth={1}>
                  <g transform='translate(-876 -1270)'>
                    <g transform='translate(155 992)'>
                      <g transform='translate(600 29)'>
                        <g transform='translate(10 239)'>
                          <g transform='translate(101 10)'>
                            <use stroke='#ffa727' strokeWidth='.5' xlinkHref='#ratingStar' />
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
              <span>4.5</span>
            </div>
            <div className='flex items-center gap-x-1'>
              <span>Đã bán</span>
              <span>8,3K</span>
            </div>
          </div>
          {/* location */}
          <div className='mt-3 flex items-center gap-x-1'>
            <img
              src='https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee__item-card-standard-v2/0.1.48/pc/5dd7b4560d0e2d3190e8.svg'
              alt=''
            />
            <span className='text-[10px] text-[#0000008A]'>Ha Noi</span>
          </div>
        </div>
      </div>
    </Link>
  )
}
