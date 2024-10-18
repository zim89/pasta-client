import { DishDetailsPage } from '@/views/root/dish-details/dish-details-page'

export default function Page({ params }: { params: { slug: string } }) {
  return <DishDetailsPage slug={params.slug} />
}
