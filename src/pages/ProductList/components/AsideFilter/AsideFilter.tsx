import { createSearchParams, Link } from 'react-router-dom'
import Input from '../../../../components/Input'
import Button from '../../../../components/Button'
import { ProductListConfig } from '../../../../types/product.type'
import { Category } from '../../../../types/category.type'
import classNames from 'classnames'
import path from '../../../../constants/path'

export type QueryConfig = {
  [key in keyof ProductListConfig]: string
}

interface CaregoryTypeProps {
  queryConfig: QueryConfig
  categories: Category[]
}

export default function AsideFilter(props: CaregoryTypeProps) {
  const { queryConfig } = props

  return (
    <div className='py-4'>
      {/* Row 1 */}
      <Link
        to={path.productlist}
        className={classNames('flex items-center font-bold gap-x-2 uppercase', {
          'text-primary': !props.queryConfig.category
        })}
      >
        <svg viewBox='0 0 12 10' className='w-3 h-4 fill-current'>
          <g fillRule='evenodd' stroke='none' strokeWidth={1}>
            <g transform='translate(-373 -208)'>
              <g transform='translate(155 191)'>
                <g transform='translate(218 17)'>
                  <path d='m0 2h2v-2h-2zm4 0h7.1519633v-2h-7.1519633z' />
                  <path d='m0 6h2v-2h-2zm4 0h7.1519633v-2h-7.1519633z' />
                  <path d='m0 10h2v-2h-2zm4 0h7.1519633v-2h-7.1519633z' />
                </g>
              </g>
            </g>
          </g>
        </svg>
        Tất cả danh mục
      </Link>
      {/* Row 2 */}
      <div className='bg-gray-300 h-[1px] my-4'></div>
      <ul>
        {props.categories.map((categoryItem) => {
          // category: chính là category param url -> là id
          const isActive = categoryItem._id === props.queryConfig.category
          return (
            <li className='py-2 pl-2' key={categoryItem._id}>
              <Link
                to={{
                  pathname: path.productlist,
                  search: createSearchParams({
                    ...queryConfig,
                    category: categoryItem._id
                  }).toString()
                }}
                className={classNames('relative px-2', {
                  'text-primary': isActive
                })}
              >
                {isActive && (
                  <svg viewBox='0 0 4 7' className='fill-primary h-2 w-2 absolute top-1 left-[-10px]'>
                    <polygon points='4 3.5 0 0 0 7' />
                  </svg>
                )}
                {categoryItem.name === 'Áo thun' ? 'Thời trang' : categoryItem.name}
              </Link>
            </li>
          )
        })}
      </ul>
      <Link to={path.home} className='flex items-center font-bold mt-4 uppercase'>
        <svg
          enableBackground='new 0 0 15 15'
          viewBox='0 0 15 15'
          x={0}
          y={0}
          className='h-3 w-3 fill-current stroke-current mr-3'
        >
          <g>
            <polyline
              fill='none'
              points='5.5 13.2 5.5 5.8 1.5 1.2 13.5 1.2 9.5 5.8 9.5 10.2'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeMiterlimit={10}
            />
          </g>
        </svg>
        Bộ lọc tìm kiếm
      </Link>
      {/* Row 3 */}
      <div className='bg-gray-300 h-[1px] my-4'></div>
      <div className='my-5'>
        <p className='text-[15px]'>Khoảng giá</p>
        <form className='mt-2'>
          <div className='flex items-start'>
            <Input
              type='text'
              placeholder='đ TỪ'
              className='grow'
              name='from'
              classNameInput='text-sm p-1 outline-none w-full border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm'
            />
            <div className='mx-2 mt-2 flex-shrink-0'>-</div>
            <Input
              placeholder='đ ĐẾN'
              type='text'
              className='grow'
              name='from'
              classNameInput='text-sm p-1 outline-none w-full border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm'
            />
          </div>
          <Button className='w-full p-3 uppercase bg-primary rounded-md text-white text-sm hover:opacity-90 flex justify-center items-center'>
            Áp dụng
          </Button>
        </form>
      </div>
      {/* Row 4 */}
      <div className='bg-gray-300 h-[1px] my-4'></div>
      <p className='text-[15px]'>Đánh giá</p>
      <ul className='my-3'>
        <li className='py-1 pl-2'>
          <Link to='' className='flex items-center text-sm'>
            {Array(5)
              .fill(0)
              .map((_, index) => (
                <svg key={index} viewBox='0 0 9.5 8' className='w-4 h-4'>
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
              ))}
            <span className='ml-2'>trở lên</span>
          </Link>
        </li>
        <li className='py-1 pl-2'>
          <Link to='' className='flex items-center text-sm'>
            {Array(5)
              .fill(0)
              .map((_, index) => (
                <svg key={index} viewBox='0 0 9.5 8' className='w-4 h-4'>
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
              ))}
            <span className='ml-2'>trở lên</span>
          </Link>
        </li>
      </ul>
      {/* Row 5 */}
      <div className='bg-gray-300 h-[1px] my-4'></div>
      <Button className='w-full p-3 uppercase bg-primary rounded-md text-white text-sm hover:opacity-90 flex justify-center items-center'>
        XOÁ TẤT CẢ
      </Button>
    </div>
  )
}
