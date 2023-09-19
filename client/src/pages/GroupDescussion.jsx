import React from 'react'
import MainLayout from '../components/layout/MainLayout'
import { useParams } from 'react-router-dom'

const GroupDescussion = () => {
    const { id } = useParams()
  return (
    <MainLayout>
       <div>
            {id}
       </div>
    </MainLayout>

  )
}

export default GroupDescussion