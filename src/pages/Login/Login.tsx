import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { Schema, schema } from '../../utils/rules'
import { useMutation } from '@tanstack/react-query'
import { loginAccount } from '../../apis/auth.api'
import { isAxiosUnprocessableEntityError } from '../../utils/utils'
import { ResponseApi } from '../../types/utils.type'
import Input from '../../components/Input'

type FormData = Omit<Schema, 'confirm_password'>
const loginSchema = schema.omit(['confirm_password'])

export default function Login() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
    watch
  } = useForm({
    resolver: yupResolver(loginSchema)
  })

  const loginAccountMutation = useMutation({
    mutationFn: (body: FormData) => loginAccount(body)
  })

  const value = watch()
  console.log(value)

  const onSubmit = handleSubmit((data) => {
    loginAccountMutation.mutate(data, {
      onSuccess: (data) => {
        console.log(data)
      },
      // Xử lý lỗi 422 từ server
      onError: (error) => {
        if (isAxiosUnprocessableEntityError<ResponseApi<FormData>>(error)) {
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
                <button
                  type='submit'
                  className='w-full text-center py-4 px-2 uppercase bg-red-500 text-white text-sm hover:bg-red-600'
                >
                  Đăng nhập
                </button>
              </div>
              <div className='mt-8 text-center flex items-center gap-x-2 justify-center'>
                <span className='text-slate-400'>Bạn chưa có tài khoản hay chưa?</span>
                <Link to='/register' className='text-red-500'>
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
