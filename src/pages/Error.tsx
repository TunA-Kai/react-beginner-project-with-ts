import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Wrapper = styled.section`
    min-height: 100vh;
    display: grid;
    place-items: center;
    background: var(--clr-primary-10);
    text-align: center;
    h1 {
        font-size: 10rem;
    }
    h3 {
        color: var(--clr-grey-3);
        margin-bottom: 1.5rem;
    }
`

interface ErrorProps {}

const Error: React.FC<ErrorProps> = ({}) => {
    return <h2>error page</h2>
}

export default Error
