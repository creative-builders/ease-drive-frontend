
const SectionLabel = ({
    title,
    bgColor,
    extendeStyles,
    className = ""
}) => {
  return (
    <h4 className={`${bgColor} ${extendeStyles} ${className} inline-block mb-6 font-semibold  
    max-990:text-[12px] lg:text-[18px] rounded-[100px] px-4 py-2`}>
     {title}
    </h4>
  )
}

export default SectionLabel