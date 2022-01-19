import { useProductsContext } from '../context/productsContext'
import GridView from './GridView'
import ListView from './ListView'

import type { TFilter, TSort, TView } from '../types/filterTypes'

interface ProductListProps {
    view: TView
    sort: TSort
    filter: TFilter
}

function ProductList({ view, sort }: ProductListProps) {
    const { products } = useProductsContext()

    let filterProducts = [...products]

    if (filterProducts.length === 0)
        return <h5>Sorry, no products matched your search</h5>

    if (sort === 'name-a')
        filterProducts.sort((a, b) => (a.name < b.name ? -1 : 1))
    if (sort === 'name-z')
        filterProducts.sort((a, b) => (a.name < b.name ? 1 : -1))
    if (sort === 'price-lowest')
        filterProducts.sort((a, b) => a.price - b.price)
    if (sort === 'price-highest')
        filterProducts.sort((a, b) => b.price - a.price)

    return view === 'list' ? (
        <ListView filterProducts={filterProducts} />
    ) : (
        <GridView filterProducts={filterProducts} />
    )
}

export default ProductList
