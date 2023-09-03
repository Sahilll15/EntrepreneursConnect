import React from 'react'
import Sidebar from '../components/Sidebar'
import PostFormCard from '../components/PostFormCard'


const Home = () => {
  return (
    <div className="flex justify-center">
      <div className="w-full md:w-2/3 lg:w-2/4">
        <Sidebar />
        <PostFormCard />
      </div>
    </div>

  )
}

export default Home