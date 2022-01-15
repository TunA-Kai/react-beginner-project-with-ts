import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { Error, Loading } from '../components'
import { single_product_url } from '../utils/constants'
import { useGetProduct } from '../utils/useGetProduct'

function SingleProductPage() {
    const { id } = useParams()
    const navigate = useNavigate()
    const {
        data: singleProduct,
        status,
        error,
    } = useGetProduct(single_product_url + id)
    const [second, setSecond] = useState(3)
    console.log(singleProduct)

    useEffect(() => {
        if (status === 'reject') {
            if (second === 0) navigate('/')

            const timeout = setTimeout(() => setSecond(s => s - 1), 1000)
            return () => {
                console.log('clean timeout')
                clearTimeout(timeout)
            }
        }
    }, [status, second])

    if (status === 'pending') return <Loading />
    if (status === 'reject')
        return (
            <>
                <Error error={error ?? ''} />
                <h3>Go back to home page in {second}...</h3>
            </>
        )
    return <>SingleProductPage Component</>
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
