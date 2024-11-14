import type { SVGProps } from 'react'

export const ArrowLeftIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width='25'
      height='24'
      viewBox='0 0 25 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M6.5 8L2.5 12M2.5 12L6.5 16M2.5 12H22.5'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
