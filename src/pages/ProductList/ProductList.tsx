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

  console.log(productListQuery.data)

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
              {productListQuery.data &&
                productListQuery.data.data.data.products.map((product) => (
                  <div className='col-span-1' key={product._id}>
                    <ProductItem product={product} />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
