import { useQuery } from '@tanstack/react-query'
import AsideFilter from './components/AsideFilter'
import SortProductList from './components/SortProductList'
import useQueryParam from '../../hooks/useQueryParam'
import productApi from '../../apis/product.api'
import ProductItem from './components/ProductItem/Product'
import { ProductListConfig } from '../../types/product.type'
import { isUndefined, omitBy } from 'lodash'
import { Link } from 'react-router-dom'
import path from '../../constants/path'

export type QueryConfig = {
  [key in keyof ProductListConfig]: string
}
export default function ProductList() {
  const queryParams: QueryConfig = useQueryParam()

  const queryConfig: QueryConfig = omitBy(
    {
      page: queryParams.page || '1',
      limit: queryParams.limit || 15,
      sort_by: queryParams.sort_by,
      exclude: queryParams.exclude,
      name: queryParams.name,
      order: queryParams.order,
      price_min: queryParams.price_min,
      price_max: queryParams.price_max,
      rating_filter: queryParams.rating_filter
    },
    isUndefined
  )

  const productListQuery = useQuery({
    queryKey: ['products', queryConfig],
    queryFn: () => {
      return productApi.getProducts(queryConfig as ProductListConfig)
    },
    keepPreviousData: true
  })

  console.log(queryParams)

  let totalPages = 0
  if (productListQuery.data?.data.data.pagination) {
    totalPages = Number(productListQuery.data.data.data.pagination.page_size)
  }

  return (
    <section className='pt-6 mt-[88px] mb-8'>
      <div className='container'>
        <div className='grid grid-cols-12 gap-6'>
          <div className='col-span-2'>
            <AsideFilter />
          </div>
          <div className='col-span-10'>
            <SortProductList queryConfig={queryConfig} />
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-3 mt-6'>
              {productListQuery.data &&
                productListQuery.data.data.data.products.map((product) => (
                  <div className='col-span-1' key={product._id}>
                    <ProductItem product={product} />
                  </div>
                ))}
            </div>
            <div className='mt-10 flex justify-center'>
              <nav aria-label='Page navigation example'>
                <ul className='inline-flex -space-x-px text-base h-10'>
                  <li>
                    {Number(queryConfig.page) === 1 ? (
                      <span className='flex cursor-not-allowed items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'>
                        Previous
                      </span>
                    ) : (
                      <Link
                        to={{
                          pathname: path.productlist,
                          search: `page=${Number(queryConfig.page) - 1}`
                        }}
                        className='flex  items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                      >
                        Previous
                      </Link>
                    )}
                  </li>
                  {Array(totalPages)
                    .fill(0)
                    .map((_, index) => {
                      const pageNumber = index + 1
                      return (
                        <li key={pageNumber}>
                          <Link
                            to={{
                              pathname: path.productlist,
                              search: `page=${pageNumber}`
                            }}
                            className={`flex items-center justify-center px-4 h-10 leading-tight ${
                              Number(queryConfig.page) === pageNumber
                                ? 'text-blue-600 bg-blue-50'
                                : 'text-gray-500 bg-white'
                            } border border-gray-300 hover:bg-gray-100`}
                          >
                            {pageNumber}
                          </Link>
                        </li>
                      )
                    })}
                  <li>
                    {Number(queryConfig.page) >= totalPages ? (
                      <span className='flex cursor-not-allowed items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg'>
                        Next
                      </span>
                    ) : (
                      <Link
                        to={{
                          pathname: path.productlist,
                          search: `page=${Number(queryConfig.page) + 1}`
                        }}
                        className='flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100'
                      >
                        Next
                      </Link>
                    )}
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
