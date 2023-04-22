import React from 'react'

const Article = () => {
  return (
    <div className="flex items-center justify-between w-[100%] md:w-[40%] p-2 my-2 border-y-[1px] border-[#ccc] cursor-pointer hover:opacity-70">
        <img src="https://images.ctfassets.net/9wtva4vhlgxb/68iUniFQIAYlOX0Ru5mnFo/b784f2838c5479c9b0a2a18f924eb73f/Top-Baby-Boy_720x432.jpg?fm=webp&q=70" alt="" className='h-[100px] object-cover'/>
        <div className='font-semibold'>1000 Baby boy names to inspire you</div>
    </div>
  )
}

export default Article