import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'

interface PageHeroProps {
    productTitle?: string
}

function PageHero({ productTitle }: PageHeroProps) {
    const location = useLocation()
    return (
        <Wrapper>
            <div className='section-center'>
                <h3>
                    <Link to='/'>Home</Link>
                    {productTitle ? (
                        <>
                            <Link to='/products'>/Products</Link>/{productTitle}
                        </>
                    ) : (
                        location.pathname
                    )}
                </h3>
            </div>
        </Wrapper>
    )
}

export default PageHero

const Wrapper = styled.section`
    background: var(--clr-primary-10);
    width: 100%;
    min-height: 20vh;
    display: flex;
    align-items: center;
    color: var(--clr-primary-1);
    a {
        color: var(--clr-primary-3);
        padding: 0.5rem;
        transition: var(--transition);
    }
    a:hover {
        color: var(--clr-primary-1);
    }
`
