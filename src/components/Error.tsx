import { useProductsContext } from '../context/productsContext'

interface ErrorProps {
    error: string
}

function Error({ error }: ErrorProps) {
    return (
        <div className='section section-center text-center'>
            <h2>{error}</h2>
        </div>
    )
}

export default Error
