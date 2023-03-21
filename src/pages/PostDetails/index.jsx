import React from 'react'
import Sidebar from '../../components/Sidebar'
import PostDetailsCard from './Component/PostDetailsCard'
import './postDetails.css'

const PostDetails = () => {
  return (
    <div className='postDetails'>
     <PostDetailsCard/>
        <Sidebar/>
</div>
  )
}

export default PostDetails
