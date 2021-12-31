import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { useGithubContext } from '../context/context'
import { auth } from '../firebase-config'
import { TAction } from '../types'

const Wrapper = styled.nav`
    padding: 1.5rem;
    margin-bottom: 4rem;
    background: var(--clr-white);
    text-align: center;
    display: grid;
    grid-template-columns: auto auto 100px;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
    h4 {
        margin-bottom: 0;
        font-weight: 400;
    }
    img {
        width: 35px !important;
        height: 35px;
        border-radius: 50%;
        object-fit: cover;
    }
    button {
        background: transparent;
        border: transparent;
        font-size: 1.2rem;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        color: var(--clr-grey-5);
        cursor: pointer;
    }
`

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = ({}) => {
    const navigate = useNavigate()
    const { dispatch } = useGithubContext()

    return (
        <Wrapper>
            <h4>
                Welcome{' '}
                <strong>{auth.currentUser?.displayName ?? 'Guest'}</strong>{' '}
            </h4>
            <button onClick={handleSignOut}>sign out</button>
        </Wrapper>
    )

    function handleSignOut() {
        signOut(auth).then(_ => {
            dispatch({ type: TAction.LOGGING_OUT })
            localStorage.setItem('isAuth', 'false')
            navigate('/login')
        })
    }
}

export default Navbar
