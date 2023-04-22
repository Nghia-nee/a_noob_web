import React from 'react'

const Footer = () => {
  return (
    <div className='w-full bg-[#de4b7f] flex items-center justify-center'>
        <div className='w-[1140px] flex justify-around text-white my-12'>
            <div>
                <h4>NAMING YOUR CHILDREN</h4>
                <ul className='mt-[12px]'>
                    <li className='text-[14px] font-light'>Phone: 123213585</li>
                    <li className='text-[14px] font-light'>Email: naming@name.org</li>
                    <li className='text-[14px] font-light'>Address: 123 ABC, HCMC</li>
                </ul>
            </div>
            <div>
                <h4>ABOUT US</h4>
                <ul className='mt-[12px]'>
                    <li className='text-[14px] font-light'>Introduction</li>
                    <li className='text-[14px] font-light'>Contact</li>
                </ul>
            </div>
            <div>
                <h4>SUPORT</h4>
                <ul className='mt-[12px]'>
                    <li className='text-[14px] font-light'>Policy</li>
                    <li className='text-[14px] font-light'>Hiring</li>
                    <li className='text-[14px] font-light'>Security</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer