import type { SVGProps } from 'react'

export const PhoneIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M9.375 15.625H10.625M6.875 1.875H13.125C13.4565 1.875 13.7745 2.0067 14.0089 2.24112C14.2433 2.47554 14.375 2.79348 14.375 3.125V16.875C14.375 17.2065 14.2433 17.5245 14.0089 17.7589C13.7745 17.9933 13.4565 18.125 13.125 18.125H6.875C6.54348 18.125 6.22554 17.9933 5.99112 17.7589C5.7567 17.5245 5.625 17.2065 5.625 16.875V3.125C5.625 2.79348 5.7567 2.47554 5.99112 2.24112C6.22554 2.0067 6.54348 1.875 6.875 1.875Z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
