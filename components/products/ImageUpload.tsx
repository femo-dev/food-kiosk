"use client";
import { CldUploadWidget } from "next-cloudinary";
import { TbPhotoPlus } from "react-icons/tb";
import { useState } from "react";
import Image from "next/image";

export default function ImageUpload() {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  return (
    <CldUploadWidget 
      uploadPreset="ml_default"
      options={{ maxFiles: 1 }}
      onSuccess={(result, { widget }) => {
        if (result.event === 'success') {
          widget.close();

          // @ts-ignore
          setImageUrl(result.info?.secure_url);
        }
      }}
    >
      {
        ({open}) => (
          <>
            <div className="space-y-2">
              <label className="text-slate-800">Product Image</label>
              <div 
                className="relative cursor-pointer hover:opacity-70 transition p-10 border-neutral-300 flex flex-col justify-center items-center gap-4 text-neutral-600 bg-slate-100"
                onClick={() => open()}
              >
                <TbPhotoPlus 
                  size={50}
                />
                <p className="text-lg font-semibold">Add Image</p>

                {imageUrl && (
                  <div 
                    className="absolute inset-0 w-full h-full">
                    <Image
                      fill
                      src={imageUrl}
                      alt="Product image"
                      style={{ objectFit: 'contain' }}
                    />
                  </div>
                )}
              </div>
            </div>

            <input
              type="hidden"
              name="image"
              value={imageUrl || ''}
            />
          </>
        )
      }
    </CldUploadWidget>
  )
}