import { useState } from 'react'
import styled from 'styled-components'

import { Filters, Loading, PageHero, ProductList, Sort } from '../components'
import { useProductsContext } from '../context/productsContext'

import type { TFilter, TSort, TView } from '../types/filterTypes'

interface ProductsPageProps {}

function ProductsPage({}: ProductsPageProps) {
    const { status } = useProductsContext()

    const [view, setView] = useState<TView>('grid')
    const [sort, setSort] = useState<TSort>('price-lowest')
    const [filter, setFilter] = useState<TFilter>({
        text: '',
        company: 'all',
        category: 'all',
        color: 'all',
        price: 0,
        shipping: false,
    })

    if (status === 'pending') return <Loading />

    return (
        <main>
            <PageHero />
            <Wrapper className='page'>
                <div className='section-center products'>
                    <Filters filter={filter} setFilter={setFilter} />
                    <div>
                        <Sort setView={setView} view={view} setSort={setSort} sort={sort} />
                        <ProductList view={view} sort={sort} filter={filter} />
                    </div>
                </div>
            </Wrapper>
        </main>
    )
}

export default ProductsPage

const Wrapper = styled.div`
    .products {
        display: grid;
        gap: 3rem 1.5rem;
        margin: 4rem auto;
    }
    @media (min-width: 768px) {
        .products {
            grid-template-columns: 200px 1fr;
        }
    }
`
