import { useMemo } from 'react'
import { FaCheck } from 'react-icons/fa'
import styled from 'styled-components'
import { SetLocationState } from 'use-location-state'
import { useProductsContext } from '../context/productsContext'
import { GiVenusOfWillendorf } from 'react-icons/gi'
import type { TFilter } from '../types/filterTypes'
import { formatPrice, getUniqueValues } from '../utils/helpers'

interface FiltersProps {
    filter: TFilter
    setFilter: SetLocationState<TFilter>
}

function Filters({ filter, setFilter }: FiltersProps) {
    const { products } = useProductsContext()

    const { text, category, color, company, shipping, price } = filter

    function updateFilter(
        event:
            | React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
            | React.MouseEvent<HTMLButtonElement>,
    ) {
        let {
            name,
            value,
            textContent,
            dataset: { color },
            //@ts-ignore
            checked,
        } = event.currentTarget

        const key = name as keyof TFilter

        // when click on button the value = '', so we take the value of textContent
        const newValue =
            key === 'price'
                ? Number(value)
                : key === 'color'
                ? color
                : key === 'category'
                ? textContent
                : key === 'shipping'
                ? (checked as boolean)
                : value

        setFilter(oldF => ({ ...oldF, [key]: newValue }))
    }

    function clearFilters(): void {
        setFilter({
            text: '',
            company: 'all',
            category: 'all',
            color: 'all',
            price: 0,
            shipping: false,
        })
    }

    const [maxPrice, minPrice] = useMemo(() => {
        const prices = products.map(p => p.price)
        return [Math.max(...prices), Math.min(...prices)]
    }, [products])

    const [categories, colors, companies] = useMemo(
        () => [
            getUniqueValues(products, 'category'),
            getUniqueValues(products, 'colors'),
            getUniqueValues(products, 'company'),
        ],
        [products],
    )

    return (
        <Wrapper>
            <div className='content'>
                <form onSubmit={e => e.preventDefault()}>
                    <div className='form-control'>
                        <input
                            type='text'
                            name='text'
                            placeholder='search'
                            className='search-input'
                            value={text}
                            onChange={updateFilter}
                        />
                    </div>

                    <div className='form-control'>
                        <h5>category</h5>
                        <div>
                            {categories.map(cat => (
                                <button
                                    key={Math.random()}
                                    type='button'
                                    name='category'
                                    onClick={updateFilter}
                                    className={`${category === cat.toLowerCase() ? 'active' : ''}`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className='form-control'>
                        <h5>company</h5>
                        <select
                            name='company'
                            value={company}
                            onChange={updateFilter}
                            className='company'
                        >
                            {companies.map(com => (
                                <option value={com} key={Math.random()}>
                                    {com}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className='form-control'>
                        <h5>colors</h5>
                        <div className='colors'>
                            {colors.map(col => (
                                <button
                                    key={Math.random()}
                                    name='color'
                                    style={{ backgroundColor: col }}
                                    className={`${color === col ? 'active' : ''} ${
                                        col === 'all' ? 'all-btn' : 'color-btn'
                                    } `}
                                    data-color={col}
                                    onClick={updateFilter}
                                >
                                    {col === 'all' ? 'all' : color === col ? <FaCheck /> : null}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className='form-control'>
                        <h5>price</h5>
                        <div className='price'>{formatPrice(price || maxPrice)}</div>
                        <input
                            type='range'
                            name='price'
                            onChange={updateFilter}
                            max={maxPrice}
                            min={minPrice}
                            value={price || maxPrice}
                        />
                    </div>

                    <div className='form-control shipping'>
                        <label htmlFor='shipping'>free shipping</label>
                        <input
                            type='checkbox'
                            name='shipping'
                            id='shipping'
                            onChange={updateFilter}
                            checked={shipping}
                        />
                    </div>
                </form>

                <button type='button' className='clear-btn' onClick={clearFilters}>
                    clear filters
                </button>
            </div>
        </Wrapper>
    )
}

export default Filters

const Wrapper = styled.section`
    .form-control {
        margin-bottom: 1.25rem;
        h5 {
            margin-bottom: 0.5rem;
        }
    }
    .search-input {
        padding: 0.5rem;
        background: var(--clr-grey-10);
        border-radius: var(--radius);
        border-color: transparent;
        letter-spacing: var(--spacing);
    }
    .search-input::placeholder {
        text-transform: capitalize;
    }
    button {
        display: block;
        margin: 0.25em 0;
        padding: 0.25rem 0;
        text-transform: capitalize;
        background: transparent;
        border: none;
        border-bottom: 1px solid transparent;
        letter-spacing: var(--spacing);
        color: var(--clr-grey-5);
        cursor: pointer;
    }
    .active {
        border-color: var(--clr-grey-5);
    }
    .company {
        background: var(--clr-grey-10);
        border-radius: var(--radius);
        border-color: transparent;
        padding: 0.25rem;
    }
    .colors {
        display: flex;
        align-items: center;
    }
    .color-btn {
        display: inline-block;
        width: 1rem;
        height: 1rem;
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
            font-size: 0.5rem;
            color: var(--clr-white);
        }
    }
    .all-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 0.5rem;
        opacity: 0.5;
    }
    .active {
        opacity: 1;
    }
    .all-btn .active {
        text-decoration: underline;
    }
    .price {
        margin-bottom: 0.25rem;
    }
    .shipping {
        display: grid;
        grid-template-columns: auto 1fr;
        align-items: center;
        text-transform: capitalize;
        column-gap: 0.5rem;
        font-size: 1rem;
    }
    .clear-btn {
        background: var(--clr-red-dark);
        color: var(--clr-white);
        padding: 0.25rem 0.5rem;
        border-radius: var(--radius);
    }
    @media (min-width: 768px) {
        .content {
            position: sticky;
            top: 1rem;
        }
    }
`
