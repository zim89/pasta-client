import { OrderStoreProvider } from '@/entities/order/model/order-store-provider'

export default function Layout({ children }: { children: React.ReactNode }) {
  return <OrderStoreProvider>{children}</OrderStoreProvider>
}
