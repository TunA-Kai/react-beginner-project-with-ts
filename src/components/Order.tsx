import { Link } from 'react-router-dom'
import { TPizza } from '../App'

interface OrderProps {
    pizza: TPizza
}

function Order({ pizza }: OrderProps) {
    return (
        <div className='container order'>
            <h2>Thank you for your order :)</h2>
            <p>You ordered a {pizza.base} pizza with:</p>
            {pizza.toppings.map(topping => (
                <div key={topping}>{topping}</div>
            ))}
            <Link to='/'>
                <button>Order another</button>
            </Link>
        </div>
    )
}

export default Order
