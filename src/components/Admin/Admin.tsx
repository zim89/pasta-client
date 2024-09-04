'use client'

import { QueryClient } from '@tanstack/react-query'
import {
  Admin,
  Edit,
  EditGuesser,
  Layout,
  ListGuesser,
  Resource,
  Show
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
import { DishDetails } from '../pages/dish-details'
import { IngredientList } from '../pages/ingredients-list'
import { EditIngredient } from '../pages/ingredients-list/EditIngredient'
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
      queryClient={
        new QueryClient({
          defaultOptions: {
            queries: {
              refetchOnWindowFocus: false
            }
          }
        })
      }
    >
      <Resource
        name='/main-page'
        icon={HomeIcon}
        intent='route'
        options={{
          label: 'Головна сторінка'
        }}
        list={MainPage}
        edit={
          <Edit resource='/main-page'>
            <p>Hello</p>
          </Edit>
        }
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
        show={
          <Show>
            <DishDetails />
          </Show>
        }
      />
      <Resource
        name='ingredient'
        icon={PepperIcon}
        options={{
          label: 'Інгредієнти'
        }}
        list={<IngredientList />}
        edit={<EditIngredient />}
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
