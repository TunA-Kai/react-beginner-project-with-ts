import { useProductsContext } from '../context/productsContext'
import type { TFilter, TSort, TView } from '../types/filterTypes'
import GridView from './GridView'
import ListView from './ListView'

interface ProductListProps {
    view: TView
    sort: TSort
    filter: TFilter
}

function ProductList({ view, sort, filter }: ProductListProps) {
    const { products } = useProductsContext()
    const { text, category, color, company, shipping, price } = filter

    let filterProducts = [...products]

    if (text.trim() !== '')
        filterProducts = filterProducts.filter(p =>
            p.name.toLowerCase().startsWith(text.toLowerCase()),
        )
    if (category !== 'all') filterProducts = filterProducts.filter(p => p.category === category)
    if (color !== 'all') filterProducts = filterProducts.filter(p => p.colors.includes(color))
    if (company !== 'all') filterProducts = filterProducts.filter(p => p.company === company)
    if (shipping) filterProducts = filterProducts.filter(p => p.shipping)
    if (price > 0) filterProducts = filterProducts.filter(p => p.price <= price)

    if (filterProducts.length === 0) return <h5>Sorry, no products matched your search</h5>

    if (sort === 'name-a') filterProducts.sort((a, b) => (a.name < b.name ? -1 : 1))
    if (sort === 'name-z') filterProducts.sort((a, b) => (a.name < b.name ? 1 : -1))
    if (sort === 'price-lowest') filterProducts.sort((a, b) => a.price - b.price)
    if (sort === 'price-highest') filterProducts.sort((a, b) => b.price - a.price)

    return view === 'list' ? (
        <ListView filterProducts={filterProducts} />
    ) : (
        <GridView filterProducts={filterProducts} />
    )
}

export default ProductList
