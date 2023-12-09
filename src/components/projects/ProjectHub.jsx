import React from 'react'
import { specialProjects } from '../../constants'
import { FeaturedComponent } from './FeaturedComponent'
import { Link } from 'react-router-dom'

export const ProjectHub = () => {
  return (
  <div>
   {
    specialProjects.map((project, index) => (
      <Link key={index} to={`/projects/${project.title}`}>
          <FeaturedComponent project={project} />
      </Link>
    ))
   }
   </div>
  )
}
