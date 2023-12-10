import React from 'react'

export const DeepDive = ({ skill }) => {
  return (
    <div className=' justify-center items-center '>
        <div className='flex flex-row gap-1 justify-center'>
            <h1 className='font-eudoxus'>{skill.skill}</h1>
            <h1 className='font-eudoxus text-teal-600'>{skill.field}</h1>
        </div>
        <h1 className='font-eudoxus mx-1 text-slate-500'>{skill.desc}</h1>
    </div>
  )
}
