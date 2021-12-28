import styled from 'styled-components'
import { useGithubContext } from '../context/context'
import { ExampleChart, Pie, Column, Bar, Doughnut } from './Charts'

const Wrapper = styled.div`
    display: grid;
    justify-items: center;
    gap: 2rem;
    @media (min-width: 800px) {
        grid-template-columns: 1fr 1fr;
    }
    @media (min-width: 1200px) {
        grid-template-columns: 2fr 3fr;
    }
    div {
        width: 100% !important;
    }
    .fusioncharts-container {
        width: 100% !important;
    }
`

interface ReposProps {}

const Repos: React.FC<ReposProps> = ({}) => {
    return (
        <section className='section'>
            <Wrapper className='section-center'>
                {/* <ExampleChart /> */}
                <Pie />
            </Wrapper>
        </section>
    )
}

export default Repos
