import { projects } from '@/Data'
import React from 'react'
import { PinContainer } from './Ui/PinContainer'
import { FaLocationArrow } from 'react-icons/fa'
import Image from 'next/image'

const RecentProjects = () => {
  return (
    <section className='py-20' id='projects'>
      <h1 className='heading'>
        A small selection of {''}
        <span className='text-purple'>recent projects</span>
      </h1>

      <div className='flex flex-wrap items-center justify-center p-6 gap-x-24 gap-y-8 mt-10'>
        {
          projects.map(({ des, iconLists, id, img, link, title }) => (
            <div key={id} className='flex items-center justify-center lg:min-h-[32rem] h-[25rem] sm:w-96 w-[80vw]' >
              <PinContainer href={link} title={link}>
                <div className='flex items-center justify-center h-[20vg] lg:h-[30vh] mb-10 sm:w-96 w-[80vw] relative overflow-hidden'>
                  <div className='relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d] '>
                    <Image src='/bg.png' alt="bg-img" className='w-full h-full' width={100} height={100} />
                  </div>
                  <Image width={1000} height={1000} src={img} alt={title} className='z-10 absolute bottom-0 h-full w-full' />
                </div>
                <h1 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1'>{title}</h1>
                <p className='lg:text-xl lg:font-normal font-light text-sm line-clamp-2'>{des}</p>

                <div className='flex items-center justify-between mt-7 mb-3'>
                  <div className='flex items-center'>
                    {
                      iconLists.map((item, i) => (
                        <div key={item} className=' border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex items-center justify-center ' style={{ transform: `translateX(-${5 * i * 2}px)` }} >
                          <Image src={item} alt={item} className='p-2' width={38} height={38} />
                        </div>
                      ))
                    }
                  </div>

                  <div className='flex items-center justify-center gap-1 ' >
                    <p className='text-sm text-purple lg:text-xl md:text-xs'>Visit site</p>
                    <FaLocationArrow className='ms-3' color='#CBACF9' />
                  </div>
                </div>
              </PinContainer>
            </div>
          ))
        }
      </div>
    </section >
  )
}

export default RecentProjects