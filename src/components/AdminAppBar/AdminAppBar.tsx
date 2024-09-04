import { AppBar } from 'react-admin'
import { OptionsIcon } from '../icons-pack'
import { Button } from '../ui/button'

export const AdminAppBar = () => (
  <AppBar>
    <p className='mr-auto'>Pasta La Pepito Admin</p>
    <Button>
      <OptionsIcon />
    </Button>
  </AppBar>
)
