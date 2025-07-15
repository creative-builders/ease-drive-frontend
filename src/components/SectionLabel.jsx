
const SectionLabel = ({
    title,
    // bgColor ="bg-green-100",
    bgColor ="bg-accent-700",
    extendeStyles
}) => {
  return (
    <h4 className={`${bgColor} ${extendeStyles} inline-block mb-6 font-semibold text-blue-700 text-xs lg:text-base rounded-[100px] px-4 py-2`}>
     {title}
    </h4>
  )
}

export default SectionLabel