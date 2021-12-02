export interface ItemIn {
  id: number
  title: string
  price: number
  img: string
  amount: number
}

export interface stateIn {
  status: string
  cart: ItemIn[]
  total: number
  amount: number
}

export interface actionIn {
  cart?: ItemIn[]
  type?: string
  id?: number
  status?: string
}
