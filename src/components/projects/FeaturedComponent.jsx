import React from 'react'



export const FeaturedComponent = ({ project }) => {
  return (
    <div className='p-10 py-20 bg-gray-200 mx-10 my-5 rounded-xl'>
      <div className='flex items-center'>
      <h1 className='font-eudoxus'>{project.title}</h1>
      <div className='p-0.5 px-2 bg-slate-100 items-center ml-4 rounded-xl'>
            <h2 className='font-eudoxus text-sm text-teal-600'>{project.state}</h2>
        </div>
      </div>
      <div>
      <h2>{project.desc}</h2>
      </div>
    </div>
  )
}
