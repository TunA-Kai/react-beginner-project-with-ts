import { Link } from 'react-router-dom'
import { motion, TargetAndTransition } from 'framer-motion'
import { containerVariants } from './Base'

const buttonVariants: { hover: TargetAndTransition } = {
    hover: {
        scale: 1.1,
        textShadow: '0px 0px 8px rgb(255,255,255)',
        boxShadow: '0px 0px 8px rgb(255,255,255)',
        transition: { repeat: Infinity, repeatType: 'reverse', duration: 0.3 },
    },
}

interface HomeProps {}

function Home({}: HomeProps) {
    return (
        <motion.div
            variants={containerVariants}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.5, duration: 1 } }}
            exit='exit'
            className='home container'
        >
            <h2>Welcome to Pizza Joint</h2>
            <Link to='/base'>
                <motion.button variants={buttonVariants} whileHover='hover'>
                    Create Your Pizza
                </motion.button>
            </Link>
        </motion.div>
    )
}

export default Home
