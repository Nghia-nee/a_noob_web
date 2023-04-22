import React from 'react'
import Item from './Item'

const Community = () => {

  return (
    <div className='w-full flex flex-col items-center justify-center mt-[100px]'>
        <h2 className='font-bold text-[24px]'>COMUMUNITY</h2>
        <div className='flex flex-col md:flex-row flex-wrap items-center justify-between'>
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        </div>
    </div>
  )
}

export default Community