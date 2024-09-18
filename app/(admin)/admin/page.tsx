import dynamic from 'next/dynamic'

// React Admin is designed as Single Page Application, so it needs to be prevented from being rendered on server-side
const AdminLayout = dynamic(() => import('@/app/layouts/admin-layout'), {
  ssr: false
})

export default function Page() {
  return <AdminLayout />
}
