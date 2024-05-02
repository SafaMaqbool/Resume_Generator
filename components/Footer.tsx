import Image from 'next/image'
import React from 'react'
import logo from '../../project/public/assets/logo.svg'
import fb from '../../project/public/assets/fb.svg'
import linkedin from '../../project/public/assets/linkendin.svg'
import insta from '../../project/public/assets/insta.svg'
import twitter from '../../project/public/assets/twitter.svg'

const Footer = () => {
  return (
    <div className='flex gap-52'>
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