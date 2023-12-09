import React from 'react'



export const FeaturedComponent = ({ project }) => {

  console.log(project)

  return (
    <div className='p-10 bg-gray-200 '>
      <h1>{project.title}</h1>
    </div>
  )
}
