import { Base, Header, Home, Order, Toppings } from './components'
import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'

export interface TPizza {
    base: string
    toppings: string[]
}

function App() {
    const [pizza, setPizza] = useState<TPizza>({ base: '', toppings: [] })

    function addBase(base: string) {
        setPizza({ ...pizza, base })
    }

    function addTopping(topping: string) {
        let newToppings
        if (!pizza.toppings.includes(topping)) {
            newToppings = [...pizza.toppings, topping]
        } else {
            newToppings = pizza.toppings.filter(item => item !== topping)
        }
        setPizza({ ...pizza, toppings: newToppings })
    }

    return (
        <>
            <Header />
            <Routes>
                <Route
                    path='/base'
                    element={<Base addBase={addBase} pizza={pizza} />}
                />
                <Route
                    path='/toppings'
                    element={<Toppings addTopping={addTopping} pizza={pizza} />}
                />
                <Route path='/order' element={<Order pizza={pizza} />} />
                <Route path='/' element={<Home />} />
            </Routes>
        </>
    )
}

export default App
