import { TProduct } from '../types/productsTypes'

export function formatPrice(price: number): string {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(price / 100)
}

export function getUniqueValues(
    products: ReadonlyArray<Readonly<TProduct>>,
    type: 'category' | 'company' | 'colors',
) {
    const tempProducts = products.flatMap(p => p[type])
    return ['all', ...new Set(tempProducts)]
}
