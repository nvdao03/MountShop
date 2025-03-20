import { Product } from '../types/product.type'

export const getCardFromLS = () => {
  const cartString = localStorage.getItem('cart')
  return cartString ? JSON.parse(cartString) : []
}

export const saveCardToLS = (cart: Product[]) => {
  localStorage.setItem('cart', JSON.stringify(cart))
}
