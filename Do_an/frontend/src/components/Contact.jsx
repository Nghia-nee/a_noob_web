import React from 'react'

const Contact = () => {
  return (
    <div className='flex flex-col md:flex-row md:w-[80%] my-[36px] bg-[#fb98bb] p-4 text-[#a22752] rounded-md'>
        <div className='flex-1 flex flex-col items-center justify-center'>
            <h3 className='font-semibold text-[20px]'>Join Our Club And Get</h3>
            <div className='flex items-center'>
                <div className='flex flex-col items-center mx-4 my-6'>
                    <img src="https://images.ctfassets.net/9wtva4vhlgxb/52GQDBBjfxp0ssfPt06H4E/b9ffca95b73996eef323e2a9475cb002/coupons.svg" alt="" />
                    <p>coupons</p>
                </div>
                <div className='flex flex-col items-center mx-4 my-6'>
                    <img src="https://images.ctfassets.net/9wtva4vhlgxb/3v6X8H2FoTVmsL3S7J7GqS/8c62d92b923203f91579e55a1cf3f2c9/tools.svg" alt="" />
                    <p>tools & quizzes</p>
                </div>
                <div className='flex flex-col items-center mx-4 my-6'>
                    <img src="https://images.ctfassets.net/9wtva4vhlgxb/6PhVAAFRdXFwSgu3LaIMUL/4dd2cf71321e839e9c81fc0b4a2276f3/advices.svg" alt="" />
                    <p>parenting tips</p>
                </div>
            </div>
        </div>
        <div className='flex-1 flex items-center flex-col md:flex-row justify-center md:border-l-2 md:border-l-[#a22752]'>
            <input type="text" placeholder='Your email' className='rounded-md text-[14px] p-2 w-[200px]'/>
            <button className='rounded-xl mt-4 md:mt-0 md:ml-2 bg-[#a22752] text-white py-1 px-3 hover:opacity-60'>Sign up</button>
        </div>
    </div>
  )
}

export default Contact