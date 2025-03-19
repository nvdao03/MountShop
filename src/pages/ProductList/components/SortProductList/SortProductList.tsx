import { createSearchParams, useNavigate } from 'react-router-dom'
import { sortBy, order as orderConstant } from '../../../../constants/product'
import { ProductListConfig } from '../../../../types/product.type'
import classNames from 'classnames'
import path from '../../../../constants/path'
import { omit } from 'lodash'

export type QueryConfig = {
  [key in keyof ProductListConfig]: string
}

interface SortProductListProps {
  queryConfig: QueryConfig
}

export default function SortProductList({ queryConfig }: SortProductListProps) {
  // Giá trị mặc định
  const { sort_by = sortBy.createdAt, order } = queryConfig
  const navigate = useNavigate()

  const isActiveSortBy = (sortByValue: Exclude<ProductListConfig['sort_by'], undefined>) => {
    return sortByValue === sort_by
  }

  // Navigate cũng có thể nhận được vào là 1 object. createSearchParams() gửi đi cái params
  const handleSort = (sortByValue: Exclude<ProductListConfig['sort_by'], undefined>) => {
    navigate({
      pathname: path.productlist,
      search: createSearchParams(
        omit(
          {
            ...queryConfig,
            sort_by: sortByValue
          },
          ['order']
        )
      ).toString()
    })
  }

  const handlePriceOrder = (orderValue: Exclude<ProductListConfig['order'], undefined>) => {
    navigate({
      pathname: path.productlist,
      search: createSearchParams({
        ...queryConfig,
        sort_by: sortBy.price,
        order: orderValue
      }).toString()
    })
  }

  return (
    <div className='border border-solid border-gray-400 py-4 px-3 shadow-sm rounded-[5px]'>
      <div className='flex flex-wrap items-start justify-between gap-2'>
        <div className='flex items-center flex-wrap gap-3'>
          <span className='block mr-1 text-[15px]'>Sắp xếp theo</span>
          <button
            className={classNames(
              'h-8 px-4 transition-all duration-300 ease-in-out rounded-md border border-solid border-gray-400 capitalize text-sm text-center',
              {
                'bg-primary text-white': isActiveSortBy(sortBy.view),
                'hover:bg-primary hover:text-white text-black bg-white': !isActiveSortBy(sortBy.view)
              }
            )}
            onClick={() => handleSort(sortBy.view)}
          >
            Phổ biến
          </button>
          <button
            className={classNames(
              'h-8 px-4 transition-all duration-300 ease-in-out rounded-md border border-solid border-gray-400 capitalize text-sm text-center',
              {
                'bg-primary text-white': isActiveSortBy(sortBy.createdAt),
                'hover:bg-primary hover:text-white text-black bg-white': !isActiveSortBy(sortBy.createdAt)
              }
            )}
            onClick={() => handleSort(sortBy.createdAt)}
          >
            Mới nhất
          </button>
          <button
            className={classNames(
              'h-8 px-4 transition-all duration-300 ease-in-out rounded-md border border-solid border-gray-400 capitalize text-sm text-center',
              {
                'bg-primary text-white': isActiveSortBy(sortBy.sold),
                'hover:bg-primary hover:text-white text-black bg-white': !isActiveSortBy(sortBy.sold)
              }
            )}
            onClick={() => handleSort(sortBy.sold)}
          >
            Bán chạy
          </button>
          <div className='relative transition-all duration-300 ease-in-out hover:text-white rounded-md border border-solid border-gray-400'>
            <select
              value={order || ''}
              className='outline-none appearance-none h-8 pl-4 pr-14 hover:bg-slate-100 rounded-md capitalize bg-white text-black text-sm text-left'
              onChange={(event) =>
                handlePriceOrder(event.target.value as Exclude<ProductListConfig['order'], undefined>)
              }
            >
              <option value='' disabled>
                Giá
              </option>
              <option value={orderConstant.asc}>Giá: Thấp đến cao</option>
              <option value={orderConstant.desc}>Giá: Cap đến thấp</option>
            </select>
            <div className='absolute right-0 top-[50%] -translate-x-[50%] -translate-y-[50%] text-gray-600 pointer-events-none'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='w-4 h-4'
              >
                <path strokeLinecap='round' strokeLinejoin='round' d='M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3' />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-5'>
        <div className='flex items-center text-[15px] gap-x-4'>
          <p>Tìm kiếm sản phẩm</p>
          <form className='rounded-md border border-solid border-gray-400 text-[14px] overflow-hidden'>
            <div className='bg-white rounded-sm p-1 flex'>
              <input
                placeholder='Tìm kiếm sản phẩm'
                type='text'
                name='Search'
                className='text-black px-3  border-none outline-none bg-transparent flex-grow'
              />
              <button className='text-slate-400 flex item-center justify-center mr-1 flex-shrink-0 hover:opacity-90'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='size-6'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z'
                  />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
