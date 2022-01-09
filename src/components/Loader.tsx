import { motion } from 'framer-motion'
import type { TargetAndTransition } from 'framer-motion'

const loaderVariants: { [key: string]: TargetAndTransition } = {
    animationOne: {
        x: [-20, 20],
        y: [0, -30],
        transition: {
            x: { repeat: Infinity, repeatType: 'reverse', duration: 0.5 },
            y: {
                repeat: Infinity,
                repeatType: 'reverse',
                duration: 0.25,
                ease: 'easeInOut',
            },
        },
    },
}

function Loader() {
    return (
        <>
            <motion.div
                className='loader'
                variants={loaderVariants}
                animate='animationOne'
            ></motion.div>
        </>
    )
}

export default Loader
