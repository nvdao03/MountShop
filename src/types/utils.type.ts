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
