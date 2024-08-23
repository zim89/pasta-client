'use client'

import { Admin, EditGuesser, Layout, ListGuesser, Resource } from 'react-admin'
import { theme } from '@/config/adminTheme'
import { dataProvider } from '@/config/dataProvider'
import { AdminAppBar } from '../AdminAppBar'
import {
  HomeIcon,
  MenuInstagramIcon,
  PastaIcon,
  PepperIcon
} from '../icons-pack'

const CustomLayout = ({ children }: { children: React.ReactNode }) => {
  return <Layout appBar={AdminAppBar}>{children}</Layout>
}

export default function AdminPage() {
  return (
    <Admin
      dataProvider={dataProvider}
      theme={theme}
      layout={CustomLayout}
    >
      <Resource
        name='/main-page'
        icon={HomeIcon}
        intent='route'
        options={{
          label: 'Головна сторінка'
        }}
        list={() => <p className='p-4'>Головна сторінка</p>}
      />
      <Resource
        name='dish'
        options={{
          label: 'Страви'
        }}
        icon={PastaIcon}
        list={ListGuesser}
        edit={EditGuesser}
      />
      <Resource
        name='ingredient'
        icon={PepperIcon}
        options={{
          label: 'Інгредієнти'
        }}
        list={ListGuesser}
        edit={EditGuesser}
      />
      <Resource
        name='post'
        icon={MenuInstagramIcon}
        options={{
          label: 'Пости'
        }}
        list={ListGuesser}
        edit={EditGuesser}
      />
    </Admin>
  )
}
