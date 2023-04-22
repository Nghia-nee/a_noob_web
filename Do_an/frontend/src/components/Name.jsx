import React from 'react'

const Name = () => {
  return (
    <div className='md:w-[80%]'>
      <div className='bg-[#fb98bb] flex flex-col items-center justify-center rounded-md'>
        <h4 className='font-semibold text-[20px] text-[#a22752] my-3'>FILL YOUR INFORMATION</h4>
        <div className='my-2'>
          <label htmlFor="lastName" className='cursor-pointer'>Father's last name: </label>
          <input id='lastName' type="text" placeholder='name' className='rounded-md text-[14px] p-2 w-[200px]'/>
        </div>
        <div className='my-2'>
          <label htmlFor="lastName" className='cursor-pointer'>Mother's last name: </label>
          <input id='lastName' type="text" placeholder='name' className='rounded-md text-[14px] p-2 w-[200px]'/>
        </div>
      </div>
    </div>
  )
}

export default Name