import Image from 'next/image'
import React from 'react'
import logo from '@/public/assets/logo.svg'
import fb from '@/public/assets/fb.svg'
import linkedin from '@/public/assets/linkendin.svg'
import insta from '@/public/assets/insta.svg'
import twitter from '@/public/assets/twitter.svg'

const Footer = () => {
  return (
    <div className='flex gap-52 my-12 justify-center'>
       <div>
        <Image src={logo} alt='logo'/>
       </div>


       <div className='flex flex-col'>
        <p>About & FAQS</p>
        <p>PROFILE</p>
        <p>REPORTS</p>
        <p>INSIGHTS</p>
       </div>

       <div className='flex flex-col'>
        <p>About & FAQS</p>
        <p>PROFILE</p>
        <p>REPORTS</p>
        <p>INSIGHTS</p>
       </div>

       <div className='flex flex-row'>
        <Image src={fb} alt=''/>
        <Image src={linkedin} alt=''/>
        <Image src={twitter} alt=''/>
        <Image src={insta} alt=''/>


       </div>
    </div>
  )
}

export default Footer