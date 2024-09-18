import { LinkIcon } from '../../shared/ui/icons-pack'
import { contactList } from '@/shared/data/contacts.data'

export const Contacts = () => {
  return (
    <section className='section'>
      <div className='container'>
        <h2 className='heading'>Контакти</h2>

        <div className='xl:rounded-[30px] xl:border xl:border-primary-light xl:p-16'>
          <div className='flex flex-col gap-7 md:flex-row xl:mb-8 xl:justify-between xl:gap-[83px]'>
            <ul className='grid grid-cols-2 gap-x-[43.5px] gap-y-8 md:w-[156px] md:grid-cols-1 md:gap-14 xl:w-[178px] xl:gap-[46px]'>
              {contactList.map(item => (
                <li
                  key={item.label}
                  className='space-y-[7px] md:space-y-2'
                >
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
              className=' max-w-full rounded-xl border border-primary-light/50 outline-none md:max-h-[460px] md:max-w-[530px] xl:max-h-[493px] xl:max-w-[893px]'
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
            ></iframe>
          </div>
          <a
            href='https://www.google.com/maps/dir//pasta+la+pepito,+Esplanadna+St,+34%2F2,+Kyiv,+02000/@50.4339733,30.5202255,15.15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x40d4cf696c1d8391:0xc1feb24c84046fe9!2m2!1d30.52036!2d50.43635?entry=ttu'
            target='_blank'
            rel='noopener noreferrer'
            className='hidden items-center justify-end gap-1 text-sm/[18.2px] text-primary transition-colors duration-300 hover:text-primary-light md:flex xl:text-base/[20.8px]'
          >
            <LinkIcon />
            <span className='text-black'>Побудувати маршрут</span>
          </a>
        </div>
      </div>
    </section>
  )
}
