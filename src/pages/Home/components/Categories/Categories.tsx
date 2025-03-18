import { Link } from 'react-router-dom'
import path from '../../../../constants/path'
import TV from '../../../../assets/imgs/category-home/tv.png'
import Tulanh from '../../../../assets/imgs/category-home/tulanh.png'
import Maygiat from '../../../../assets/imgs/category-home/maygiat.png'
import Dienthoai from '../../../../assets/imgs/category-home/dienthoai.png'
import Thoitrang from '../../../../assets/imgs/category-home/thoitrang.png'
import Mypham from '../../../../assets/imgs/category-home/mypham.png'
import Amthanh from '../../../../assets/imgs/category-home/amthanh.png'
import Tuixach from '../../../../assets/imgs/category-home/tuixach.png'
import Dongho from '../../../../assets/imgs/category-home/dongho.png'
import Nhasach from '../../../../assets/imgs/category-home/nhasach.png'

export default function Categories() {
  return (
    <div className='mt-10 container'>
      <h2 className='font-semibold text-[20px]'>Danh mục nổi bật</h2>
      <div className='mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5'>
        {[
          { name: 'TV', icon: TV },
          { name: 'Tủ lạnh', icon: Tulanh },
          { name: 'Máy giặt', icon: Maygiat },
          { name: 'Điện thoại', icon: Dienthoai },
          { name: 'Thời trang', icon: Thoitrang },
          { name: 'Mỹ phẩm', icon: Mypham },
          { name: 'Âm thanh', icon: Amthanh },
          { name: 'Túi xách', icon: Tuixach },
          { name: 'Nhà sách', icon: Nhasach },
          { name: 'Đồng hồ', icon: Dongho }
        ].map((item, index) => (
          <Link key={index} to={path.productlist} className='relative p-4 bg-[#F5F5FA] rounded-lg'>
            <span className='block mb-4'>{item.name}</span>
            <div className='grid grid-cols-5'>
              <div className='col-span-1'></div>
              <img src={item.icon} alt={item.name} className='col-start-2 col-span-4' />
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
