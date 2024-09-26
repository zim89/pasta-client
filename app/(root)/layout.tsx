import { Footer } from '@/widgets/root/footer'
import { Header } from '@/widgets/root/header'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div className='grid h-screen grid-rows-[1fr_auto]'>
        <main className='pt-[109.59px] md:pt-12'>{children}</main>
        <Footer />
      </div>
    </>
  )
}
