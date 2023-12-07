import React, { useEffect } from 'react'
import { addDoc, collection, getDocs, serverTimestamp } from 'firebase/firestore'
import { db } from '../../firebase'
import { useState } from 'react'

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
  })

  return (
    <div className=' bg-zinc-200 py-3 mx-14 rounded-2xl my-10'>
      {
        posts.map((post, index) => (
          <div key={index} className='mx-20'>
          <h1 className={`${post.headingcss} text-5xl mt-4 mb-4`}>{post.title}</h1>
          <h1 className=' font-eudoxus mx-2 my-2 rounded-lg'>Posted: {post.postedAt}</h1>

          <div className='flex mb-5'>
            
            <h1 className=' font-eudoxus p-1'>Tags:</h1>
            { post.tags.map((tag) => (
              <div className=' font-eudoxus text-teal-700 mx-2 p-1 px-2 bg-slate-100 rounded-xl'>
              <h1>{tag}</h1>
              </div>
            ))}
            </div>

          <h1 className={`${post.textcss}`}>{post.text}</h1>
          </div>
        ))
      }
    </div>
  )
}
