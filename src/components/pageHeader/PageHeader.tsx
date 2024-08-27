import { Fragment } from 'react'
import { ChevronLeft } from 'lucide-react'
import Link from 'next/link'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '../ui/breadcrumb'

type Props = {
  title: string
  breadcrumbs: {
    label: string
    href?: string
  }[]
  rightSection?: React.ReactNode
}

export const PageHeader = ({ breadcrumbs, title, rightSection }: Props) => {
  return (
    <>
      <Breadcrumb className='hidden md:block'>
        <BreadcrumbList>
          {breadcrumbs.map((crumb, index) => {
            return (
              <Fragment key={index}>
                <BreadcrumbItem key={crumb.label}>
                  {index === breadcrumbs.length - 1 ? (
                    <BreadcrumbPage>{crumb.label}</BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink
                      className='opacity-50'
                      href={crumb.href}
                    >
                      {crumb.label}
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>
                {index !== breadcrumbs.length - 1 && <BreadcrumbSeparator />}
              </Fragment>
            )
          })}
        </BreadcrumbList>
      </Breadcrumb>

      {/* Mobile breadcrumb */}
      <div
        className='my-8 md:mt-5 xl:mb-[60px] flex md:block justify-center items-center'
        data-testid='breadcrumb-mobile'
      >
        <Link
          href='/'
          className='mr-3 md:hidden'
          data-testid='breadcrumb-link-mobile'
        >
          <ChevronLeft size={24} />
        </Link>
        <div className='flex items-center justify-center'>
          <h1
            className='font-alegreya text-center text-[28px] md:text-4xl xl:text-[3.125rem]'
            data-testid='breadcrumb-title'
          >
            {title}
          </h1>
          {rightSection}
        </div>
      </div>
      {/* End Mobile breadcrumb */}
    </>
  )
}
