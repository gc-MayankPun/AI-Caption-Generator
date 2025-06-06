import { memo, useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { IoCloudUploadOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { toast } from "react-toastify";

const FileUploader = memo(({ uploadedFile, setUploadedFile }) => {
  // const [uploadedFile, setUploadedFile] = useState(null);

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles?.[0];

    if (!file) {
      toast.error("Please choose images only! 🥹");
      return;
    }

    setUploadedFile(file);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [],
    },
  });

  return (
    <div
      className="border-[.1rem] border-[var(--secondary-text-color)] w-full h-[10rem] p-2 rounded-2xl flex flex-col justify-center items-center relative"
      {...getRootProps()}
    >
      {uploadedFile ? (
        <>
          <img
            src={URL.createObjectURL(uploadedFile)}
            alt="preview"
            className="w-auto h-full object-cover rounded-xl"
          />
          <span
            className="absolute top-2 right-2 text-xl cursor-pointer"
            onClick={() => {
              setUploadedFile(null);
            }}
          >
            <IoMdClose />
          </span>
        </>
      ) : (
        <>
          <IoCloudUploadOutline className="text-[4rem] text-[var(--secondary-text-color)]" />
          <input {...getInputProps()} />
          {isDragActive ? (
            <p>Drop the files here ...</p>
          ) : (
            <div className="text-center">
              <p>Upload an image</p>
              <p className="text-[var(--secondary-text-color)] text-[.8rem]">
                or drag and drop
              </p>
            </div>
          )}
        </>
      )}
    </div>
  );
});

export default FileUploader;
