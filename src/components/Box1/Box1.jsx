import React, { useState } from 'react'
import { motion } from "framer-motion"

export default function Box1() {

    const [isAnimating, setIsAnimating] = useState(false)

    return (
        <div className="box-container">
            <motion.div
                className="box"
                animate={{
                    x: isAnimating ? 800 : 0,
                    opacity: isAnimating ? 1 : 0.2,
                    rotate: isAnimating ? 360 : 0
                }}
                initial={{
                    opacity: 0.2
                }}
                transition={{
                    // duration: 2
                    type: "spring",
                    stiffness: 60,
                    // damping: 20

                }}

                onClick={() => setIsAnimating(!isAnimating)}
            >

            </motion.div>

        </div>
    )
}
