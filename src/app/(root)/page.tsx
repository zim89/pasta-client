import { Hero } from '@/components/hero'
import { Features } from '@/components/features'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <>
      <Hero />
      <div className='container'>
        <h2>Main Page</h2>
      </div>

      <Features />
    </>
  )
}
