import { LinkIcon } from '@/shared/ui'

import { CONTACTS_DATA } from '@/shared/data'

export const Contacts = () => {
  return (
    <section className='section pt-10 md:pt-[72px] xl:pt-24'>
      <div className='container'>
        <h2>Контакти</h2>

        <div className='space-y-5 md:space-y-8 xl:space-y-6'>
          <div className='flex flex-col gap-5 md:flex-row md:gap-7 xl:gap-[83px]'>
            <ul className='grid grid-cols-2 gap-x-[43.5px] gap-y-8 md:w-[156px] md:grid-cols-1 md:justify-between xl:w-[178px]'>
              {CONTACTS_DATA.map(item => (
                <li key={item.label} className='space-y-[7px] md:space-y-2'>
                  <h3 className='flex items-center gap-2 text-nowrap border-b border-b-primary-light pb-2 text-sm/[22.4px] font-bold uppercase text-primary-dark md:gap-2.5 md:pb-2.5 md:text-sm/[18.2px] md:font-medium md:text-primary-light xl:text-base/[20.8px]'>
                    {item.icon}
                    <span>{item.label}</span>
                  </h3>

                  <p className='h-[34px] text-[13px]/[16.9px] md:h-9 md:text-sm/[18.2px] xl:h-[38px] xl:text-base/[19.2px]'>
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
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2541.2550409362175!2d30.517785076305785!3d50.436349971589486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf696c1d8391%3A0xc1feb24c84046fe9!2spasta%20la%20pepito!5e0!3m2!1suk!2sua!4v1720196368041!5m2!1suk!2sua'
              width='891'
              height='493'
              allowFullScreen={false}
              className='h-[220px] w-full rounded-xl border border-primary-light/70 outline-none md:h-[460px] md:flex-1 xl:h-[493px]'
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
            />
          </div>
          <a
            href='https://www.google.com/maps/dir//pasta+la+pepito,+Esplanadna+St,+34%2F2,+Kyiv,+02000/@50.4339733,30.5202255,15.15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x40d4cf696c1d8391:0xc1feb24c84046fe9!2m2!1d30.52036!2d50.43635?entry=ttu'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center justify-center gap-1 text-sm/[18.2px] text-primary transition-colors duration-300 hover:text-primary-light md:justify-end xl:text-base/[20.8px] xl:tracking-wide'
          >
            <span className='flex size-4 items-center justify-center md:size-6'>
              <LinkIcon />
            </span>

            <span className='text-black'>Побудувати маршрут</span>
          </a>
        </div>
      </div>
    </section>
  )
}
