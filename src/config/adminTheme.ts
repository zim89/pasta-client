import { deepmerge } from '@mui/utils'
import { defaultTheme } from 'react-admin'

export const theme = deepmerge(defaultTheme, {
  typography: {
    fontFamily: '__Inter_bc20db, __Inter_Fallback_bc20db'
  },
  components: {
    RaAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#047585'
        }
      }
    },
    RaSidebar: {
      styleOverrides: {
        root: {
          borderRight: '1px solid #D3EDEE',
          backgroundColor: '#F2F6F6',
          height: '100vh'
        }
      }
    }
  }
})
