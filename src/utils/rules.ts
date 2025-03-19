import * as yup from 'yup'

export const schema = yup.object({
  email: yup
    .string()
    .required('Email là bắt buộc')
    .email('Email không đúng định dạng')
    .min(5, 'Email phải có ít nhất 5 ký tự')
    .max(160, 'Email phải từ 5 - 160 ký tự'),
  password: yup
    .string()
    .required('Vui lòng nhập mật khẩu')
    .min(6, 'Mật khẩu phải có ít nhất 6 ký tự')
    .max(160, 'Mật khẩu phải từ 6 - 160 ký tự'),
  confirm_password: yup
    .string()
    .required('Nhập lại password')
    .min(6, 'Mật khẩu phải có ít nhất 6 ký tự')
    .max(160, 'Mật khẩu phải từ 6 - 160 ký tự')
    .oneOf([yup.ref('password')], 'Mật khẩu không khớp')
})

export const searchSchema = yup.object({
  name: yup.string()
})

export type Schema = yup.InferType<typeof schema>
