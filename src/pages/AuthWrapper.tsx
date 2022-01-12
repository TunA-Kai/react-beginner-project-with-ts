import styled from 'styled-components'

interface AuthWrapperProps {}

function AuthWrapper({}: AuthWrapperProps) {
    return <>AuthWrapper Component</>
}

export default AuthWrapper

const Wrapper = styled.section`
    min-height: 100vh;
    display: grid;
    place-items: center;
`
