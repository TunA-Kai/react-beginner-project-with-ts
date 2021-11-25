import { ColorInterface } from './Interface'
import { useEffect, useState } from 'react'

interface SingleColorProps {
  color: ColorInterface
}

function SingleColor({ color: { hex, weight, type } }: SingleColorProps) {
  const [isCopied, setIsCopied] = useState(false)
  const hexValue = '#' + hex

  useEffect(() => {
    const timeOut = setTimeout(() => setIsCopied(false), 3000)
    return () => clearTimeout(timeOut)
  })

  return (
    <article
      onDoubleClick={() => {
        navigator.clipboard.writeText(hexValue)
        setIsCopied(true)
      }}
      style={{
        backgroundColor: hexValue,
        color: type === 'shade' ? '#fff' : '#000',
      }}
    >
      <p className='percent-value'>{weight + '%'}</p>
      <p className='color-value'>{hexValue}</p>
      {isCopied ? (
        <p style={{ userSelect: 'none' }} className='alert'>
          Copied hex value
        </p>
      ) : null}
    </article>
  )
}

export default SingleColor
