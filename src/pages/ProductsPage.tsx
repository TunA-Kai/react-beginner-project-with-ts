import styled from 'styled-components'

interface ProductsPageProps {}

function ProductsPage({}: ProductsPageProps) {
    return <>ProductsPage Component</>
}

export default ProductsPage

const Wrapper = styled.div`
    .products {
        display: grid;
        gap: 3rem 1.5rem;
        margin: 4rem auto;
    }
    @media (min-width: 768px) {
        .products {
            grid-template-columns: 200px 1fr;
        }
    }
`
