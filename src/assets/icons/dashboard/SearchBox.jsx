import { SearchIcon } from '../SearchIcon'
import { InputField } from '../../../components/customFormFields/InputField'

export const SearchBox = () => {
  return (
      <div className="basis-[297px] lg:basis-[529px]">
          <InputField
            placeholder="Search..."
            name="search"
            type="text"
            rightIcon={SearchIcon}
            extendedStyles="lg:rounded-[18px]"
          />
   </div>
  )
}
