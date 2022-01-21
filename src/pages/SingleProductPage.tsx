import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { AddToCart, Error, Loading, PageHero, ProductImages, Stars } from '../components'
import { TSingleProduct } from '../types/productsTypes'
import { single_product_url as url } from '../utils/constants'
import { formatPrice } from '../utils/helpers'
import { useGetProduct } from '../utils/useGetProduct'

function SingleProductPage() {
    const { id } = useParams()
    const navigate = useNavigate()
    const { data, status, error } = useGetProduct(url + id)
    const [second, setSecond] = useState(3)

    useEffect(() => {
        if (status === 'reject') {
            if (second === 0) navigate('/')

            const timeout = setTimeout(() => setSecond(s => s - 1), 1000)
            return () => {
                console.log('clean timeout')
                clearTimeout(timeout)
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [status, second])

    if (status === 'pending') return <Loading />
    if (status === 'reject')
        return (
            <>
                <Error error={error ?? ''} />
                <h3>Go back to home page in {second}...</h3>
            </>
        )

    const singleProduct: TSingleProduct = data
    const { name, price, description, stock, stars, reviews, id: sku, company, images } = singleProduct
    return (
        <Wrapper>
            <PageHero productTitle={name} />
            <div className='section section-center page'>
                <Link to='/products' className='btn'>
                    back to products
                </Link>
                <div className='product-center'>
                    <ProductImages images={images} />
                    <section className='content'>
                        <h2>{name}</h2>
                        <Stars stars={stars} reviews={reviews} />
                        <h5 className='price'>{formatPrice(price)}</h5>
                        <p className='desc'>{description}</p>
                        <p className='info'>
                            <span>Available : </span>
                            {stock > 0 ? 'In stock' : 'Out of stock'}
                        </p>
                        <p className='info'>
                            <span>SKU : </span>
                            {sku}
                        </p>
                        <p className='info'>
                            <span>Brand : </span>
                            {company}
                        </p>
                        <hr />
                        {stock > 0 && <AddToCart singleProduct={singleProduct} />}
                    </section>
                </div>
            </div>
        </Wrapper>
    )
}

export default SingleProductPage

const Wrapper = styled.main`
    .product-center {
        display: grid;
        gap: 4rem;
        margin-top: 2rem;
    }
    .price {
        color: var(--clr-primary-5);
    }
    .desc {
        line-height: 2;
        max-width: 45em;
    }
    .info {
        text-transform: capitalize;
        width: 300px;
        display: grid;
        grid-template-columns: 125px 1fr;
        span {
            font-weight: 700;
        }
    }
    @media (min-width: 992px) {
        .product-center {
            grid-template-columns: 1fr 1fr;
            align-items: center;
        }
        .price {
            font-size: 1.25rem;
        }
    }
`
