import Image from 'next/image'
import mapImgTablet from '@/assets/images/map-md.png'
import mapImgDesktop from '@/assets/images/map-xl.png'
import { LinkIcon } from '../icons-pack'
import { contactList } from '@/data/contacts.data'

export const Contacts = () => {
  return (
    <section className='section'>
      <div className='container'>
        <h2 className='heading'>Контакти</h2>

        <div className='xl:border xl:border-primary-light xl:rounded-[30px] xl:p-16'>
          <div className='flex gap-7 md:mb-8 xl:gap-[83px] xl:justify-between'>
            <ul className='grid grid-cols-2 gap-y-8 gap-x-[43.5px] md:w-[156px] md:grid-cols-1 md:gap-14 xl:w-[178px] xl:gap-[46px]'>
              {contactList.map(item => (
                <li
                  key={item.label}
                  className='space-y-[7px] md:space-y-2'
                >
                  <h3 className='flex items-center gap-2 uppercase text-primary-dark pb-2 border-b border-b-primary-light text-sm/[22.4px] font-bold text-nowrap md:pb-2.5 md:text-sm/[18.2px] md:text-primary-light md:gap-2.5 md:font-medium xl:text-base/[20.8px]'>
                    {item.icon}
                    <span>{item.label}</span>
                  </h3>

                  <p className='h-[34px] text-[13px]/[16.9px] md:text-sm/[18.2px] md:h-9 xl:h-[38px] xl:text-base/[19.2px]'>
                    {item.label === 'Instagram' ? (
                      <span>
                        {item.value} <br />в{' '}
                        <a
                          href='https://www.instagram.com/la_pepito.kyiv/'
                          target='_blank'
                          rel='noopener noreferrer'
                          className='font-medium text-primary transition-colors duration-300 hover:text-primary-light'
                        >
                          Instagram
                        </a>
                      </span>
                    ) : (
                      <span>{item.value}</span>
                    )}
                  </p>
                </li>
              ))}
            </ul>
            <Image
              src={mapImgTablet}
              alt='Google map'
              height={460}
              width={530}
              className='hidden border border-primary-light/50 rounded-xl md:block xl:hidden'
            />
            <Image
              src={mapImgDesktop}
              alt='Google map'
              height={493}
              width={891}
              className='hidden border border-primary-light/50 rounded-xl xl:block'
            />
          </div>
          <a
            href='https://www.google.com/maps/dir//pasta+la+pepito,+Esplanadna+St,+34%2F2,+Kyiv,+02000/@50.4339733,30.5202255,15.15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x40d4cf696c1d8391:0xc1feb24c84046fe9!2m2!1d30.52036!2d50.43635?entry=ttu'
            target='_blank'
            rel='noopener noreferrer'
            className='hidden items-center gap-1 text-sm/[18.2px] text-primary justify-end transition-colors duration-300 hover:text-primary-light md:flex xl:text-base/[20.8px]'
          >
            <LinkIcon />
            <span className='text-black'>Побудувати маршрут</span>
          </a>
        </div>
      </div>
    </section>
  )
}
