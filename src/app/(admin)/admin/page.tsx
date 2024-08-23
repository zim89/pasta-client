import dynamic from 'next/dynamic'

// React Admin is designed as Single Page Application, so it needs to be prevented from being rendered on server-side
const AdminPage = dynamic(() => import('@/components/Admin'), { ssr: false })

export default function Page() {
  return <AdminPage />
}
