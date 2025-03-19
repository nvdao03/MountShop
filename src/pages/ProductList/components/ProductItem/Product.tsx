import { Link } from 'react-router-dom'
import { Product as ProductType } from '../../../../types/product.type'
import { fomatNumberToSocialStyle, formatCurrency } from '../../../../types/utils.type'
import ProductRating from '../../../../components/ProductRating'

interface ProductPropType {
  product: ProductType
}

export default function ProductItem({ product }: ProductPropType) {
  return (
    <Link to={product._id} className='h-full'>
      <div className='bg-white h-full flex flex-col overflow-hidden shadow rounded-md hover:translate-y-[0.05rem] hover:shadow-md duration-300 transition-transform'>
        {/* image */}
        <div className='w-full relative pt-[100%]'>
          <img
            src={product.image}
            alt={product.name}
            className='absolute top-0 left-0 bg-white w-full h-full object-cover'
          />
        </div>
        {/* Content */}
        <div className='p-2 overflow-hidden h-full flex flex-col'>
          {/* title */}
          <h4 className='min-h-[2rem] line-clamp-2 text-[14px]'>{product.name}</h4>
          {/* Price */}
          <div className='flex items-center mt-3'>
            <div className='line-through text-xs max-w-[50%] text-gray-500 truncate'>
              <span>₫</span>
              <span>{formatCurrency(product.price_before_discount)}</span>
            </div>
            <div className='text-primary truncate ml-1'>
              <span className='text-xs'>₫</span>
              <span>{formatCurrency(product.price)}</span>
            </div>
          </div>
          {/* quantity */}
          <div
            className={
              product.rating > 0
                ? 'mt-3 flex items-center gap-x-3 text-[12px]'
                : 'flex items-center gap-x-3 text-[12px] mt-auto -ml-3'
            }
          >
            <ProductRating rating={product.rating} />
            <div className='flex items-center gap-x-1 leading-[0]'>
              <span>Đã bán</span>
              <span>{fomatNumberToSocialStyle(product.sold)}</span>
            </div>
          </div>
          {/* location */}
          <div className={product.rating > 0 ? 'mt-3 flex items-center gap-x-1' : 'mt-auto flex items-center gap-x-1'}>
            <img
              src='https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee__item-card-standard-v2/0.1.48/pc/5dd7b4560d0e2d3190e8.svg'
              alt=''
            />
            <span className='text-[10px] text-[#0000008A] mt-auto'>Ha Noi</span>
          </div>
        </div>
      </div>
    </Link>
  )
}
