import type { RegisterOptions } from 'react-hook-form' // Chỉ import các key có type là RegisterOptions

type Rules = { [key in 'email' | 'password' | 'confirm_password']?: RegisterOptions | any }

export const rules: Rules = {
  email: {
    required: {
      value: true,
      message: 'Vui lòng nhập email'
    },
    pattern: {
      value: /^\S+@\S+\.\S+$/,
      message: 'Email không đúng định dạng'
    },
    minLength: {
      value: 5,
      message: 'Email phải có ít nhất 5 ký tự'
    },
    maxLength: {
      value: 160,
      message: 'Email phải từ 5 - 160 ký tự'
    }
  },
  password: {
    required: {
      value: true,
      message: 'Vui lòng nhập mật khẩu'
    },
    minLength: {
      value: 6,
      message: 'Mật khẩu phải có ít nhất 6 ký tự'
    },
    maxLength: {
      value: 160,
      message: 'Mật khẩu phải từ 6 - 160 ký tự'
    }
  },
  confirm_password: {
    required: {
      value: true,
      message: 'Nhập lại password'
    },
    minLength: {
      value: 6,
      message: 'Mật khẩu phải có ít nhất 6 ký tự'
    },
    maxLength: {
      value: 160,
      message: 'Mật khẩu phải từ 6 - 160 ký tự'
    }
  }
}
