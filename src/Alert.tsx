import { useEffect } from 'react'
import { AlertInterface } from './Interface'

interface AlertProps extends AlertInterface {
  setupAlert: ({ show, type, msg }: AlertInterface) => void
}

function Alert({ msg, type, setupAlert }: AlertProps) {
  useEffect(() => {
    const timeout = setTimeout(() => setupAlert({ show: false }), 2000)
    return () => clearTimeout(timeout)
  })

  return <p className={`alert alert-${type}`}>{msg}</p>
}

export default Alert
