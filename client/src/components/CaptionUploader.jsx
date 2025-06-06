import Input from "./Input";
import FileUploader from "./FileUploader";
import Selector from "./Selector";
import { useCallback, useState } from "react";
import { generatePrompt } from "@/api/generatePrompt";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import useGenerateCaption from "@/hooks/useGenerateCaption";

const CaptionUploader = ({ setCaptionLogs }) => {
  const [uploadedFile, setUploadedFile] = useState(null);
  const [prompt, setPrompt] = useState("");
  const [tone, setTone] = useState("fun");

  const { mutate, isPending } = useGenerateCaption(setCaptionLogs);
  const handleToneChange = useCallback((tone) => {
    setTone(tone);
  }, []);

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      if (prompt.trim() === "" && !uploadedFile) {
        toast.info("Please provide either a prompt or upload an image. 🥺");
        return;
      }

      mutate({ prompt, tone, uploadedFile });
    },
    [prompt, tone, uploadedFile]
  );

  return (
    <form
      onSubmit={handleSubmit}
      className="min-h-[10rem] m-auto flex flex-col gap-[1rem]"
    >
      <div className="flex h-fit flex-col lg:flex-row items-center justify-between gap-[1rem]">
        <FileUploader
          uploadedFile={uploadedFile}
          setUploadedFile={setUploadedFile}
        />
        <Selector handleToneChange={handleToneChange} />
      </div>
      <Input prompt={prompt} setPrompt={setPrompt} />
      <button
        disabled={prompt.trim() === "" && !uploadedFile}
        title="Generate captions"
        className="bg-gradient-to-r from-purple-600 to-blue-700 text-white px-4 py-2 rounded-xl cursor-pointer will-change-[scale] transition-opacity ease-in-out duration-[0.5s] hover:opacity-[0.5]"
      >
        {isPending ? "Generating..." : "Generate Captions"}
      </button>
    </form>
  );
};

export default CaptionUploader;
