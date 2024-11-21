import { Contacts } from '@/widgets/root/contacts'
import { Features } from '@/widgets/root/features'
import { Hero } from '@/widgets/root/hero'
import { HitProducts } from '@/widgets/root/hit-products'
import { InstagramPosts } from '@/widgets/root/instagram-posts'
import { NewProducts } from '@/widgets/root/new-products'

export const HomePage = () => {
  return (
    <div className='pb-[60px] md:pb-[72px] xl:pb-[120px]'>
      <Hero />
      <NewProducts />
      <HitProducts />
      <Features />
      <InstagramPosts />
      <Contacts />
    </div>
  )
}
