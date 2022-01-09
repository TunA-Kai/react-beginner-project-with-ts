import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const backdropVariants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
}

const modalVariants = {
    hidden: {
        x: '-50%',
        y: '-100vh',
        opacity: 0,
    },
    visible: {
        y: 0,
        x: '-50%',
        opacity: 1,
        transition: { delay: 0.5 },
    },
}

function Modal() {
    return (
        <>
            <motion.div
                variants={modalVariants}
                initial='hidden'
                animate='visible'
                className='modal'
            >
                <p>Want to make another pizza?</p>
                <Link to='/'>
                    <button>Start again</button>
                </Link>
            </motion.div>
            <motion.div
                className='backdrop'
                variants={backdropVariants}
                initial='hidden'
                animate='visible'
            ></motion.div>
        </>
    )
}

export default Modal
