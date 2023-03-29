import React from 'react';
import {motion} from "framer-motion";

const animations = {
    initial: {opacity:0},
    animate: {opacity:1, transition: {duration: 0.5, ease: "easeInOut"}},
    exit: {opacity:0, transition: {duration: 0.3, ease: "easeInOut"}},
}

function AnimatedPageTransition({children}) {
  return (
  <>
    <motion.div variants={animations}
      initial="initial" 
      animate="animate" 
      exit="exit">
          {children}
    </motion.div>
  </>
  )
}

export default AnimatedPageTransition