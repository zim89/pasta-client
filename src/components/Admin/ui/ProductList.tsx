import { Datagrid, ImageField, List, TextField } from 'react-admin'

export const ProductList = () => {
  return (
    <List>
      <Datagrid>
        <TextField
          source='id'
          cellClassName='size-4'
          sortable={false}
          label='ID'
        />
        <ImageField
          source='image'
          cellClassName='size-8 object-contain'
          sortable={false}
          label='Фото'
        />
        <TextField
          source='title'
          label='Назва'
        />
        <TextField
          source='type'
          sortable={false}
          label='Тип'
        />
        <TextField
          source='composition'
          sortable={false}
          label='Композиція'
        />
        <TextField
          source='price'
          label='Ціна'
        />
        <TextField
          source='weight'
          sortable={false}
          label='Вага'
        />
        <TextField
          source='volume'
          sortable={false}
          label='Обсяг'
        />
      </Datagrid>
    </List>
  )
}
