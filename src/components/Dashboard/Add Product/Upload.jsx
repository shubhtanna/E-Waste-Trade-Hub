import { useEffect, useRef, useState } from "react"
import { useDropzone } from "react-dropzone"
import { FiUploadCloud } from "react-icons/fi"
import { useSelector } from "react-redux"

import "video-react/dist/video-react.css"
import { Player } from "video-react"
import { useTranslation } from "react-i18next"

export default function Upload({
  name,
  label,
  register,
  setValue,
  errors,
  video = false,
  viewData = null,
  editData = null,
}) {
  const { product } = useSelector((state) => state.product)
  const [selectedFile, setSelectedFile] = useState(null)
  const [previewSource, setPreviewSource] = useState(
    viewData ? viewData : editData ? editData : ""
  )

  const { t } = useTranslation();
  const inputRef = useRef(null)

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0]
    if (file) {
      previewFile(file)
      setSelectedFile(file)
    }
  }

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: !video
      ? { "image/*": [".jpeg", ".jpg", ".png"] }
      : { "video/*": [".mp4"] },
    onDrop,
  })

  const previewFile = (file) => {
    // console.log(file)
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = () => {
      setPreviewSource(reader.result)
    }
  }

  useEffect(() => {
    register(name, { required: true })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [register])

  useEffect(() => {
    setValue(name, selectedFile)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedFile, setValue])

  return (
    <div className="flex flex-col space-y-2">
      <label className="text-sm text-[#174B3A] font-roboto font-semibold text-[28px]" htmlFor={name}>
        {label} {!viewData && <sup className=" text-pink-600">*</sup>}
      </label>
      <div
        className={`${isDragActive ? "bg-[#499F68] opacity-50" : "bg-[#b7dec5]"
          } flex min-h-[250px] cursor-pointer items-center justify-center rounded-md border-2 border-dotted border-[#277158]`}
      >
        {previewSource ? (
          <div className="flex w-full flex-col p-6">
            {!video ? (
              <img
                src={previewSource}
                alt="Preview"
                className="h-full w-full rounded-md object-cover"
              />
            ) : (
              <Player aspectRatio="16:9" playsInline src={previewSource} />
            )}
            {!viewData && (
              <button
                type="button"
                onClick={() => {
                  setPreviewSource("")
                  setSelectedFile(null)
                  setValue(name, null)
                }}
                className="mt-3 text-[#F19A3E] underline"
              >
                {t("Cancel")}
              </button>
            )}
          </div>
        ) : (
          <div
            className="flex w-full flex-col items-center p-6"
            {...getRootProps()}
          >
            <input {...getInputProps()} ref={inputRef} />
            <div className="grid aspect-square w-14 place-items-center rounded-full bg-pure-greys-800">
              <FiUploadCloud className="text-2xl text-yellow-600" />
            </div>
            <p className="mt-2 max-w-[200px] text-center text-sm text-black">
              {t("Drag and drop an")} {!video ? "image" : "video"}, {t("or click to")}{" "}
              <span className="font-semibold text-yellow-600">Browse</span> a
              {t("file")}
            </p>
            <ul className="mt-10 flex list-disc justify-between space-x-12 text-center  text-xs text-black">
              <li>{t("Aspect ratio 16:9")}</li>
              <li>{t("Recommended size 1024x576")}</li>
            </ul>
          </div>
        )}
      </div>
      {errors[name] && (
        <span className="ml-2 text-xs tracking-wide text-pink-200">
          {label} {t("is required")}
        </span>
      )}
    </div>
  )
}

