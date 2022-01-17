interface BaseProduct {
    category: string
    colors: string[]
    company: string
    description: string
    id: string
    name: string
    price: number
    shipping: boolean
    featured?: true
}

interface TImages {
    url: string
    id: string
    filename: string
}

interface TProduct extends BaseProduct {
    image: string
}

interface TSingleProduct extends BaseProduct {
    reviews: number
    stars: number
    stock: number
    images: TImages[]
}

export type { TProduct, TSingleProduct, TImages }
