import { useProductsContext } from '../context/productsContext'

interface ErrorProps {}

function Error({}: ErrorProps) {
    const { error } = useProductsContext()
    return (
        <div className='section section-center text-center'>
            <h2>{error}</h2>
        </div>
    )
}

export default Error
