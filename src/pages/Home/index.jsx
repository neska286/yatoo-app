import { useEffect, useState } from 'react'
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import './home.css'
import axios from 'axios'
import Posts from '../../components/Posts'

const Home = () => {
  const[posts,setPosts]=useState([])
  
  useEffect(()=>{
    const fetchposts = async ()=>{
      const response = await axios.get('http://localhost:5000/posts')
      // console.log('response',response.data)
      setPosts(response.data)
    }
    fetchposts()
  },[])


  return (
      <>
    <Header/>
   <div className="home">
   <Posts posts={posts}/>
       <Sidebar/>
   </div>
    </>
    
  )
}

export default Home