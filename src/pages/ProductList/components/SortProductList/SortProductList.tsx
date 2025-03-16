export default function SortProductList() {
  return (
    <div className='bg-gray-300/40 py-4 px-3 shadow-sm rounded-[5px]'>
      <div className='flex flex-wrap items-start justify-between gap-2'>
        {/* Item left */}
        <div className='flex items-center flex-wrap gap-2'>
          <span className='block mr-1'>Sắp xếp theo</span>
          <button className='h-8 px-4 capitalize bg-orange text-white text-sm hover:bg-orange/80 text-center'>
            Phổ biến
          </button>
          <button className='h-8 px-4 hover:bg-slate-100 capitalize bg-white text-black text-sm text-center'>
            Mới nhất
          </button>
          <button className='h-8 px-4 hover:bg-slate-100 capitalize bg-white text-black text-sm text-center'>
            Bán chạy
          </button>
          <div className='relative'>
            <select
              value=''
              className='outline-none appearance-none h-8 pl-4 pr-12 hover:bg-slate-100 capitalize bg-white text-black text-sm text-left'
            >
              <option value='' disabled>
                Giá
              </option>
              <option value='asc'>Giá: Thấp đến cao</option>
              <option value='desc'>Giá: Cap đến thấp</option>
            </select>
            <div className='absolute right-0 top-[50%] -translate-x-[50%] -translate-y-[50%] text-gray-600 pointer-events-none'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='w-4 h-4'
              >
                <path strokeLinecap='round' strokeLinejoin='round' d='M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3' />
              </svg>
            </div>
          </div>
        </div>
        {/* Item right */}
        <div className='flex items-center'>
          <div className='text-sm'>
            <span className='text-orange'>1</span>
            <span>/2</span>
          </div>
          <div className='ml-2'>
            <button className='px-3 h-8 rounded-tl-sm rounded-bl-sm bg-white hover:bg-slate-100 cursor-not-allowed'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='w-3 h-3'
              >
                <path strokeLinecap='round' strokeLinejoin='round' d='M15.75 19.5 8.25 12l7.5-7.5' />
              </svg>
            </button>
            <button className='px-3 h-8 rounded-tr-sm rounded-br-sm bg-white hover:bg-slate-100 '>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke-width='1.5'
                stroke='currentColor'
                className='w-3 h-3'
              >
                <path stroke-linecap='round' stroke-linejoin='round' d='m8.25 4.5 7.5 7.5-7.5 7.5' />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
