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
    <div className='  py-3 pb-10 mx-14 my-10'>
      {
        posts.map((post, index) => (
          <div key={index} className='mx-20 rounded-2xl bg-zinc-200 my-5 p-4 py-8 pb-14'>
          <h1 className={`${post.headingcss} text-5xl m-4 ml-2 font-eudoxus`}>{post.title}</h1>
          <h1 className=' font-eudoxus mx-2 my-2 rounded-lg'>Posted: {post.postedAt}</h1>
          <h1 className={`${post.textcss} ml-2`}>{post.text}</h1>
          </div>
        ))
      }
    </div>
  )
}
