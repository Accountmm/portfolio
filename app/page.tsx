import Approach from '@/Components/Approach';
import Footer from '@/Components/Footer';
import Grid from '@/Components/Grid';
import Hero from '@/Components/Hero'
import RecentProjects from '@/Components/RecentProjects';
import { FloatingNav } from '@/Components/Ui/NavBar'
import { navItems } from '@/Data';
import Head from 'next/head';
import React from 'react'

const page = () => {

  return (
    <>
      <main className='relative bg-black-100  flex justify-center items-center flex-col  mx-auto sm:px-10 px-5 overflow-clip'>
        <div className='max-w-7xl w-full'>
          <FloatingNav navItems={navItems} />
          <Hero />
          <Grid />
          <RecentProjects />
          <Approach />
          <Footer />
        </div>
      </main>
    </>
  )
}

export default page