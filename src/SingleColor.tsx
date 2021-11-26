import { ColorInterface } from './Interface'
import { useEffect, useRef, useState } from 'react'

interface SingleColorProps {
  color: ColorInterface
}

function SingleColor({ color: { hex, weight, type } }: SingleColorProps) {
  const [isCopied, setIsCopied] = useState(false)
  const copyRef = useRef<any>()
  const hexValue = '#' + hex

  useEffect(() => {
    const copiedNode = copyRef.current
    const timeOut = setTimeout(() => (copiedNode.style.display = 'none'), 3000)
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

      <p
        style={{ userSelect: 'none', display: isCopied ? 'block' : 'none' }}
        className='alert'
        ref={copyRef}
      >
        Copied hex value
      </p>
    </article>
  )
}

export default SingleColor
