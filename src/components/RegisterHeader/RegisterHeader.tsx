import { Link, useMatch } from 'react-router-dom'
import Logo from '../../assets/imgs/logo.svg'

export default function RegisterHeader() {
  const registerMatch = useMatch('/register')
  const isRegister = Boolean(registerMatch)

  return (
    <header className='py-5 border-b border-solid boder-[#EAEAEA]'>
      <div className='container'>
        <nav className='flex items-center justify-between'>
          <div className='flex items-end'>
            <Link to='/'>
              <img src={Logo} alt='logo' />
            </Link>
            <div className='text-xl ml-5'>{isRegister ? 'Đăng ký' : 'Đăng nhập'}</div>
          </div>
          <Link to='#!' className='text-[16px] text-primary hover:underline'>
            Bạn cần giúp đỡ
          </Link>
        </nav>
      </div>
    </header>
  )
}
