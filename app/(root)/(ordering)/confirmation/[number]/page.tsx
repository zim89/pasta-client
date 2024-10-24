import { ConfirmationPage } from '@/views/root/confirmation/confirmation-page'

type Props = {
  params: { number: string }
}

export default function Page({ params }: Props) {
  return <ConfirmationPage orderNumber={params.number} />
}
