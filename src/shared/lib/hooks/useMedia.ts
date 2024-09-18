import { useMediaQuery } from 'usehooks-ts'

export const useMedia = () => {
  const isMobileScreen = useMediaQuery('(max-width: 834px)')
  const isTabletScreen = useMediaQuery('(max-width: 1440px)')
  const isLaptopScreen = useMediaQuery('(min-width: 1440px)')

  return { isMobileScreen, isTabletScreen, isLaptopScreen }
}
