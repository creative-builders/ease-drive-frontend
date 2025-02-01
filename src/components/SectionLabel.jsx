
const SectionLabel = ({
    title,
    bgColor ="bg-green-100",
    extendeStyles
}) => {
  return (
    <h4 className={`${bgColor} ${extendeStyles} inline-block mb-6 font-semibold text-green-300 text-xs lg:text-base rounded-2xl px-4 py-2`}>
     {title}
    </h4>
  )
}

export default SectionLabel