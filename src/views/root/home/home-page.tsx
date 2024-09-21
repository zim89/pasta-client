import { Hero } from '@/widgets/root/hero'
import { HitProducts } from '@/widgets/root/hit-products'
import { NewProducts } from '@/widgets/root/new-products'

export const HomePage = () => {
  return (
    <div className='pb-[60px] md:pb-[72px] xl:pb-[120px]'>
      <Hero />
      <NewProducts />
      <HitProducts />
    </div>
  )
}
