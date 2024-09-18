import { AppBar } from 'react-admin'
import { Button } from '../../shared/ui/common/button'
import { OptionsIcon } from '../../shared/ui/icons-pack'

export const AdminAppBar = () => (
  <AppBar>
    <p className='mr-auto'>Pasta La Pepito Admin</p>
    <Button>
      <OptionsIcon />
    </Button>
  </AppBar>
)
