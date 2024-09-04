import { ShowBase, useRecordContext } from 'react-admin'

export const DishDetails = () => {
  const dish = useRecordContext()
  if (!dish) return null

  console.log(dish)
  return (
    <ShowBase queryOptions={{ meta: { slug: dish.slug } }}>
      <p>Hello</p>
    </ShowBase>
  )
}
