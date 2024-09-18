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
import { AdminAppBar } from '@/components/AdminAppBar'
import { authProvider } from '@/app/providers/auth-provider'
import { dataProvider } from '@/app/providers/data-provider'
import { theme } from '@/app/ui/admin-theme'
import {
  AdvantageIcon,
  MenuInstagramIcon,
  OrderIcon,
  PastaIcon,
  PepperIcon
} from '@/shared/ui/icons-pack'
import { EditAdvantage } from '@/views/admin/advantages/edit.page'
import { AdvantagesList } from '@/views/admin/advantages/list.page'
import { EditProduct } from '@/views/admin/dishes/edit.page'
import { ProductList } from '@/views/admin/dishes/list.page'
import { EditIngredient } from '@/views/admin/ingredients/edit.page'
import { IngredientList } from '@/views/admin/ingredients/list.page'
import { ShowOrder } from '@/views/admin/orders/id.page'
import { OrdersList } from '@/views/admin/orders/list.page'

const CustomLayout = ({ children }: { children: React.ReactNode }) => {
  return <Layout appBar={AdminAppBar}>{children}</Layout>
}

export default function AdminLayout() {
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
        name='our-advantages'
        icon={AdvantageIcon}
        options={{
          label: 'Переваги'
        }}
        list={AdvantagesList}
        edit={EditAdvantage}
      />
      <Resource
        name='dish'
        options={{
          label: 'Страви'
        }}
        icon={PastaIcon}
        list={ProductList}
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
        list={IngredientList}
        edit={EditIngredient}
      />
      <Resource
        name='order'
        icon={OrderIcon}
        hasEdit={false}
        options={{
          label: 'Замовлення'
        }}
        list={OrdersList}
        show={
          <Show>
            <ShowOrder />
          </Show>
        }
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
