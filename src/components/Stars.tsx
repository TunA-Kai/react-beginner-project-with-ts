import styled from 'styled-components'

interface StarsProps {}

function Stars({}: StarsProps) {
    return <>Stars Component</>
}

export default Stars

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    span {
        color: #ffb900;
        font-size: 1rem;
        margin-right: 0.25rem;
    }
    p {
        margin-left: 0.5rem;
        margin-bottom: 0;
    }
    margin-bottom: 0.5rem;
`
