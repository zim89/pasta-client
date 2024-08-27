import { Contacts } from '@/components/contacts'
import { Hero } from '@/components/hero'
import InstagramSection from '@/components/instagramSection/InstagramSection'
import { Features, HitDishes, NewDishes } from '@/components/sections'

export default function Home() {
  return (
    <div className='flex flex-col pb-5 md:pb-9 xl:mb-10'>
      <Hero />
      <NewDishes />
      {/* Wrapped in containers for ordering sections */}
      <div className='flex flex-col'>
        <HitDishes />
        <Features />
      </div>
      {/* Wrapped in containers for ordering sections */}
      <div className='flex flex-col'>
        <Contacts />
        <InstagramSection />
      </div>
    </div>
  )
}
