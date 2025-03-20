import { useContext } from 'react'
import { AppContext } from '../../contexts/app.context'
import ProductRating from '../../components/ProductRating'
import { formatCurrency } from '../../types/utils.type'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { uniqBy } from 'lodash'
import { Product } from '../../types/product.type'

export default function Cart() {
  const { cartList, setCartList, isAuthenticated } = useContext(AppContext)
  const navigate = useNavigate()

  const totalPrice = cartList.reduce((accumalator, product) => {
    return product.price + accumalator
  }, 0)

  const handleDeleteProductCard = (id: string) => {
    const newCardList = cartList.filter((item) => item._id !== id)
    setCartList(newCardList)
    toast.success('Đã xoá sản phẩm')
  }

  const handlePay = () => {
    if (!isAuthenticated) {
      navigate('/login')
      return
    }
    if (isAuthenticated && cartList.length > 0) {
      toast.success('Đã đặt hàng thành công')
      setCartList([])
    } else {
      toast.warning('Vui lòng chọn sản phẩm')
    }
  }

  console.log(cartList)

  const getProductQuantity = (productId: string) => {
    const result = cartList.filter((product) => product._id === productId).length
    return result
  }

  const handleIncreaseQuantity = (product: Product) => {
    return setCartList((prev) => [...prev, product])
  }

  const handleDecreaseQuantity = (productId: string) => {
    const index = cartList.findIndex((item) => item._id === productId)
    if (index !== -1) {
      const newCartList = [...cartList]
      newCartList.splice(index, 1)
      setCartList(newCartList)
    }
  }

  const cardListUnique = uniqBy(cartList, '_id')

  return (
    <div className='mt-[88px] py-10 bg-[#F5F5FA]'>
      <div className='container'>
        <div className='grid grid-cols-12 gap-x-3'>
          {/* Item 1 */}
          <div className='col-span-9'>
            <h2 className='text-[18px] font-semibold'>Giỏ hàng của bạn</h2>
            {cardListUnique.map((product) => (
              <div className='bg-white flex mt-6 p-5 rounded-lg'>
                {/* Item 1 */}
                <div className='col-span-2 flex-shrink-0'>
                  <img src={product.image} alt='' className='bg-red-300 flex-shrink-0 rounded-lg w-[100px] h-[100px]' />
                </div>
                {/* Item 2 */}
                <div className='col-span-6 w-[50%] mr-[25px] flex flex-col justify-between ml-4'>
                  <h4 className=' leading-[1.5]'>{product.name}</h4>
                  <ProductRating rating={product.rating} />
                  <div className='flex flex-col gap-x-2'>
                    <div className='flex items-center gap-x-3'>
                      <span className='text-primary text-[18px]'>{formatCurrency(product.price)}</span>
                      <span className='text-gray-500 line-through'>
                        {formatCurrency(product.price_before_discount)}
                      </span>
                    </div>
                  </div>
                </div>
                {/* Item 3 */}
                <div className='flex items-center gap-x-2 col-start-9 ml-auto'>
                  <div className='flex items-center gap-x-2'>
                    <span className='mr-1'>Số lượng</span>
                    <div className='flex items-center'>
                      <button
                        onClick={() => handleDecreaseQuantity(product._id)}
                        className='h-10 w-10 bg-primary rounded-l-md text-white'
                      >
                        -
                      </button>
                      <span className='bg-white w-7 h-10 flex items-center justify-center border-t border-b border-solid border-[#E6E6E6]'>
                        {getProductQuantity(product._id)}
                      </span>
                      <button
                        onClick={() => handleIncreaseQuantity(product)}
                        className='h-10 w-10 bg-primary rounded-r-md text-white'
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button className='ml-4' onClick={() => handleDeleteProductCard(product._id)}>
                    <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'>
                      <path
                        d='M4.5 20.125C4.5 20.6223 4.69754 21.0992 5.04917 21.4508C5.4008 21.8025 5.87772 22 6.375 22H17.625C18.1223 22 18.5992 21.8025 18.9508 21.4508C19.3025 21.0992 19.5 20.6223 19.5 20.125V7H4.5V20.125ZM15.125 10.125C15.125 9.95924 15.1908 9.80027 15.3081 9.68306C15.4253 9.56585 15.5842 9.5 15.75 9.5C15.9158 9.5 16.0747 9.56585 16.1919 9.68306C16.3091 9.80027 16.375 9.95924 16.375 10.125V18.875C16.375 19.0408 16.3091 19.1997 16.1919 19.3169C16.0747 19.4342 15.9158 19.5 15.75 19.5C15.5842 19.5 15.4253 19.4342 15.3081 19.3169C15.1908 19.1997 15.125 19.0408 15.125 18.875V10.125ZM11.375 10.125C11.375 9.95924 11.4408 9.80027 11.5581 9.68306C11.6753 9.56585 11.8342 9.5 12 9.5C12.1658 9.5 12.3247 9.56585 12.4419 9.68306C12.5591 9.80027 12.625 9.95924 12.625 10.125V18.875C12.625 19.0408 12.5591 19.1997 12.4419 19.3169C12.3247 19.4342 12.1658 19.5 12 19.5C11.8342 19.5 11.6753 19.4342 11.5581 19.3169C11.4408 19.1997 11.375 19.0408 11.375 18.875V10.125ZM7.625 10.125C7.625 9.95924 7.69085 9.80027 7.80806 9.68306C7.92527 9.56585 8.08424 9.5 8.25 9.5C8.41576 9.5 8.57473 9.56585 8.69194 9.68306C8.80915 9.80027 8.875 9.95924 8.875 10.125V18.875C8.875 19.0408 8.80915 19.1997 8.69194 19.3169C8.57473 19.4342 8.41576 19.5 8.25 19.5C8.08424 19.5 7.92527 19.4342 7.80806 19.3169C7.69085 19.1997 7.625 19.0408 7.625 18.875V10.125ZM20.125 3.25001H15.4375L15.0703 2.51954C14.9925 2.36337 14.8727 2.23201 14.7243 2.14022C14.576 2.04844 14.4049 1.99988 14.2305 2.00001H9.76562C9.59155 1.99934 9.42081 2.04772 9.27297 2.1396C9.12512 2.23149 9.00615 2.36316 8.92969 2.51954L8.5625 3.25001H3.875C3.70924 3.25001 3.55027 3.31585 3.43306 3.43306C3.31585 3.55027 3.25 3.70925 3.25 3.87501V5.12501C3.25 5.29077 3.31585 5.44974 3.43306 5.56695C3.55027 5.68416 3.70924 5.75001 3.875 5.75001H20.125C20.2908 5.75001 20.4497 5.68416 20.5669 5.56695C20.6841 5.44974 20.75 5.29077 20.75 5.12501V3.87501C20.75 3.70925 20.6841 3.55027 20.5669 3.43306C20.4497 3.31585 20.2908 3.25001 20.125 3.25001Z'
                        fill='#FF3B30'
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
          {/* Item 2 */}
          <div className='col-span-3 bg-white p-5 rounded-lg'>
            <h2 className='text-[18px] font-semibold mb-3'>Thông tin đơn hàng</h2>
            <div>
              <div className='flex items-center justify-between py-3'>
                <span>Tạm tính</span>
                <span>0</span>
              </div>
              <div className='flex items-center justify-between py-3'>
                <span>Khuyến mãi</span>
                <span>0</span>
              </div>
              <div className='flex items-center justify-between py-3'>
                <span>Thành tiền</span>
                <span className='text-primary'>{formatCurrency(totalPrice)}</span>
              </div>
            </div>
            <button
              onClick={handlePay}
              className='w-full mt-5 py-3 bg-primary text-white justify-center flex items-center rounded-lg'
            >
              Tiến hành thanh toán
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
