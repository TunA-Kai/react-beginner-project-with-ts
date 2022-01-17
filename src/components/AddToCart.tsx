import { useState } from 'react'
import styled from 'styled-components'
import { TSingleProduct } from '../types/productsTypes'
import { FaCheck } from 'react-icons/fa'
import AmountButtons from './AmountButtons'
import { Link } from 'react-router-dom'

interface AddToCartProps extends TSingleProduct {}

function AddToCart({ id, stock, colors }: AddToCartProps) {
  const [mainColor, setMainColor] = useState<string>(colors[0])

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
        <AmountButtons stock={stock} />
        <Link to='/cart' className='btn'>
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
