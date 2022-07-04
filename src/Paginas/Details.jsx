import React from 'react'
import DetailCard from '../Components/DetailCard'
import { useParams } from 'react-router-dom'

const Details = () => {

  const {id, index} = useParams();
  
  return (
    <div className="h-screen w-full">
        <DetailCard
          id={id}
          index={index}
        />
      
    </div>
  )
}

export default Details;