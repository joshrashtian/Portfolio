import { collection, doc, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../../../firebase'



const Achievements = () => {

  const achievementsRef = collection(db, 'achievements')
  
  const [achievements, setAchivements] = useState([{}])

  useEffect(() => {
    const getAchivements = async () => {
        try {
            const grabbedData = await getDocs(achievementsRef)
            const data = grabbedData.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id
            }));
            setAchivements(data)
        } catch (e) {
            console.log(e)
        }
    }

    getAchivements()
  }, [])


  return (
    <div>
        {
            achievements.map((achievement, index) => (
            <div className='p-3 bg-white shadow-lg rounded-2xl py-10' key={index}>
                <h1 className=' font-eudoxus text-lg text-amber-600'>{achievement.title} - {achievement.giver}</h1>
                <h1 className=' font-eudoxus'>{achievement.category}</h1>
                {
                    achievement.sharedWith != null ? 
                    <h1 className=' text-slate-600 font-eudoxus'>Shared with: {achievement.sharedWith}</h1>
                    : null
                }

                <h2 className=' text-slate-600 font-eudoxus'>Contribution / Position: {achievement.contribution}</h2>
            </div>
            ))
        }
    </div>
  )
}

export default Achievements