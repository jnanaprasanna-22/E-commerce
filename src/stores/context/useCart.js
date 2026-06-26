import { useContext } from 'react'
import { CartContext } from './CartContextValue'

export const useCart = () => {
  return useContext(CartContext)
}
