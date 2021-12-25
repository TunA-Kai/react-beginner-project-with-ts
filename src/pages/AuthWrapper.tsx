import { ReactComponent as Spinner } from '../images/spinner.svg'
import styled from 'styled-components'

const Wrapper = styled.section`
    min-height: 100vh;
    display: grid;
    place-items: center;
    img {
        width: 150px;
    }
`

interface AuthWrapperProps {}

const AuthWrapper: React.FC<AuthWrapperProps> = ({}) => {
    return <h2>authwrapper component</h2>
}

export default AuthWrapper
