import React from 'react'

const Item = () => {
  return (
    <div className='w-[260px] shadow-[0_2px_4px_0px_rgba(0,0,0,0.3)] my-[32px] mx-2 rounded-md cursor-pointer hover:opacity-70'>
        <img src="https://images.ctfassets.net/9wtva4vhlgxb/7ftRv7BloaHJHXVleyXUyI/1a29050893aea6965edbd6683f3fbbb1/Swaddlers_280x195.png?fm=webp" alt="" className='w-full object-cover'/>
        <div className='flex flex-col items-center'>
            <h3 className='font-semibold'>How to rise your children?</h3>
            <p className='text-[#333] text-[14px] text-center mx-2 my-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto ullam officiis placeat dolor deserunt autem tempora quasi.</p>
        </div>
    </div>
  )
}

export default Item