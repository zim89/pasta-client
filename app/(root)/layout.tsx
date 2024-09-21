import { Footer } from '@/widgets/root/footer'
import { Header } from '@/widgets/root/header'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='grid h-screen grid-rows-[auto_1fr_auto]'>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
