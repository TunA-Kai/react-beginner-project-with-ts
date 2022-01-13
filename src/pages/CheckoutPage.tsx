import styled from 'styled-components'
import { PageHero } from '../components'

interface CheckoutPageProps {}

function CheckoutPage({}: CheckoutPageProps) {
    return (
        <main>
            <PageHero />
            <Wrapper className='page'></Wrapper>
        </main>
    )
}

export default CheckoutPage

const Wrapper = styled.div``
