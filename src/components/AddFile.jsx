import { useRef } from "react"
import { AddFileIcon } from "../assets/icons/AddFileIcon"
import { InputField } from "./customFormFields/InputField"




export const AddFile = ({
    title,
    description,
    maxFiles,
    minFiles,
    maxFileSize,
    extendedStyles,
    children
}) => {
    const fileUploadRef = useRef(null)
    return(
    <div>
         <div className="mb-8">
          <h4 className={`${extendedStyles} text-neutral-950 text-base font-medium lg:text-lg`}>{title}</h4>
          <p className={`${extendedStyles} mb-4 text-xs font-medium text-neutral-700`}>{description}</p>
         </div>
         <div className="flex flex-col justify-center items-center w-full mb-8">
        <AddFileIcon 
         onClick={() => fileUploadRef.current.click()}
         className="w-[56px] h-[56px] cursor-pointer"/>
         <button
         type="button"
         onClick={() => fileUploadRef.current.click()}
         className="bg-primary-100 text-neutral-950 rounded-lg p-1.5 text-[10px] font-medium"
         >
         Upload Photos
         </button>
         </div>

         {/* file input field */}
         <InputField
          type="file"
          accept={"image/*"}
          multiple
          inputRef={fileUploadRef}
          containerStyles={"hidden"}
          inputTextStyles={"hidden"}
          onChange={() => {

          }}
          />
          {/* <InputField
              type="file"
              accept="image/*"
              multiple
              name="vehiclePhotos"
              inputRef={documentUploadRef}
              containerStyles={"hidden"}
              inputTextStyles={"hidden"}
              onChange={handleDocumentsChange}
            /> */}
        { children }
    </div>
    )
}