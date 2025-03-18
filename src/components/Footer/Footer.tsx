import Logo from '../../assets/imgs/logo.svg'
import Visa from '../../assets/imgs/payment/visa.svg'
import Momo from '../../assets/imgs/payment/momo.svg'
import Payment3 from '../../assets/imgs/payment/payment-3.svg'
import VittelPay from '../../assets/imgs/payment/vittel-pay.svg'
import VnPay from '../../assets/imgs/payment/vn-pay.svg'
import WPay from '../../assets/imgs/payment/w-pay.svg'
import ZaloPay from '../../assets/imgs/payment/zalo-pay.svg'
import GHTK from '../../assets/imgs/transport/ghtk.svg'
import Vittel from '../../assets/imgs/transport/viettel.svg'
import VietNamPost from '../../assets/imgs/transport/vietnam-post.svg'
import JT from '../../assets/imgs/transport/jtexpress.svg'
import Ninja from '../../assets/imgs/transport/ninja-van.svg'
import XFollow from '../../assets/imgs/follow-my/x.svg'
import Face from '../../assets/imgs/follow-my/face.svg'
import Zalo from '../../assets/imgs/follow-my/zalo.svg'

function Footer() {
  return (
    <div className='mt-8 pt-7 pb-10 md:pt-12 bg-neutral-100 text-text-footer'>
      <div className='container'>
        <div className='grid md:gap-x-10 md:gap-y-8 gap-8 lg:grid-cols-12 lg:gap-8 md:grid-cols-3 border-b border-solid boder-[#ccc] pb-5'>
          {/* Col 1 */}
          <div className='lg:col-span-4'>
            <img src={Logo} alt='Logo' />
            <h4 className='text-[#1A1A1A] mt-6'>Công ty cổ phần dịch vụ công nghệ RUBY</h4>
            <ul className='mt-5'>
              <li>
                <a className='mt-4 block' href='#!'>
                  Số ĐKKD: 0123456789 - Ngày cấp 13/5/2020
                </a>
              </li>
              <li>
                <a className='mt-4 block' href='#!'>
                  Cơ quan cấp: Sở kế hoạch đầu tư Hà Nội
                </a>
              </li>
              <li>
                <a className='mt-4 block' href='#!'>
                  Địa chỉ: 234 Nguyễn Văn Thiêu- P.1 Q.1 TPHCM
                </a>
              </li>
              <li>
                <a className='mt-4 block' href='tel:0123456789'>
                  Điện thoại:0123456789
                </a>
              </li>
              <li>
                <a className='mt-4 block' href='mailto:cskh@ruby.com'>
                  Email: cskh@ruby.com
                </a>
              </li>
            </ul>
          </div>
          {/* Col 2 */}
          <div className='lg:col-span-2'>
            <h4 className='text-[#1A1A1A]'>VỀ CHÚNG TÔI</h4>
            <ul className='mt-5'>
              <li>
                <a className='mt-4 block' href=''>
                  Về chúng tôi
                </a>
              </li>
              <li>
                <a className='mt-4 block' href=''>
                  Blog
                </a>
              </li>
              <li>
                <a className='mt-4 block' href=''>
                  Quy định hoạt động
                </a>
              </li>
              <li>
                <a className='mt-4 block' href=''>
                  Điều khoản sử dụng
                </a>
              </li>
              <li>
                <a className='mt-4 block' href=''>
                  Hỗ trợ trả góp
                </a>
              </li>
            </ul>
          </div>
          {/* Col 3 */}
          <div className='lg:col-span-2'>
            <h4 className='text-[#1A1A1A]'>VỀ CHÚNG TÔI</h4>
            <ul className='mt-5'>
              <li>
                <a className='mt-4 block' href=''>
                  Quy định trả hàng
                </a>
              </li>
              <li>
                <a className='mt-4 block' href=''>
                  Chinh sách mua sắm
                </a>
              </li>
              <li>
                <a className='mt-4 block' href=''>
                  Khiếu nại
                </a>
              </li>
              <li>
                <a className='mt-4 block' href=''>
                  Hỗ trợ trả góp
                </a>
              </li>
              <li>
                <a className='mt-4 block' href=''>
                  Chính sách khuyến mãi
                </a>
              </li>
            </ul>
          </div>
          {/* Col 4 */}
          <div className='lg:col-span-2'>
            <h4 className='text-[#1A1A1A]'>ĐỐI TÁC VẬN CHUYỂN</h4>
            <ul className='mt-5 flex flex-wrap gap-4'>
              <li>
                <a href='#!'>
                  <img src={Visa} alt='' />
                </a>
              </li>
              <li>
                <a href='#!'>
                  <img src={Momo} alt='' />
                </a>
              </li>
              <li>
                <a href='#!'>
                  <img src={Payment3} alt='' />
                </a>
              </li>
              <li>
                <a href='#!'>
                  <img src={ZaloPay} alt='' />
                </a>
              </li>
              <li>
                <a href='#!'>
                  <img src={VittelPay} alt='' />
                </a>
              </li>
              <li>
                <a href='#!'>
                  <img src={VnPay} alt='' />
                </a>
              </li>
              <li>
                <a href='#!'>
                  <img src={WPay} alt='' />
                </a>
              </li>
            </ul>
          </div>
          {/* Col 5 */}
          <div className='lg:col-span-2'>
            {/* Item 1 */}
            <div>
              <h4 className='text-[#1A1A1A]'>THANH TOÁN</h4>
              <ul className='mt-5 flex flex-wrap gap-4'>
                <li>
                  <a href='#!'>
                    <img src={GHTK} alt='' />
                  </a>
                </li>
                <li>
                  <a href='#!'>
                    <img src={Vittel} alt='' />
                  </a>
                </li>
                <li>
                  <a href='#!'>
                    <img src={JT} alt='' />
                  </a>
                </li>
                <li>
                  <a href='#!'>
                    <img src={VietNamPost} alt='' />
                  </a>
                </li>
                <li>
                  <a href='#!'>
                    <img src={Ninja} alt='' />
                  </a>
                </li>
              </ul>
            </div>
            {/* Item 2 */}
            <div className='mt-10'>
              <h4 className='text-[#1A1A1A]'>THEO DÕI CHÚNG TÔI</h4>
              <ul className='mt-5 flex flex-wrap gap-4'>
                <li>
                  <a href='#!'>
                    <img src={XFollow} alt='' />
                  </a>
                </li>
                <li>
                  <a href='#!'>
                    <img src={Face} alt='' />
                  </a>
                </li>
                <li>
                  <a href='#!'>
                    <img src={Zalo} alt='' />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='text-[#000] flex items-center justify-between mt-4'>
          <span>Bản quyền 2020-2024</span>
          <span>Chính sách bảo mật</span>
        </div>
      </div>
    </div>
  )
}

export default Footer
