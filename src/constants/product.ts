export const sortBy = {
  createdAt: 'createdAt',
  view: 'view',
  sold: 'sold',
  price: 'price'
} as const // Chỉ đọc được chứ ko thay đổi hoặc thêm được giá trị

export const order = {
  asc: 'asc',
  desc: 'desc'
} as const
