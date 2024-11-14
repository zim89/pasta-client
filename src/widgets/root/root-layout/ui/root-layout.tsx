import { Footer } from '../../footer'
import { Header } from '../../header'

export const RootLayout = ({ children }: { children: React.ReactNode }) => {
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
