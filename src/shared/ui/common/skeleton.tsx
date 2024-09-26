import { cn } from '@/shared/lib/utils/cn-merge'

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('animate-pulse rounded-md bg-gray-300', className)}
      {...props}
    />
  )
}

export { Skeleton }
