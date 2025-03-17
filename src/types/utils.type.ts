// Khi login success sẽ có data
export interface SuccessResponse<Data> {
  message: string
  data: Data
}

// Khi login faild sẽ có data hoặc ko tuỳ trường hợp
export interface ErrorResponse<Data> {
  message: string
  data?: Data
}

// Chuyển đổi dạng tiền
export function formatCurrency(currency: number) {
  return new Intl.NumberFormat('de-DE').format(currency)
}

// Chuyển đổi số lượng đã bán
export function fomatNumberToSocialStyle(value: number) {
  return new Intl.NumberFormat('en', {
    notation: 'compact',
    maximumFractionDigits: 1
  })
    .format(value)
    .replace('.', ',')
}
