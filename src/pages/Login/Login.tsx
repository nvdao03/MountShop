import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { Schema, schema } from '../../utils/rules'
import { useMutation } from '@tanstack/react-query'
import authApi from '../../apis/auth.api'
import { isAxiosUnprocessableEntityError } from '../../utils/utils'
import { ErrorResponse } from '../../types/utils.type'
import Input from '../../components/Input'
import { useContext } from 'react'
import { AppContext } from '../../contexts/app.context'
import Button from '../../components/Button'
import path from '../../constants/path'
import AnimateLogin from './components/AnimateLogin'

type FormData = Omit<Schema, 'confirm_password'>
const loginSchema = schema.omit(['confirm_password'])

export default function Login() {
  const { setIsAuthenticated } = useContext(AppContext)
  const navigate = useNavigate() // Sử dụng hook useNavigate để khi login thành công sẽ chuyển trang
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(loginSchema)
  })

  const loginAccountMutation = useMutation({
    mutationFn: (body: FormData) => authApi.loginAccount(body)
  })

  const onSubmit = handleSubmit((data) => {
    loginAccountMutation.mutate(data, {
      onSuccess: () => {
        setIsAuthenticated(true)
        navigate('/')
      },
      // Xử lý lỗi 422 từ server
      onError: (error) => {
        if (isAxiosUnprocessableEntityError<ErrorResponse<FormData>>(error)) {
          // Lấy ra lỗi
          const formError = error.response?.data.data
          // AxiosError nó trả về cả undefined nữa. Vậy nên cần check là nếu ko phải là undefined thì sẽ thông báo
          if (formError?.email) {
            setError('email', {
              type: 'Server',
              message: formError.email
            })
          }
          if (formError?.password) {
            setError('password', {
              type: 'Server',
              message: formError.password
            })
          }
        }
      }
    })
  })

  return (
    <div>
      <div className='container'>
        <div className='grid grid-cols-1 lg:grid-cols-5 lg:py-31 py-12 lg:pr-10 items-center'>
          {/* Item 1 */}
          <div className='hidden lg:block lg:grid-start-1 lg:col-span-3'>
            <AnimateLogin className='max-w-[550px]' />
          </div>
          {/* Item 2 */}
          <div className='lg:col-span-2 lg:col-start-4 border border-solid rounded-lg border-[#EAEAEA] overflow-hidden'>
            <form className='p-8 bg-white shadow-sm rounded-lg' onSubmit={onSubmit} noValidate>
              <p className='text-2xl text-gray-800 font-semibold text-center'>
                <span className='text-[#4F46E5]'>Chào mừng</span> bạn quay trở lại
              </p>
              <Input
                errorMessage={errors.email?.message}
                className='mt-8'
                type='email'
                placeholder='Email của khách hàng'
                name='email'
                register={register}
              />
              <Input
                errorMessage={errors.password?.message}
                className='mt-2'
                type='password'
                placeholder='Mật khẩu'
                name='password'
                register={register}
              />
              <div className='flex items-center justify-between mt-2 text-[15px]'>
                <div className='flex items-center gap-x-2'>
                  <input type='checkbox' id='check' />
                  <label htmlFor='check' className='select-none'>
                    Ghi nhớ đăng nhập
                  </label>
                </div>
                <Link to='#!' className='text-[#4F46E5] cursor-pointer hidden lg:block'>
                  Quên mật khẩu
                </Link>
              </div>
              <div className='mt-5'>
                <Button
                  disabled={loginAccountMutation.isLoading}
                  isLoading={loginAccountMutation.isLoading}
                  type='submit'
                  className='w-full text-center py-3 px-5 uppercase border border-solid rounded-[8px] bg-[#4F46E5] text-white text-sm flex items-center justify-center gap-x-2'
                >
                  Đăng nhập
                </Button>
              </div>
              <div className='mt-8 lg:text-center flex items-center gap-x-2 justify-center text-[15px]'>
                <span className='text-gray-600'>Bạn đã có tài khoản hay chưa?</span>
                <Link to={path.register} className='text-[#4F46E5]'>
                  Đăng ký
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
