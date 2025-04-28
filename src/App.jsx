 
import { motion } from "motion/react"
import './App.css'

function App() {
  

  return (
    <>
     <motion.h2
     initial={{
          x:300,
     }}
     animate={{
          x:1000,
     }}
     transition={{
          delay:3,
          duration:4,
          repeat:Infinity,
          ease:"anticipate"
     }}
     >hello bangladesh</motion.h2>
     {/* <motion.div animate={{ 
          rotate: 360,
          x:900,
          delay:1,
          duration:2,
 }} 
 transition={{
     duration:4,
     delay:2
 }}
 className="box"></motion.div>
          <motion.div
          animate={{
               x:1200,

          }}
          transition={{
               duration:3
          }}
     >

          </motion.div> */}
          {/* box3 */}
          <motion.div
          animate={{
               x:[0,800,800,0,0],
               y:[0,0,300,300,0],
          }}
          transition={{
               duration:4,
               delay:1,
          }}
          className="box2"></motion.div>
    </>
  )
}

export default App
