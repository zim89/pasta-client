import { OptionsIcon } from '@/shared/ui/icons-pack'
import { AppBar } from 'react-admin'

import { Button } from '@/shared/ui/common/button'

export const AdminAppBar = () => (
  <AppBar>
    <p className='mr-auto'>Pasta La Pepito Admin</p>
    <Button>
      <OptionsIcon />
    </Button>
  </AppBar>
)
