import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //  fetch('https://api.github.com/users/kirangadhavi')
    //  .then(response => response.json())
    //  .then(data => {
    //     console.log(data);
    //     setData(data)
    //  })
    // }, [])

  return (
    <div className='flex m-4 bg-gray-500 text-white p-4 text-2xl'>
   
   <div className='flex-col flex-wrap  '>
   <img src={data.avatar_url} alt="Git picture" width={300} />
   </div> 
   <div className=' flex-col flex-wrap px-9 pt-5'>
   <div className='mix-blend-plus-lighter font-bold text-3xl pb-4 text-orange-500 underline'>Github Details</div>
   <label>Name : <span>{data.login}</span></label>
   <div><label>location : <span >{data.location}</span> </label> </div>
   <div><label>followers : <span >{data.followers}</span></label>  </div>
    <div><label>Publicrepos : <span >{data.public_repos}</span></label></div>
    <div><label>Updated : <span >{data.updated_at}</span></label></div>   
   </div>
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/kirangadhavi')
    return response.json()
}