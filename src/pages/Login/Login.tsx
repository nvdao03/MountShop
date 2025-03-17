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
    <div className='bg-orange'>
      <div className='container'>
        <div className='grid grid-cols-1 lg:grid-cols-5 lg:py-32 py-12 lg:pr-10'>
          <div className='lg:col-span-2 lg:col-start-4'>
            <form className='p-10 rounded bg-white shadow-sm' onSubmit={onSubmit} noValidate>
              <div className='text-2xl'>Đăng nhập</div>
              <Input
                errorMessage={errors.email?.message}
                className='mt-8'
                type='email'
                placeholder='Email'
                name='email'
                register={register}
              />
              <Input
                errorMessage={errors.password?.message}
                className='mt-2'
                type='password'
                placeholder='Password'
                name='password'
                register={register}
              />
              <div className='mt-2'>
                <Button
                  disabled={loginAccountMutation.isLoading}
                  isLoading={loginAccountMutation.isLoading}
                  type='submit'
                  className='w-full text-center py-4 px-2 uppercase bg-red-500 text-white text-sm hover:bg-red-600 flex justify-center gap-x-2 items-start'
                >
                  Đăng nhập
                </Button>
              </div>
              <div className='mt-8 text-center flex items-center gap-x-2 justify-center'>
                <span className='text-slate-400'>Bạn chưa có tài khoản hay chưa?</span>
                <Link to={path.register} className='text-red-500'>
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
