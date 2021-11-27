export interface AlertInterface {
  show?: boolean
  msg?: string
  type?: 'success' | 'danger' | ''
}

export interface ItemInterface {
  id: number
  title: string
}
