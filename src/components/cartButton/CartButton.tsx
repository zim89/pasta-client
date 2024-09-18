import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/shared/ui/common/sheet'

type Props = {
  children(trigger: typeof SheetTrigger): React.ReactNode
}

export default function CartButton({ children }: Props) {
  return (
    <Sheet>
      {children(SheetTrigger)}
      <SheetContent closeBtnClassName='w-[32px] h-[32px] mt-3'>
        <SheetHeader>
          <SheetTitle className='text-[26px] font-medium'>Кошик</SheetTitle>
          <SheetDescription>
            Ехх, як сумно бачити Ваш кошик пустим..
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}
