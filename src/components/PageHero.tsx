import styled from 'styled-components'

interface PageHeroProps {}

function PageHero({}: PageHeroProps) {
    return <>PageHero Component</>
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
