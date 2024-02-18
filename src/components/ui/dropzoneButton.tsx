"use client"

import React, { useState, useCallback, useEffect } from "react";
import { useDropzone } from "@uploadthing/react";
import { generateClientDropzoneAccept } from "uploadthing/client";
import { ChevronRightIcon, ChevronLeftIcon, ArrowLeftIcon, ReloadIcon} from "@radix-ui/react-icons"
import { Button, buttonVariants  } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { useUploadThing , UploadDropzone} from "@/utils/uploadthing";
import { User } from '@clerk/nextjs/server';


export function DropzoneButton({user}: {user: User | null}) {
  const [url, setUrl] = useState<string>("");

  // const { startUpload, permittedFileInfo, isUploading } = useUploadThing(
  //   "imageUploader",
  //   {
  //     onClientUploadComplete: (res) => {
  //       console.log("client upload complete")
  //       console.log(res)

  //       // set the file to the uploaded file
  //       setUrl(res[0].url);
  //     },
  //     onUploadError: () => {
  //       console.log("upload error");
  //     },
  //     onUploadBegin: () => {
  //       console.log("upload begin");
  //     },
  //   },
  // );
  
  // const onDrop = useCallback((acceptedFiles: File[]) => {
  //   // change the file name to the user's name
  //   if (!user) return;
  //   console.log(user.id)
  //   const file = acceptedFiles[0];
  //   const newName = `hello-${file.name}`;

  //   const newFile = new File([file], newName, { type: file.type });

  //   startUpload([newFile]);

  // }, []);

  // const fileTypes = permittedFileInfo?.config
  // ? Object.keys(permittedFileInfo?.config)
  // : [];


  // const { getRootProps, getInputProps } = useDropzone({
  //   onDrop,
  //   accept: fileTypes ? generateClientDropzoneAccept(fileTypes) : undefined,
  // });

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {/*put the uploadzone into a card */}
      <Card>
        <CardHeader>
          <CardTitle>Upload Image</CardTitle>
        </CardHeader>
        <CardContent>
          <UploadDropzone
            endpoint="imageUploader"
            onBeforeUploadBegin={(file) => {
              console.log("before upload begin")

              // // rename the file to the user's name
              if (!user) return file;

               const newName = `${user.id}-${file[0].name}`;

               const newFile = new File([file[0]], newName, { type: file[0].type });

               return [newFile];
            }}
            content={{
              label: "Upload an image to your profile",
            }}
            onClientUploadComplete={(res) => {
              console.log("client upload complete")
              console.log(res)

              // set the file to the uploaded file
              setUrl(res[0].url);
            
            }}
            onUploadError={() => {
              console.log("upload error");
            }}
            onUploadBegin={() => {
              console.log("upload begin");
            }}
          />
        </CardContent>
      </Card>


        {/*use the uploaded file to display the image*/}
      {url && (
        <div>
          <img src={url} alt="preview" />
        </div>
      )}

    </div>
  );
  // give a nice upload button

}