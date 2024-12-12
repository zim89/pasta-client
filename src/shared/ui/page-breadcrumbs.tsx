import { Fragment } from 'react'
import Link from 'next/link'

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/shared/ui/common/breadcrumb'

export const PageBreadcrumbs = ({
  crumbs,
}: {
  crumbs: { href?: string; label: string }[]
}) => {
  return (
    <div className='hidden md:block md:pb-5'>
      <Breadcrumb>
        <BreadcrumbList className='gap-1 text-sm/[18.2px] text-black'>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link
                href='/'
                className='opacity-50 transition-opacity duration-300 hover:opacity-100'
              >
                Головна
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          {crumbs.map(({ href, label }, index) => (
            <Fragment key={index}>
              <BreadcrumbSeparator>/</BreadcrumbSeparator>

              {href ? (
                <BreadcrumbItem className='opacity-50 transition-opacity duration-300 hover:opacity-100'>
                  <BreadcrumbLink asChild>
                    <Link href={href} className='capitalize'>
                      {label}
                    </Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
              ) : (
                <BreadcrumbItem>
                  <BreadcrumbLink className='capitalize'>
                    {label}
                  </BreadcrumbLink>
                </BreadcrumbItem>
              )}
            </Fragment>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  )
}
