import React from 'react'
import { motion } from 'framer-motion'
import GitHub from '../assets/projects/github.png'
import { Linkedin } from '../constants/imageindex'

const BottomRowComponents = [
{
    id: 1,
    title: 'GitHub',
    icon: GitHub,
    link: 'https://github.com/joshrashtian/'
},
{
    id: 2,
    title: 'LinkedIn',
    icon: Linkedin,
    link: 'https://github.com/joshrashtian/'
}
]

const BottomRow = () => {
  return (
    <motion.div className='bg-gradient-to-r mx-48 my-12 rounded-3xl flex flex-row items-center justify-center from-slate-500 to-slate-900'>
        <motion.div className='w-full h-24 mx-3 flex flex-row items-center justify-center rounded-b-lg'>
            <div className='flex flex-row'>
            {
                BottomRowComponents.map((component) => (
                    <motion.div
                    key={component.id} className=' items-center mx-3 text-center flex flex-col  hover:shadow-lg p-3 '>
                        <img src={component.icon} className='w-12 h-12 rounded-md' />
                        <h1 className=' font-eudoxus text-white text-sm'>{component.title}</h1>
                    </motion.div>
                ))
            }
            </div>
        </motion.div>
    </motion.div>
  )
}

export default BottomRow