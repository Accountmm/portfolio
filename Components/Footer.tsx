import React from 'react'
import CustomBtn from './Ui/CustomBtn'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/Data'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full pt-20 pb-10' id='contact'>
      <div className='w-full absolute left-0 -bottom-72 min-h-96'>
        <img src="/footer-grid.svg" alt="grid" className='w-full h-full opacity-50' />
      </div>

      <div className=' flex flex-col items-center'>
        <h1 className='heading lg:max-w-[45vw]'>Ready to take <span className='text-purple'>your</span> digital presense to next level? </h1>
        <p className='text-white-200 md:mt-10 mt-5 text-center'>Reach out me today and let's discuss how can I help you to reach your goals</p>
        <a href="mailto:www.mirabbos22@gmail.com">
          <CustomBtn
            text="Let's get in touch"
            icon={<FaLocationArrow />}
            position='right'
          />
        </a>
      </div>
      <div className='flex mt-16 md:flex-row flex-col  justify-between items-center'>
        <p className='md:text-base text-sm md:font-normal font-light'>Copyright © 2024 Mirobidov Mirabbos</p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <Link
              href={info.link}
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer