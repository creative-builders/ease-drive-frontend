
const SectionLabel = ({
  title,
  bgColor,
  extendeStyles,
  className = ""
}) => {
  return (
    <h4 className={`${bgColor} ${extendeStyles} ${className} inline-block  font-semibold  
    max-990:text-xs lg:text-lg rounded-[100px] px-4 py-2`}>
      {title}
    </h4>
  )
}

export default SectionLabel