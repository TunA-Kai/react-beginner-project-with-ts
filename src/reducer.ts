import { stateIn, actionIn, ItemIn } from './Interface'

export function calculateDerivedState(state: stateIn): stateIn {
  const { cart } = state
  const amount = cart.reduce((amo: number, item) => amo + item.amount, 0)
  const total = cart.reduce(
    (total: number, { amount, price }) => total + amount * price,
    0,
  )

  return { ...state, amount, total }
}

function reducer(state: stateIn, action: actionIn): stateIn {
  const { type } = action
  const { cart } = state
  let newCart: ItemIn[] = []

  switch (type) {
    case 'clearAll':
      newCart = []
      break
    case 'removeItem':
      newCart = cart.filter(item => item.id !== action.id)
      break
    case 'increment':
      newCart = cart.map(item =>
        item.id === action.id ? { ...item, amount: item.amount + 1 } : item,
      )
      break
    case 'decrement':
      newCart = cart.map(item =>
        item.id === action.id ? { ...item, amount: item.amount - 1 } : item,
      )
      break
  }

  return {
    ...calculateDerivedState({ ...state, cart: newCart }),
  }
}

export default reducer
