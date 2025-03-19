import { createSearchParams, Link, useNavigate } from 'react-router-dom'
import Input from '../../../../components/Input'
import Button from '../../../../components/Button'
import { ProductListConfig } from '../../../../types/product.type'
import { Category } from '../../../../types/category.type'
import classNames from 'classnames'
import path from '../../../../constants/path'
import RatingStar from '../../../../components/RatingStar'
import { omit } from 'lodash'

export type QueryConfig = {
  [key in keyof ProductListConfig]: string
}

interface CaregoryTypeProps {
  queryConfig: QueryConfig
  categories: Category[]
}

export default function AsideFilter(props: CaregoryTypeProps) {
  const { queryConfig } = props
  const navigate = useNavigate()

  const handleRemoveAll = () => {
    navigate({
      pathname: path.productlist,
      search: createSearchParams(omit(queryConfig, ['category', 'rating_filter', 'sort_by'])).toString()
    })
  }

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
      <RatingStar queryConfig={queryConfig} />
      {/* Row 5 */}
      <div className='bg-gray-300 h-[1px] my-4'></div>
      <Button
        onClick={handleRemoveAll}
        className='w-full p-3 uppercase bg-primary rounded-md text-white text-sm hover:opacity-90 flex justify-center items-center'
      >
        XOÁ TẤT CẢ
      </Button>
    </div>
  )
}
