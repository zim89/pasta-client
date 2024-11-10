type ShippingAddress = {
  street: string
  houseNumber: string
  appartmentNumber?: string
  entrance?: string
  story?: string
  intercomCode?: string
}

export const formatDeliveryString = (address: ShippingAddress) => {
  return `вул. ${address.street}, буд. ${address.houseNumber}${
    address.appartmentNumber ? `, кв. ${address.appartmentNumber}` : ','
  } ${address.entrance ? `, під. ${address.entrance}` : ''} ${address.story ? `, ${address.story} поверх` : ''} ${address.intercomCode ? `, код ${address.intercomCode},` : ''} м. Київ`
}
