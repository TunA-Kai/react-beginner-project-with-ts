import { TSingleProduct } from './productsTypes'

interface TCartProduct {
    id: string
    color: string
    amount: number
    product: TSingleProduct
}

export type { TCartProduct }
