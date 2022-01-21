import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { CartContent, PageHero } from '../components'
import { useCartContext } from '../context/cartContext'

function CartPage() {
    const { cart } = useCartContext()
    if (cart.length === 0)
        return (
            <Wrapper className='page-100'>
                <div className='empty'>
                    <h2>Your cart is empty</h2>
                    <Link to='/products' className='btn'>
                        fill it
                    </Link>
                </div>
            </Wrapper>
        )
    return (
        <main>
            <PageHero />
            <Wrapper className='page'>
                <CartContent />
            </Wrapper>
        </main>
    )
}

export default CartPage

const Wrapper = styled.main`
    .empty {
        text-align: center;
        h2 {
            margin-bottom: 1rem;
            text-transform: none;
        }
    }
`
