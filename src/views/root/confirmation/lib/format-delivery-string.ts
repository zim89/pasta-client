import { Order } from '@/entities/order'

export const formatDeliveryString = (address: Order['deliveryAdress']) => {
  return `${address.street}, ${address.buildingNumber}${
    address.flatNumber ? `, кв. ${address.flatNumber}` : ''
  }, м. Київ`
}
