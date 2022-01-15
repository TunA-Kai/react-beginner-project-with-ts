interface TProduct {
    category: string
    colors: string[]
    company: string
    description: string
    id: string
    image: string
    name: string
    price: number
    shipping: boolean
    featured?: true
}

interface TSingleProduct {}

export type { TProduct }
