import { useQuery } from '@tanstack/react-query'
import AsideFilter from './components/AsideFilter'
import ProductItem from './components/ProductItem/Product'
import SortProductList from './components/SortProductList'
import useQueryParam from '../../hooks/useQueryParam'
import productApi from '../../apis/product.api'

export default function ProductList() {
  const queryParams = useQueryParam()

  const productListQuery = useQuery({
    queryKey: ['products', queryParams],
    queryFn: () => {
      return productApi.getProducts(queryParams)
    }
  })

  console.log(queryParams)

  return (
    <section className='bg-gray-200 py-6'>
      <div className='container'>
        <div className='grid grid-cols-12 gap-6'>
          <div className='col-span-2'>
            <AsideFilter />
          </div>
          <div className='col-span-10'>
            <SortProductList />
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 mt-6'>
              {Array(30)
                .fill(0)
                .map((_, index) => (
                  <div className='col-span-1' key={index}>
                    <ProductItem />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
