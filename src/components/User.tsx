import styled from 'styled-components'
import Card from './Card'
import Followers from './Followers'

const Wrapper = styled.div`
    padding-top: 2rem;
    display: grid;
    gap: 3rem 2rem;
    @media (min-width: 992px) {
        grid-template-columns: 1fr 1fr;
    }
    /* align-items: start; */
`

interface UserProps {}

const User: React.FC<UserProps> = ({}) => {
    return (
        <section className='section'>
            <Wrapper className='section-center'>
                <Card />
                <Followers />
            </Wrapper>
        </section>
    )
}

export default User
