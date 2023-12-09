import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { specialProjects } from '../../constants'

export const ProjectScreen = () => {
  const { id } = useParams()
  const [project, setProject] = useState({})

  useEffect(() => {
    for(let i = 0; i < specialProjects.length; i++){
        if(specialProjects[i].title == id){
            setProject(specialProjects[i])
            break
        }
    }
  })

  return (
    <div className=' ml-20 mt-10'>
        <div className='flex items-center'>
        <h1 className=' font-eudoxus text-6xl'>{project.title}</h1>
        <div className='p-0.5 px-2 bg-slate-100 items-center ml-2 rounded-xl'>
            <h2 className='font-eudoxus text-teal-600'>{project.state}</h2>
        </div>
        </div>
        <h2 className='font-eudoxus text-slate-500 text-2xl'>{project.desc}</h2>
        
    </div>
  )
}
