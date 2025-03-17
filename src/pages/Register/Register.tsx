import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import Input from '../../components/Input'
import { yupResolver } from '@hookform/resolvers/yup'
import { Schema, schema } from '../../utils/rules'
import { useMutation } from '@tanstack/react-query'
import authApi from '../../apis/auth.api'
import { omit } from 'lodash'
import { isAxiosUnprocessableEntityError } from '../../utils/utils'
import { ErrorResponse } from '../../types/utils.type'
import { useContext } from 'react'
import { AppContext } from '../../contexts/app.context'
import Button from '../../components/Button'
import path from '../../constants/path'
import AnimateRegister from './components'

type FormData = Schema

export default function Register() {
  const { setIsAuthenticated } = useContext(AppContext)
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError
  } = useForm({
    resolver: yupResolver(schema)
  })

  const registerAccountMutation = useMutation({
    mutationFn: (body: Omit<FormData, 'confirm_password'>) => authApi.registerAccount(body)
  })

  const onSubmit = handleSubmit((data) => {
    const body = omit(data, ['confirm_password'])
    registerAccountMutation.mutate(body, {
      onSuccess: () => {
        setIsAuthenticated(false)
        navigate('/login')
      },
      // Xử lý lỗi 422 từ server
      onError: (error) => {
        if (isAxiosUnprocessableEntityError<ErrorResponse<Omit<FormData, 'confirm_password'>>>(error)) {
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
            <AnimateRegister className='max-w-[500px]' />
          </div>
          {/* Item 2 */}
          <div className='lg:col-span-2 lg:col-start-4 border border-solid rounded-lg border-[#EAEAEA] overflow-hidden'>
            <form className='p-8 bg-white shadow-sm rounded-lg' onSubmit={onSubmit} noValidate>
              <p className='text-2xl text-[#4F46E5] font-semibold text-center'>Đăng ký tài khoản mới</p>
              <Input
                className='mt-8'
                name='email'
                register={register}
                type='email'
                placeholder='Email khách hàng'
                errorMessage={errors.email?.message}
              />
              <Input
                className='mt-2'
                name='password'
                register={register}
                type='password'
                placeholder='Mật khẩu'
                errorMessage={errors.password?.message}
              />
              <Input
                className='mt-2'
                name='confirm_password'
                register={register}
                type='password'
                placeholder='Xác nhận mật khẩu'
                errorMessage={errors.confirm_password?.message}
              />
              <div className='flex items-center justify-between mt-2 text-[15px]'>
                <div className='flex items-center gap-x-2'>
                  <input type='checkbox' id='check' />
                  <label htmlFor='check' className='select-none'>
                    Tôi đồng ý với các điều khoản
                  </label>
                </div>
                <Link to='#!' className='text-[#4F46E5] cursor-pointer hidden sm:block'>
                  Xem điều khoản
                </Link>
              </div>
              <div className='mt-5'>
                <Button
                  isLoading={registerAccountMutation.isLoading}
                  disabled={registerAccountMutation.isLoading}
                  className='w-full text-center py-3 px-5 uppercase border border-solid rounded-[8px] bg-[#4F46E5] text-white text-sm flex items-center justify-center gap-x-2'
                >
                  Đăng ký
                </Button>
              </div>
              <div className='mt-8 flex  items-center gap-x-2 justify-between lg:justify-center text-[15px]'>
                <span className='text-gray-600'>Bạn đã có tài khoản hay chưa?</span>
                <Link to={path.login} className='text-[#4F46E5]'>
                  Đăng nhập
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
