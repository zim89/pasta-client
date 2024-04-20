import { Footer } from '@/components/footer'
import { Header } from '@/components/header'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div className='grid grid-rows-[_1fr_auto]'>
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}
