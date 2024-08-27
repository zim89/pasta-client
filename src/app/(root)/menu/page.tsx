import Image from 'next/image'
import { PageHeader } from '@/components/pageHeader'
import parsley from '@/assets/images/parsley.png'
import { MenuList } from './ui/MenuList'

export default function page() {
  return (
    <div className='container'>
      <div className='md:mt-6 xl:mt-[3.125rem]'>
        <PageHeader
          breadcrumbs={[{ label: 'Головна', href: '/' }, { label: 'Меню' }]}
          title='Наше меню'
          rightSection={
            <Image
              src={parsley}
              alt=''
              width={91.48}
              height={81.05}
              className='hidden xl:block object-contain rotate-[-15deg]'
              style={{
                transform: 'rotateY(180deg)'
              }}
            />
          }
        />
      </div>
      <MenuList />
    </div>
  )
}
