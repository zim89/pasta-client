import { LinkIcon } from '../icons-pack'
import { contactList } from '@/data/contacts.data'

export const Contacts = () => {
  return (
    <section className='section'>
      <div className='container'>
        <h2 className='heading'>Контакти</h2>

        <div className='xl:border xl:border-primary-light xl:rounded-[30px] xl:p-16'>
          <div className='flex flex-col md:flex-row gap-7 xl:mb-8 xl:gap-[83px] xl:justify-between'>
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
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2541.2550409362175!2d30.517785076305785!3d50.436349971589486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf696c1d8391%3A0xc1feb24c84046fe9!2spasta%20la%20pepito!5e0!3m2!1suk!2sua!4v1720196368041!5m2!1suk!2sua'
              width='891'
              height='493'
              allowFullScreen={false}
              className=' outline-none border max-w-full md:max-w-[530px] md:max-h-[460px] xl:max-h-[493px] xl:max-w-[893px] border-primary-light/50 rounded-xl'
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
            ></iframe>
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
