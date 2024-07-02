import { Contacts } from '@/components/contacts'
import { Features } from '@/components/features'
import { Hero } from '@/components/hero'
import { NewDishes } from '@/components/newDishes'

export default function Home() {
  return (
    <div className='pb-5 md:pb-9 xl:mb-10'>
      <Hero />
      <NewDishes />
      <Features />
      <Contacts />
    </div>
  )
}
