import { ReactNode } from 'react'
import { Error, Info, Success, Warning } from './styled'

interface Props {
  type: 'success'|'info'|'warning'|'error'
  children: ReactNode
}

export default function Notification ({ type, children }: Props) {
  switch (type) {
    case 'success':  return <Success>{children}</Success>
    case 'info':  return <Info>{children}</Info>
    case 'warning':  return <Warning>{children}</Warning>
    default: return <Error>{children}</Error>
  }
}
