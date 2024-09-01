import { Fragment } from 'react'
import Link from 'next/link'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb'

export const PageBreadcrumb = ({
  crumbs
}: {
  crumbs: { href: string; label: string }[]
}) => {
  return (
    <div className='hidden md:block md:pb-5'>
      <Breadcrumb>
        <BreadcrumbList className='gap-1 text-sm/[18.2px] text-black'>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link
                href='/'
                className='opacity-50'
              >
                Головна
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          {crumbs.map(({ href, label }, index) => (
            <Fragment key={index}>
              <BreadcrumbSeparator>/</BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href={href}>{label}</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
            </Fragment>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  )
}
