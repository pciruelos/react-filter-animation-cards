import React from 'react'
import {motion} from 'framer-motion'

const Card = ({movies}) => {
  return (
    <motion.div
    animate={{opacity:1}}
    initial={{opacity:0}}
    exit={{opacity:0}}
    transition={{duration:0.5}}
     layout className='bg-white text-black rounded p-5 mb-1'>
              <h2 className='text-xl text-center'>{movies.title}</h2>
              <img className='object-fill' src={'https://image.tmdb.org/t/p/w500'+movies.backdrop_path} alt="" />
    </motion.div>)
  
}

export default Card