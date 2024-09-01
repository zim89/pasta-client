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
        'select-none whitespace-nowrap rounded-[30px] border border-black border-opacity-20 px-5 py-3 font-normal text-black xl:px-10',
        className
      )}
      type='button'
      onClick={onClick}
    >
      {translateCategory(label)}
    </Button>
  )
}
