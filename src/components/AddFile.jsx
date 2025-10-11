import { useRef, useState, useEffect } from "react";
import { AddFileIcon } from "../assets/icons/AddFileIcon";
import { InputField } from "./customFormFields/InputField";
import toast from "react-hot-toast";
import { X } from "lucide-react";

export const AddFile = ({
  title,
  description,
  maxFiles = 4,
  maxFileSize = 10 * 1024 * 1024, // 10MB
  allowedTypes = ["image/jpeg", "image/png"],
  onFilesChange = () => {},
  extendedStyles = "",
  name,
  children,
}) => {
  const fileUploadRef = useRef(null);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [previewImages, setPreviewImages] = useState([]);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);

    const validFiles = files.filter((file) => {
      const isValidType = allowedTypes.includes(file.type);
      const isValidSize = file.size <= maxFileSize;

      if (!isValidType)
        toast.error(`${file.name} has an unsupported file type.`);
      if (!isValidSize)
        toast.error(`${file.name} exceeds ${maxFileSize / 1024 / 1024}MB limit.`);

      return isValidType && isValidSize;
    });

    const allFiles = [...selectedFiles, ...validFiles];

    if (allFiles.length > maxFiles) {
      toast.error(`You can only upload up to ${maxFiles} files.`);
      return;
    }

    const newPreviews = validFiles.map((file) => URL.createObjectURL(file));

    setSelectedFiles(allFiles);
    setPreviewImages(allFiles.map((file) => URL.createObjectURL(file)));
  };

  const handleClickUpload = () => fileUploadRef.current?.click();


  const handleDeleteImage = (index) => {
    const updatedFiles = selectedFiles.filter((_, i) => i !== index);
    const updatedPreviews = previewImages.filter((_, i) => i !== index);

    setSelectedFiles(updatedFiles);
    setPreviewImages(updatedPreviews);
    onFilesChange(updatedFiles);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full mb-8">
      {/* Title + Description */}
      <div className="mb-8 text-center">
        <h4
          className={`${extendedStyles} text-neutral-950 text-base font-medium lg:text-lg`}
        >
          {title}
        </h4>
        <p
          className={`${extendedStyles} mb-4 text-xs font-medium text-neutral-700`}
        >
          {description}
        </p>
      </div>

      {/* Preview Section */}
      <div className="mb-8 relative w-full max-w-md flex flex-col items-center justify-center">
        {previewImages.length > 0 ? (
          <div
            className={`grid gap-4 ${
              previewImages.length > 2 ? "grid-cols-2" : "grid-cols-1"
            } justify-center items-center mr-8`}
          >
            {previewImages.map((src, index) => (
              <div key={index} className="relative">
                <img
                  src={src}
                  alt={`preview-${index}`}
                  className="w-[171px] h-[123px] object-cover rounded-md shadow-md"
                />
                <button
                  type="button"
                  onClick={() => handleDeleteImage(index)}
                  className="absolute top-1 right-1 bg-white/70 hover:bg-white text-red-600 rounded-full p-[3px] shadow-md transition-all"
                >
                  <X size={14} />
                </button>
              </div>
            ))}
          </div>
        ) : (
          // Centered Add Icon (no preview)
          <AddFileIcon
            onClick={handleClickUpload}
            className="w-[56px] h-[56px] cursor-pointer hover:scale-105 transition-transform"
          />
        )}

        {/* Right-Aligned Add Icon (if previews exist) */}
        {previewImages.length > 0 && (
          <div className="absolute top-1/2 -translate-y-1/2 right-0 flex flex-col items-center">
            <AddFileIcon
              onClick={handleClickUpload}
              className="w-[50px] h-[50px] cursor-pointer hover:scale-105 transition-transform"
            />
          </div>
        )}

        {/* Upload Photos Button (only visible if no previews) */}
        {previewImages.length === 0 && (
          <button
            type="button"
            onClick={handleClickUpload}
            className="bg-primary-100 text-neutral-950 rounded-lg p-1.5 text-[10px] font-medium"
          >
            Upload Photos
          </button>
        )}
      </div>

      {/* Hidden File Input */}
      <InputField
        type="file"
        name={name}
        accept={allowedTypes.join(",")}
        multiple={maxFiles > 1}
        inputRef={fileUploadRef}
        containerStyles="hidden"
        inputTextStyles="hidden"
        onChange={handleFileChange}
      />

      {children}
    </div>
  );
};
