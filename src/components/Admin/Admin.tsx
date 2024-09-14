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
  AdvantageIcon,
  MenuInstagramIcon,
  OrderIcon,
  PastaIcon,
  PepperIcon
} from '../icons-pack'
import { AdvantagesList } from '../pages/advantages/AdvantagesList'
import { EditAdvantageForm } from '../pages/advantages/EditAdvantageForm'
import { ProductList } from '../pages/dishes/DishesList'
import { EditProduct } from '../pages/dishes/EditDish'
import { IngredientList } from '../pages/ingredients'
import { EditIngredient } from '../pages/ingredients/EditIngredient'
import { OrdersList } from '../pages/orders/OrdersList'
import { ShowOrder } from '../pages/orders/ShowOrder'

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
        name='our-advantages'
        icon={AdvantageIcon}
        options={{
          label: 'Переваги'
        }}
        list={AdvantagesList}
        edit={EditAdvantageForm}
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
        list={<IngredientList />}
        edit={<EditIngredient />}
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
