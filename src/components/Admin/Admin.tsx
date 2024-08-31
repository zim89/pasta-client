'use client'

import {
  Admin,
  Edit,
  EditGuesser,
  Layout,
  ListGuesser,
  Resource
} from 'react-admin'
import { theme } from '@/config/adminTheme'
import { authProvider } from '@/config/authProvider'
import { dataProvider } from '@/config/dataProvider'
import { AdminAppBar } from '../AdminAppBar'
import {
  HomeIcon,
  MenuInstagramIcon,
  PastaIcon,
  PepperIcon
} from '../icons-pack'
import { EditProduct } from './ui/EditProduct'
import { MainPage } from './ui/MainPage'
import { ProductList } from './ui/ProductList'

const CustomLayout = ({ children }: { children: React.ReactNode }) => {
  return <Layout appBar={AdminAppBar}>{children}</Layout>
}

export default function AdminPage() {
  return (
    <Admin
      dataProvider={dataProvider}
      authProvider={authProvider}
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
        list={MainPage}
      />
      <Resource
        name='dish'
        options={{
          label: 'Страви'
        }}
        icon={PastaIcon}
        list={<ProductList />}
        edit={
          <Edit>
            <EditProduct />
          </Edit>
        }
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
