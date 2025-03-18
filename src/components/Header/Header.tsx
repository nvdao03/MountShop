import { Link, useNavigate } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
import authApi from '../../apis/auth.api'
import { useContext } from 'react'
import { AppContext } from '../../contexts/app.context'
import path from '../../constants/path'
import Logo from '../../assets/imgs/logo.svg'
import CategoryIcon from '../../assets/icons/category.svg'
import Notification from '../../assets/icons/notification.svg'
import Cart from '../../assets/icons/cart.svg'
import User from '../../assets/icons/user.svg'
import Avatar from '../../assets/imgs/avatar.jpg'
import TV from '../../assets/imgs/category/tv.png'
import Tulanh from '../../assets/imgs/category/tulanh.png'
import Maygiat from '../../assets/imgs/category/maygiat.png'
import Dienthoai from '../../assets/imgs/category/dienthoai.png'
import Trangsuc from '../../assets/imgs/category/trangsuc.png'
import Amthanh from '../../assets/imgs/category/amthanh.png'
import Nhasach from '../../assets/imgs/category/nhasach.png'
import Tuisach from '../../assets/imgs/category/tuisach.png'
import Dongho from '../../assets/imgs/category/dongho.png'
import Thoitrang from '../../assets/imgs/category/quan.png'

export default function Header() {
  const { setIsAuthenticated, isAuthenticated, setUserName } = useContext(AppContext)
  const navigate = useNavigate()

  const logoutMutation = useMutation({
    mutationFn: () => authApi.logoutAccount(),
    onSuccess: () => {
      setIsAuthenticated(false)
      setUserName('')
      navigate('/')
    }
  })

  const handleLogoutMutation = () => {
    logoutMutation.mutate()
  }

  return (
    <header className='py-5 bg-white fixed top-0 w-full right-0 z-50 border-b border-solid border-gray-300'>
      <div className='container'>
        <div className='flex items-center'>
          {/* Logo */}
          <Link to={path.home}>
            <img src={Logo} />
          </Link>

          {/* Category */}
          <div className='ml-8 group relative hidden md:block'>
            <button className='flex items-center py-3 px-3 bg-[#EAE9FC] rounded-lg gap-x-2'>
              <span className='block text-[#4F46E5] text-[14px]'>Danh mục</span>
              <img src={CategoryIcon} alt='' />
            </button>
            <div className='absolute z-10 invisible overflow-y-auto max-h-[346px] group-hover:opacity-100 group-hover:visible transition-all duration-300 bg-white flex flex-col translate-y-[10px] py-2 text-gray-800 rounded-md [box-shadow:0px_0px_8px_0px_rgba(0,_0,_0,_0.25)] left-0 min-w-[300px]'>
              {[
                { img: TV, name: 'TV' },
                { img: Tulanh, name: 'Tủ lạnh' },
                { img: Maygiat, name: 'Máy giặt' },
                { img: Dienthoai, name: 'Điện thoại' },
                { img: Thoitrang, name: 'Thời trang' },
                { img: Trangsuc, name: 'Trang sức' },
                { img: Amthanh, name: 'Âm thanh' },
                { img: Tuisach, name: 'Túi xách' },
                { img: Nhasach, name: 'Nhà sách' },
                { img: Dongho, name: 'Đồng hồ' }
              ].map((item, index) => (
                <Link
                  key={index}
                  to={path.productlist}
                  className='text-sm px-3 py-2 flex items-center gap-x-4 hover:bg-gray-100 transition'
                >
                  <div className='p-2 rounded-lg bg-[#F5F5FA] w-12 h-12 flex items-center justify-center'>
                    <img src={item.img} alt={item.name} className='w-10 h-10 object-contain' />
                  </div>
                  <span className='text-[#1A1A1A]'>{item.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Active */}
          <div className='flex items-center ml-auto gap-x-4'>
            <button className='bg-[#EAE9FC] p-2 rounded-[50%]'>
              <img src={Notification} alt='' />
            </button>
            <Link to='./cart' className='bg-[#EAE9FC] p-2 rounded-[50%]'>
              <img src={Cart} alt='' />
            </Link>
            {/* Chưa login */}
            {!isAuthenticated && (
              <div className='relative group'>
                <button className='bg-[#EAE9FC] p-2 rounded-[50%]'>
                  <img src={User} alt='' className='w-6 block' />
                </button>
                <div className='absolute z-10 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 bg-white flex flex-col translate-y-[10px] py-2 text-gray-800 rounded-md [box-shadow:0px_0px_8px_0px_rgba(0,_0,_0,_0.25)] right-0 min-w-[130px]'>
                  <Link to={path.register} className='text-sm px-3 py-2 hover:underline'>
                    Đăng Ký
                  </Link>
                  <hr />
                  <Link to={path.login} className='text-sm px-3 py-2 hover:underline'>
                    Đăng nhập
                  </Link>
                </div>
              </div>
            )}
            {/* Đã login */}
            {isAuthenticated && (
              <div className='relative group'>
                <button className='w-10 h-10 rounded-[50%]'>
                  <img src={Avatar} alt='avater' className='w-full h-full rounded-[50%] block' />
                </button>
                <div className='absolute z-10 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 bg-white flex flex-col translate-y-[10px] py-2 text-gray-800 rounded-md [box-shadow:0px_0px_8px_0px_rgba(0,_0,_0,_0.25)] right-0 min-w-[150px]'>
                  <Link to={path.profile} className='text-sm px-3 py-2 hover:underline'>
                    Tài khoản của tôi
                  </Link>
                  <Link to={path.cart} className='text-sm px-3 py-2 hover:underline'>
                    Đơn hàng
                  </Link>
                  <Link to={path.home} onClick={handleLogoutMutation} className='text-sm px-3 py-2 hover:underline'>
                    Đăng xuất
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
