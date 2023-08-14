import React from 'react'

const page = ({params}:any) => {
  return (
    <div className='text-4xl bg-red-600'>profile page of {params.id}</div>
  )
}

export default page
