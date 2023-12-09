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
    <div>
        <h1 className=' font-eudoxus text-3xl'>{project.title}</h1>
        <h2>{project.desc}</h2>
    </div>
  )
}
