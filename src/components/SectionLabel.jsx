
const SectionLabel = ({
    title,
    bgColor,
    extendeStyles,
    className = ""
}) => {
  return (
    <h4 className={`${bgColor} ${extendeStyles} ${className} inline-block mb-6 font-semibold  text-xs lg:text-base rounded-[100px] px-4 py-2`}>
     {title}
    </h4>
  )
}

export default SectionLabel