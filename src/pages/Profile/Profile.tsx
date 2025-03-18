import { Link } from 'react-router-dom'
import Avatar from '../../assets/imgs/avatar.jpg'
import Input from '../../components/Input'
import { getUserNameFromLS } from '../../utils/user'

export default function Profile() {
  const userName = getUserNameFromLS()
  const name = getUserNameFromLS().slice(0, getUserNameFromLS().indexOf('@'))

  return (
    <div className='bg-[#F5F5FA] mt-[88px] py-[40px]'>
      <div className='container'>
        <div className='grid grid-cols-12 gap-x-3'>
          <div className='col-span-3 bg-white py-[18px] rounded-lg'>
            {/* Col 1 */}
            <div className='flex items-center gap-x-3 pb-6 px-5'>
              <div className='w-[56px] h-[56px] rounded-[50%] flex-shrink-0'>
                <img src={Avatar} alt='Avatar' className='rounded-[50%] w-full h-full block object-cover' />
              </div>
              <div>
                <span className='block w-auto font-semibold'>{name}</span>
                <span className='block mt-1.5'>Tài khoản của bạn</span>
              </div>
            </div>
            <hr />
            {/* Col 2 */}
            <ul>
              <li>
                <Link
                  to='#!'
                  className='flex items-center gap-x-4 py-4 px-5 hover:underline transition-all duration-300 ease-in-out'
                >
                  <svg xmlns='http://www.w3.org/2000/svg' width='28' height='28' viewBox='0 0 28 28' fill='none'>
                    <path
                      d='M13.9987 15.458C17.6217 15.458 20.5612 12.5186 20.5612 8.89551C20.5612 5.27246 17.6217 2.33301 13.9987 2.33301C10.3757 2.33301 7.4362 5.27246 7.4362 8.89551C7.4362 12.5186 10.3757 15.458 13.9987 15.458ZM19.832 16.9163H17.321C16.3092 17.3812 15.1836 17.6455 13.9987 17.6455C12.8138 17.6455 11.6927 17.3812 10.6764 16.9163H8.16536C4.94336 16.9163 2.33203 19.5277 2.33203 22.7497V23.4788C2.33203 24.6865 3.31185 25.6663 4.51953 25.6663H23.4779C24.6855 25.6663 25.6654 24.6865 25.6654 23.4788V22.7497C25.6654 19.5277 23.054 16.9163 19.832 16.9163Z'
                      fill='#4F46E5'
                    />
                  </svg>
                  <span>Thông tin cá nhân</span>
                </Link>
              </li>
              <li>
                <Link
                  to='#!'
                  className='flex items-center gap-x-4 py-4 px-5 hover:underline transition-all duration-300 ease-in-out'
                >
                  <svg xmlns='http://www.w3.org/2000/svg' width='28' height='28' viewBox='0 0 28 28' fill='none'>
                    <path
                      d='M23.7258 15.8361L25.6408 7.41017C25.779 6.8018 25.3166 6.22248 24.6927 6.22248H8.78143L8.41012 4.40726C8.3176 3.95481 7.91947 3.62988 7.45763 3.62988H3.30425C2.7673 3.62988 2.33203 4.06515 2.33203 4.60211V5.25025C2.33203 5.7872 2.7673 6.22248 3.30425 6.22248H6.13516L8.98086 20.1348C8.30006 20.5263 7.84129 21.2604 7.84129 22.1021C7.84129 23.355 8.85694 24.3706 10.1098 24.3706C11.3627 24.3706 12.3783 23.355 12.3783 22.1021C12.3783 21.4672 12.1172 20.8935 11.6968 20.4817H20.1894C19.7691 20.8935 19.508 21.4672 19.508 22.1021C19.508 23.355 20.5236 24.3706 21.7765 24.3706C23.0293 24.3706 24.045 23.355 24.045 22.1021C24.045 21.2039 23.5229 20.4278 22.7658 20.0602L22.9892 19.0768C23.1275 18.4685 22.6651 17.8891 22.0412 17.8891H11.1678L10.9027 16.5928H22.7777C23.2317 16.5928 23.6252 16.2787 23.7258 15.8361Z'
                      fill='#4F46E5'
                    />
                  </svg>
                  <span>Đơn hàng của tôi</span>
                </Link>
              </li>
              <li>
                <Link
                  to='#!'
                  className='flex items-center gap-x-4 py-4 px-5 hover:underline transition-all duration-300 ease-in-out'
                >
                  <svg xmlns='http://www.w3.org/2000/svg' width='28' height='28' viewBox='0 0 28 28' fill='none'>
                    <path
                      d='M23.3503 8.16699H5.97786C5.575 8.16699 5.2487 7.84069 5.2487 7.43783C5.2487 7.03496 5.575 6.70866 5.97786 6.70866H23.4779C23.8807 6.70866 24.207 6.38236 24.207 5.97949C24.207 4.77135 23.2277 3.79199 22.0195 3.79199H5.2487C3.6377 3.79199 2.33203 5.09766 2.33203 6.70866V21.292C2.33203 22.903 3.6377 24.2087 5.2487 24.2087H23.3503C24.6272 24.2087 25.6654 23.2275 25.6654 22.0212V10.3545C25.6654 9.14818 24.6272 8.16699 23.3503 8.16699ZM21.2904 17.6462C20.4851 17.6462 19.832 16.9931 19.832 16.1878C19.832 15.3826 20.4851 14.7295 21.2904 14.7295C22.0956 14.7295 22.7487 15.3826 22.7487 16.1878C22.7487 16.9931 22.0956 17.6462 21.2904 17.6462Z'
                      fill='#4F46E5'
                    />
                  </svg>
                  <span>Liên kết ngân hàng</span>
                </Link>
              </li>
              <li>
                <Link
                  to='#!'
                  className='flex items-center gap-x-4 py-4 px-5 hover:underline transition-all duration-300 ease-in-out'
                >
                  <svg xmlns='http://www.w3.org/2000/svg' width='28' height='28' viewBox='0 0 28 28' fill='none'>
                    <path
                      d='M24.4987 7H3.4987C2.85448 7 2.33203 7.52245 2.33203 8.16667V19.8333C2.33203 20.4776 2.85448 21 3.4987 21H24.4987C25.1429 21 25.6654 20.4776 25.6654 19.8333V8.16667C25.6654 7.52245 25.1429 7 24.4987 7ZM4.08203 19.25V16.9167C5.37083 16.9167 6.41536 17.9612 6.41536 19.25H4.08203ZM4.08203 11.0833V8.75H6.41536C6.41536 10.0388 5.37083 11.0833 4.08203 11.0833ZM13.9987 17.5C12.3876 17.5 11.082 15.9327 11.082 14C11.082 12.067 12.388 10.5 13.9987 10.5C15.6094 10.5 16.9154 12.067 16.9154 14C16.9154 15.9334 15.6091 17.5 13.9987 17.5ZM23.9154 19.25H21.582C21.582 17.9612 22.6266 16.9167 23.9154 16.9167V19.25ZM23.9154 11.0833C22.6266 11.0833 21.582 10.0388 21.582 8.75H23.9154V11.0833Z'
                      fill='#4F46E5'
                    />
                  </svg>
                  <span>Rút tiền</span>
                </Link>
              </li>
              <li>
                <Link
                  to='#!'
                  className='flex items-center gap-x-4 py-4 px-5 hover:underline transition-all duration-300 ease-in-out'
                >
                  <svg xmlns='http://www.w3.org/2000/svg' width='28' height='28' viewBox='0 0 28 28' fill='none'>
                    <path
                      d='M14.0013 25.6663C15.611 25.6663 16.9166 24.3607 16.9166 22.7497H11.086C11.086 24.3607 12.3917 25.6663 14.0013 25.6663ZM23.8173 18.8436C22.9368 17.8975 21.2894 16.4743 21.2894 11.8122C21.2894 8.27116 18.8065 5.43652 15.4588 4.74108V3.79134C15.4588 2.98607 14.8062 2.33301 14.0013 2.33301C13.1965 2.33301 12.5439 2.98607 12.5439 3.79134V4.74108C9.19613 5.43652 6.71331 8.27116 6.71331 11.8122C6.71331 16.4743 5.06585 17.8975 4.18538 18.8436C3.91195 19.1376 3.79072 19.4889 3.793 19.833C3.79801 20.5804 4.38454 21.2913 5.25589 21.2913H22.7468C23.6181 21.2913 24.2051 20.5804 24.2097 19.833C24.2119 19.4889 24.0907 19.1371 23.8173 18.8436Z'
                      fill='#4F46E5'
                    />
                  </svg>
                  <span>Thông báo</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className='col-span-9 bg-white rounded-lg'>
            <span className='block px-7 p-7 font-semibold'>Thông tin cá nhân</span>
            <hr />
            <div className='py-7 px-7'>
              <button className='relative'>
                <img src={Avatar} alt='Avatart' className='rounded-[50%] w-[100px]' />
                <div className='bg-[#4F46E5] absolute bottom-0 right-0 w-10 h-10 rounded-[50%] flex items-center justify-center'>
                  <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'>
                    <path
                      d='M22 7.625V18.875C22 19.9102 21.1602 20.75 20.125 20.75H3.875C2.83984 20.75 2 19.9102 2 18.875V7.625C2 6.58984 2.83984 5.75 3.875 5.75H7.3125L7.79297 4.46484C8.06641 3.73437 8.76562 3.25 9.54688 3.25H14.4492C15.2305 3.25 15.9297 3.73437 16.2031 4.46484L16.6875 5.75H20.125C21.1602 5.75 22 6.58984 22 7.625ZM16.6875 13.25C16.6875 10.6641 14.5859 8.5625 12 8.5625C9.41406 8.5625 7.3125 10.6641 7.3125 13.25C7.3125 15.8359 9.41406 17.9375 12 17.9375C14.5859 17.9375 16.6875 15.8359 16.6875 13.25ZM15.4375 13.25C15.4375 15.1445 13.8945 16.6875 12 16.6875C10.1055 16.6875 8.5625 15.1445 8.5625 13.25C8.5625 11.3555 10.1055 9.8125 12 9.8125C13.8945 9.8125 15.4375 11.3555 15.4375 13.25Z'
                      fill='white'
                    />
                  </svg>
                </div>
              </button>
              <form className='mt-10'>
                <div className='text-[14px]'>
                  <label className='block mb-2'>Họ tên khách hàng</label>
                  <Input />
                </div>
                <div className='grid grid-cols-2 gap-x-6'>
                  <div className='text-[14px]'>
                    <label className='block mb-2'>Số điện thoại</label>
                    <Input />
                  </div>
                  <div className='text-[14px]'>
                    <label className='block mb-2'>Email</label>
                    <Input placeholder={userName} value={userName} readOnly />
                  </div>
                </div>
                <div className='text-[14px]'>
                  <label className='block mb-2'>Địa chỉ</label>
                  <textarea className='resize-none w-full h-[88px] p-3 border border-solid outline-none border-[#B3B3B3] rounded-[8px] focus:border-[#4F46E5] focus:shadow-sm'></textarea>
                </div>
                <div className='mt-10 flex items-center justify-end gap-x-4'>
                  <button className='text-white bg-primary py-3 px-5 border border-solid border-primary rounded-lg inline-flex items-center justify-center'>
                    Lưu
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
