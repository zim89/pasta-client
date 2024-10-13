type Props = {
  text: string
}

export const WithRequiredMark = ({ text }: Props) => {
  return (
    <>
      {text}
      <span className='text-danger ml-[2px]'>*</span>
    </>
  )
}
