import Approach from '@/Components/Approach';
import Footer from '@/Components/Footer';
import Grid from '@/Components/Grid';
import Hero from '@/Components/Hero'
import RecentProjects from '@/Components/RecentProjects';
import { FloatingNav } from '@/Components/Ui/NavBar'
import { navItems } from '@/Data';
import React from 'react'
import { BiHomeAlt2 } from "react-icons/bi";


const page = () => {
  return (
    <main className='relative bg-black-100  flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5'>
      <div className='max-w-7xl w-full'>
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Approach />
        <Footer />
      </div>
    </main>
  )
}

export default page