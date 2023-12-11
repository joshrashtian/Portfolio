import React, { useEffect } from 'react'
import { addDoc, collection, getDocs, serverTimestamp } from 'firebase/firestore'
import { db } from '../../firebase'
import { useState } from 'react'
import { motion } from 'framer-motion'

export const Blog = () => {

  const postsRef = collection(db, 'posts')

  const [posts, setPosts] = useState([{}])

  useEffect(() => {
    const getBlogPosts = async () => {
      try {
        const grabbeddata = await getDocs(postsRef)
        const data = grabbeddata.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id
        }));
        setPosts(data)
      } catch (e) {
        console.log(e)
      }
    }

    getBlogPosts()
  }, [])

  return (
    <motion.div className='py-3 pb-10 mx-14 my-10 h-screen' >
      {
        posts.map((post, index) => (
          <motion.div key={index} initial={{ opacity: '0%', y: 20 }} animate={{ opacity: '100%', y: 0}} transition={{ delay: (0.5 + (index * 0.5)), duration: 1 }} className='mx-20 rounded-2xl bg-zinc-200 my-5 p-4 py-8 pb-14'>
            <h1 className={`${post.headingcss} text-5xl m-4 ml-2 font-eudoxus`}>{post.title}</h1>
            <h1 className=' font-eudoxus mx-2 my-2 rounded-lg'>Posted: {post.postedAt}</h1>
            <div className='flex gap-1 items-center my-2'>
              <h1 className='p-1 px-2 font-eudoxus text-teal-950'>Tags: </h1>
            {
              post.tags != undefined ?
              post.tags.map((tag, index) => (
                <div key={index} className='  bg-zinc-300 p-1 px-2 rounded-xl'>
                <h1 className='font-eudoxus text-teal-700'>{tag}</h1>
                </div>
              ))
              : null
            }
            </div>

            
            <h1 className={`${post.textcss} ml-2`}>{post.text}</h1>
          </motion.div>
        ))
      }
    </motion.div>
  )
}
