import styled from 'styled-components'

interface CartPageProps {}

function CartPage({}: CartPageProps) {
    return <>CartPage Component</>
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
