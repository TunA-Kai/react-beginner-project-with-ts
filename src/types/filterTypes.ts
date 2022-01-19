type TView = 'grid' | 'list'
type TSort = 'price-lowest' | 'price-highest' | 'name-a' | 'name-z'
interface TFilter {
    text: string
    company: string
    category: string
    color: string
    price: number
    shipping: boolean
}

export type { TView, TSort, TFilter }
