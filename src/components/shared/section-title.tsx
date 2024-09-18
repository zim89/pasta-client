import { cn } from '@/shared/lib/utils/cn-merge'

export const SectionTitle = ({
  title,
  styles = ''
}: {
  title: string
  styles?: string
}) => {
  return (
    <h2
      className={cn(
        'mb-5 text-center text-[1.75rem]/[2.275rem] font-medium md:mb-8 md:text-start md:text-[2rem]/[2.6rem] xl:mb-16 xl:text-center',
        styles
      )}
    >
      {title}
    </h2>
  )
}
