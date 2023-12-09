import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Buttons = [{
    num: 0,
    id: "/projects/",
    title: "Products"
},
{
    num: 1,
    id: "/projects/database",
    title: "Database"
}
]

export const ProjectNavigation = () => {
  const [selected, setSelected] = useState(0);

  return (
    <div className='my-3'>
    <div className='w-2/6 h-2/6 m-auto items-center justify-center bg-gray-300 rounded-xl flex gap-5'>
        {
            Buttons.map((button) => (
                <Link to={button.id} key={button.num}>
                    <div className={`${ button.num == selected ? "bg-gray-400" : "" } p-1 px-2 rounded-3xl m-1 hover:scale-110 transition-all duration-300`} onClick={() => {setSelected(button.num)}}>
                        <h1 className={`${ button.num == selected ? "text-white" : "" } font-eudoxus transition-all duration-300`}>{button.title}</h1>
                    </div>
                </Link>
            ))
        }
    </div>
    </div>
  )
}
