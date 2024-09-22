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
              <Link href='/' className='opacity-50'>
                Головна
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          {crumbs.map(({ href, label }, index) => (
            <Fragment key={index}>
              <BreadcrumbSeparator>/</BreadcrumbSeparator>

              {href ? (
                <BreadcrumbItem className='opacity-50'>
                  <BreadcrumbLink asChild>
                    <Link href={href}>{label}</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
              ) : (
                <BreadcrumbItem>
                  <BreadcrumbLink>{label}</BreadcrumbLink>
                </BreadcrumbItem>
              )}
            </Fragment>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  )
}
