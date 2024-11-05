import Image from 'next/image'
import { ChevronDown, Trash2 } from 'lucide-react'
import { nanoid } from 'nanoid'

import { EditIngredient } from '@/features/root/add-ingredient'
import { useCartStore, type CartItem } from '@/entities/cart'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/shared/ui/common/accordion'
import img_placeholder from '@/shared/assets/images/placeholders/img-square.png'

export const CartItemEditable = ({ item }: { item: CartItem }) => {
  const { removeFromCart, incrementItem, decrementItem } = useCartStore(
    state => state,
  )

  const onDelete = () => {
    removeFromCart(item.id)
  }

  return (
    <div className='border-b border-primary pb-4'>
      <div className='relative flex items-start gap-5'>
        <button
          onClick={onDelete}
          className='absolute bottom-0 left-0 flex size-10 items-center justify-center text-gray-700 transition-colors duration-300 hover:text-primary-light'
        >
          <Trash2 />
        </button>
        <div className='relative size-20 overflow-hidden rounded-xl'>
          <Image
            src={item.dish.image ? item.dish.image : img_placeholder}
            alt={item.dish.title}
            fill
            sizes='100%'
            className='object-cover'
          />
        </div>

        <div className='flex-1 space-y-4'>
          <h3 className='text-lg/[23.4px] font-medium'>{item.dish.title}</h3>
          <div className='space-y-1 rounded-xl bg-green-100 p-4'>
            <p className='text-base/[20.8px] font-medium'>
              Додаткові інгредієнти:
            </p>

            <div className='flex justify-end'>
              <EditIngredient item={item} />
            </div>

            <div className='text-sm/[18.2px]'>
              {item.ingredients.length === 0 && <p>немає</p>}

              {item.ingredients.length > 3 ? (
                <div>
                  <ul className='space-y-1.5'>
                    {item.ingredients.slice(0, 3).map(i => (
                      <li
                        key={i.id}
                      >{`${i.name} - ${i.count} (${(i.count * i.price).toFixed(2)} грн.)`}</li>
                    ))}
                  </ul>
                  <Accordion type='single' collapsible>
                    <AccordionItem value={nanoid()} className='border-0'>
                      <AccordionContent className='p-0 pt-1.5'>
                        <ul className='space-y-1.5'>
                          {item.ingredients.slice(3).map(i => (
                            <li
                              key={i.id}
                            >{`${i.name} - ${i.count} (${(i.count * i.price).toFixed(2)} грн.)`}</li>
                          ))}
                        </ul>
                      </AccordionContent>

                      <div className='mt-3 flex justify-end'>
                        <AccordionTrigger className='group flex items-center gap-1 p-0 py-[5.5px] text-[13px]/[16.9px] text-primary-light transition-colors duration-300 hover:text-primary hover:no-underline'>
                          <span className='group-data-[state=open]:hidden'>
                            Показати усі
                          </span>
                          <span className='group-data-[state=closed]:hidden'>
                            Приховати
                          </span>
                          <ChevronDown className='size-5 group-data-[state=open]:rotate-180' />
                        </AccordionTrigger>
                      </div>
                    </AccordionItem>
                  </Accordion>
                </div>
              ) : (
                <ul className='space-y-1.5'>
                  {item.ingredients.map(i => (
                    <li
                      key={i.id}
                    >{`${i.name} - ${i.count} (${(i.count * i.price).toFixed(2)}₴)`}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          <div className='flex items-center justify-between pr-2'>
            <div className='flex w-[136px] justify-center gap-2'>
              <button
                disabled={item.count === 1}
                onClick={() => decrementItem(item.id)}
                className='flex size-10 items-center justify-center rounded-md border border-black/5 text-[26px]/[31.47px] font-medium text-gray-700 transition-colors duration-300 hover:text-black'
              >
                -
              </button>
              <span className='flex size-10 items-center justify-center rounded-md border border-black/5 text-lg/[23.4px]'>
                {item.count}
              </span>
              <button
                onClick={() => incrementItem(item.id)}
                className='flex size-10 items-center justify-center rounded-md border border-black/5 text-[26px]/[31.47px] font-medium text-gray-700 transition-colors duration-300 hover:text-black'
              >
                +
              </button>
            </div>
            <p className='text-end text-xl/[26px] font-medium'>{item.price}₴</p>
          </div>
        </div>
      </div>
    </div>
  )
}
