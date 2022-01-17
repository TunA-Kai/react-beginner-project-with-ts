import styled from 'styled-components'
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs'

interface StarsProps {
  stars: number
  reviews: number
}

function Stars({ stars, reviews }: StarsProps) {
  const starsArr = new Array(5).fill(0).map((_, index) => {
    const i = index + 1
    //prettier-ignore
    const icon = (i <= stars) ? <BsStarFill /> : (i - 1 < stars && stars < i) ? <BsStarHalf /> : <BsStar/>
    return <span key={index}>{icon}</span>
  })
  return (
    <Wrapper>
      <div className='stars'>{starsArr}</div>
      <p className='reviews'>{reviews} customer reviews</p>
    </Wrapper>
  )
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
