import React from 'react'
import { motion } from 'motion/react'

const Test = () => {
  return (
   <section style={{display: "flex", alignItems:"center",justifyContent:"center"}}>
    <motion.div 
    initial = {{x:0,y:0,opacity:0}}
    animate = {{x:100,y:-200,opacity:1}}
    transition={{
        duration:2,
        ease:"easeInOut"
    }}
    
    style={{width:300,height:300,background:"red"}}></motion.div>
   </section>
  )
}

export default Test