import React from 'react'
import { motion } from 'framer-motion'

export default function ErrorPage() {
  return (
    <div className='justify-center align-middle h-screen'>
        <motion.h1 initial={{ x: -30, opacity: '0%'}} animate={{x: 0, opacity: '100%'}} transition={{duration: 0.40}} className='font-bold text-4xl text-center'>
            Oops! We couldn't find that page :(
        </motion.h1>
    </div>
  )
}
