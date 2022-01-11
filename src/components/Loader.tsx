import { motion, useCycle, Variants } from 'framer-motion'

const loaderVariants: Variants = {
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
    animationTwo: {
        y: [0, -40],
        x: 0,
        transition: {
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
    const [animation, cycleAnimation] = useCycle('animationOne', 'animationTwo')

    return (
        <>
            <motion.div
                className='loader'
                variants={loaderVariants}
                animate={animation}
            ></motion.div>
            <button onClick={() => cycleAnimation()}>Cycle Loader</button>
        </>
    )
}

export default Loader
