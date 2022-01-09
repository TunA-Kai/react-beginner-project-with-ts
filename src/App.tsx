import { Base, Header, Home, Order, Toppings } from './components'
import { Route, Routes, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'

export interface TPizza {
    base: string
    toppings: string[]
}

function App() {
    const [pizza, setPizza] = useState<TPizza>({ base: '', toppings: [] })
    const location = useLocation()

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

            <AnimatePresence exitBeforeEnter>
                <Routes location={location} key={location.pathname}>
                    <Route
                        path='/base'
                        element={<Base addBase={addBase} pizza={pizza} />}
                    />
                    <Route
                        path='/toppings'
                        element={
                            <Toppings addTopping={addTopping} pizza={pizza} />
                        }
                    />
                    <Route path='/order' element={<Order pizza={pizza} />} />
                    <Route path='/' element={<Home />} />
                </Routes>
            </AnimatePresence>
        </>
    )
}

export default App
