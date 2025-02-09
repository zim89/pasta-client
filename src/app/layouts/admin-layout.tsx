'use client'

import { useContext } from 'react'
import { ModalContext } from '@/shared/context/admin-change-password-modal'
import {
  AdvantageIcon,
  CategoryIcon,
  MenuInstagramIcon,
  OrderIcon,
  PastaIcon,
  PepperIcon,
} from '@/shared/ui/icons-pack'
import { QueryClient } from '@tanstack/react-query'
import { Admin, Edit, Layout, Resource, Show } from 'react-admin'

import { authProviderWithRefresh } from '@/app/providers/auth-provider'
import { dataProviderWithRefresh } from '@/app/providers/data-provider'
import { theme } from '@/app/ui/admin-theme'
import { EditAdvantage } from '@/views/admin/advantages/edit.page'
import { AdvantagesList } from '@/views/admin/advantages/list.page'
import { EditCategory } from '@/views/admin/categories/edit.page'
import { CategoriesList } from '@/views/admin/categories/list.page'
import { EditProduct } from '@/views/admin/dishes/ui/edit.page'
import { ProductList } from '@/views/admin/dishes/ui/list.page'
import { EditIngredient } from '@/views/admin/ingredients/edit.page'
import { IngredientList } from '@/views/admin/ingredients/list.page'
import { ShowOrder } from '@/views/admin/orders/id.page'
import { OrdersList } from '@/views/admin/orders/list.page'
import { EditPost } from '@/views/admin/posts/edit.page'
import { PostsList } from '@/views/admin/posts/list.page'
import { ChangePasswordModal } from '@/features/admin/change-password-modal'
import { AdminAppBar } from '@/shared/ui/admin/admin-bar'

import '@/shared/lib/utils/admin-auth-provider-funcs'

const CustomLayout = ({ children }: { children: React.ReactNode }) => {
  return <Layout appBar={AdminAppBar}>{children}</Layout>
}

export default function AdminLayout() {
  const { opened, handleChange } = useContext(ModalContext)

  return (
    <>
      <ChangePasswordModal open={opened} onOpenChange={handleChange} />
      <Admin
        dataProvider={dataProviderWithRefresh}
        authProvider={authProviderWithRefresh}
        theme={theme}
        layout={CustomLayout}
        queryClient={
          new QueryClient({
            defaultOptions: {
              queries: {
                refetchOnWindowFocus: false,
              },
            },
          })
        }
      >
        <Resource
          name='our-advantages'
          icon={AdvantageIcon}
          options={{
            label: 'Переваги',
          }}
          list={AdvantagesList}
          edit={EditAdvantage}
        />
        <Resource
          name='dish'
          options={{
            label: 'Страви',
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
            label: 'Інгредієнти',
          }}
          list={IngredientList}
          edit={EditIngredient}
        />
        <Resource
          name='order'
          icon={OrderIcon}
          hasEdit={false}
          options={{
            label: 'Замовлення',
          }}
          list={OrdersList}
          show={
            <Show>
              <ShowOrder />
            </Show>
          }
        />
        <Resource
          name='insta-posts'
          icon={MenuInstagramIcon}
          options={{
            label: 'Пости',
          }}
          list={PostsList}
          edit={EditPost}
        />
        <Resource
          name='category'
          icon={CategoryIcon}
          options={{
            label: 'Категорії',
          }}
          list={CategoriesList}
          edit={EditCategory}
        />
      </Admin>
    </>
  )
}
