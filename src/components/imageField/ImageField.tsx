import Image from 'next/image'
import { useRecordContext } from 'react-admin'

export const ImageField = () => {
  const record = useRecordContext()

  console.log('Record dddddd: ', record)

  if (!record || !record['image']) return null

  return (
    <Image
      src={record['image']}
      width={34}
      height={34}
      alt=''
    />
  )
}
