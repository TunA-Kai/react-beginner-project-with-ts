import styled from 'styled-components'
import { TProduct } from '../types/productsTypes'
import Product from './Product'

interface GridViewProps {
  filterProducts: TProduct[]
}

function GridView({ filterProducts }: GridViewProps) {
  return (
    <Wrapper>
      <div className='products-container'>
        {filterProducts.map(p => (
          <Product key={p.id} {...p} />
        ))}
      </div>
    </Wrapper>
  )
}

export default GridView

const Wrapper = styled.section`
  img {
    height: 175px;
  }
  .products-container {
    display: grid;
    gap: 2rem 1.5rem;
  }
  @media (min-width: 992px) {
    .products-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (min-width: 1170px) {
    .products-container {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`
