import { motion, Target, TargetAndTransition } from 'framer-motion'
import { useEffect, useState } from 'react'
import { TPizza } from '../App'
import Modal from './Modal'

const containerVariants: { hidden: Target; visible: TargetAndTransition } = {
    hidden: { x: '100vw', opacity: 0 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            type: 'spring',
            delay: 0.5,
            mass: 0.4,
            damping: 8,
            when: 'beforeChildren',
            staggerChildren: 0.4,
        },
    },
}

const childVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    hover: {
        scale: 1.1,
        textShadow: '0px 0px 8px rgb(255,255,255)',
        boxShadow: '0px 0px 8px rgb(255,255,255)',
    },
}

interface OrderProps {
    pizza: TPizza
}

function Order({ pizza }: OrderProps) {
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        const timeout = setTimeout(() => setShowModal(true), 5000)
        return () => clearTimeout(timeout)
    }, [])

    return (
        <motion.div
            variants={containerVariants}
            initial='hidden'
            animate='visible'
            className='container order'
        >
            <h2>Thank you for your order :)</h2>
            <motion.p variants={childVariants}>
                You ordered a {pizza.base} pizza with:
            </motion.p>
            <motion.div variants={childVariants}>
                {pizza.toppings.map(topping => (
                    <div key={topping}>{topping}</div>
                ))}
            </motion.div>
            {showModal && <Modal />}
        </motion.div>
    )
}

export default Order
