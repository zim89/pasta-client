import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { translateCategory } from '@/helpers/menu.helpers'

type Props = {
  label: string
  onClick: () => void
  className?: string
}
export const CategoryButton = ({ label, onClick, className = '' }: Props) => {
  return (
    <Button
      className={cn(
        'whitespace-nowrap select-none py-3 px-5 xl:px-10 font-normal text-black border border-black border-opacity-20 rounded-[30px]',
        className
      )}
      type='button'
      onClick={onClick}
    >
      {translateCategory(label)}
    </Button>
  )
}
