import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useCartContext } from '../context/cartContext'
import { SHIPPING_FEE } from '../utils/constants'
import { formatPrice } from '../utils/helpers'

interface CartTotalsProps {}

function CartTotals({}: CartTotalsProps) {
    const { totalFee } = useCartContext()
    return (
        <Wrapper>
            <div>
                <article>
                    <h5>
                        subtotal : <span>{formatPrice(totalFee)}</span>
                    </h5>
                    <p>
                        shipping fee: <span>{formatPrice(SHIPPING_FEE)}</span>
                    </p>
                    <hr />
                    <h4>
                        order total : <span>{formatPrice(totalFee + SHIPPING_FEE)}</span>
                    </h4>
                </article>
                <Link to='/checkout' className='btn'>
                    proceed to checkout
                </Link>
            </div>
        </Wrapper>
    )
}

export default CartTotals

const Wrapper = styled.section`
    margin-top: 3rem;
    display: flex;
    justify-content: center;
    article {
        border: 1px solid var(--clr-grey-8);
        border-radius: var(--radius);
        padding: 1.5rem 3rem;
    }
    h4,
    h5,
    p {
        display: grid;
        grid-template-columns: 200px 1fr;
    }
    p {
        text-transform: capitalize;
    }
    h4 {
        margin-top: 2rem;
    }
    @media (min-width: 776px) {
        justify-content: flex-end;
    }
    .btn {
        width: 100%;
        margin-top: 1rem;
        text-align: center;
        font-weight: 700;
    }
`
