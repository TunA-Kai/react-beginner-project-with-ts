import styled from 'styled-components'
import { Loading, Error } from '.'
import { useProductsContext } from '../context/productsContext'
import Product from './Product'

function FeaturedProducts() {
    const { status, featuredProducts } = useProductsContext()
    if (status === 'loading') return <Loading />
    if (status === 'reject') return <Error />
    return (
        <Wrapper className='section'>
            <div className='title'>
                <h2>featured products</h2>
                <div className='underline'></div>
            </div>
            <div className='section-center featured'>
                {featuredProducts.map(p => (
                    <Product key={p.id} {...p} />
                ))}
            </div>
        </Wrapper>
    )
}

export default FeaturedProducts

const Wrapper = styled.section`
    background: var(--clr-grey-10);
    .featured {
        margin: 4rem auto;
        display: grid;
        gap: 2.5rem;
        img {
            height: 225px;
        }
    }
    .btn {
        display: block;
        width: 148px;
        margin: 0 auto;
        text-align: center;
    }
    @media (min-width: 576px) {
        .featured {
            grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
        }
    }
`
