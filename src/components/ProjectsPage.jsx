import React, { useState } from 'react'
import { Projects } from './Projects'
import { Outlet } from "react-router-dom";
import { ProjectNavigation } from './projects/ProjectNavigation'

export const ProjectsPage = () => {

  return (
    <div className=' gap-3'>
        <ProjectNavigation />

        <Outlet />
    </div>
    
  )
}
