import { useState } from 'react'
import { FaCheck } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useCartContext } from '../context/cartContext'
import { TSingleProduct } from '../types/productsTypes'
import AmountButtons from './AmountButtons'

interface AddToCartProps {
    singleProduct: TSingleProduct
}

function AddToCart({ singleProduct }: AddToCartProps) {
    const { stock, colors } = singleProduct
    const [mainColor, setMainColor] = useState<string>(colors[0])
    const { addToCart } = useCartContext()
    const [amount, setAmount] = useState<number>(1)

    function increase() {
        setAmount(oldAmount => (oldAmount < stock ? oldAmount + 1 : oldAmount))
    }

    function decrease() {
        setAmount(oldAmount => (oldAmount === 1 ? oldAmount : oldAmount - 1))
    }

    return (
        <Wrapper>
            <div className='colors'>
                <span>colors : </span>
                <div>
                    {colors.map(color => (
                        <button
                            key={Math.random()}
                            onClick={() => setMainColor(color)}
                            style={{ backgroundColor: color }}
                            className={`color-btn ${mainColor === color ? 'active' : ''}`}
                        >
                            {mainColor === color ? <FaCheck /> : null}
                        </button>
                    ))}
                </div>
            </div>
            <div className='btn-container'>
                <AmountButtons amount={amount} increase={increase} decrease={decrease} />
                <Link
                    to='/cart'
                    className='btn'
                    onClick={() =>
                        addToCart({
                            color: mainColor,
                            amount,
                            product: singleProduct,
                            id: singleProduct.id + mainColor,
                        })
                    }
                >
                    add to cart
                </Link>
            </div>
        </Wrapper>
    )
}

export default AddToCart

const Wrapper = styled.section`
    margin-top: 2rem;
    .colors {
        display: grid;
        grid-template-columns: 125px 1fr;
        align-items: center;
        margin-bottom: 1rem;
        span {
            text-transform: capitalize;
            font-weight: 700;
        }
        div {
            display: flex;
        }
    }
    .color-btn {
        display: inline-block;
        width: 1.5rem;
        height: 1.5rem;
        border-radius: 50%;
        background: #222;
        margin-right: 0.5rem;
        border: none;
        cursor: pointer;
        opacity: 0.5;
        display: flex;
        align-items: center;
        justify-content: center;
        svg {
            font-size: 0.75rem;
            color: var(--clr-white);
        }
    }
    .active {
        opacity: 1;
    }
    .btn-container {
        margin-top: 2rem;
    }
    .btn {
        margin-top: 1rem;
        width: 140px;
    }
`
