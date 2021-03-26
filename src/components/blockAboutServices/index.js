import React from "react";
import iconCamera from "../../image/icon/videoCamera.svg";
import iconCrop from "../../image/icon/crop.svg";
import iconImgGallery from "../../image/icon/imageGallery.svg";
import { PostBlockServicePage } from "../common/postBlockServisePage";

const blockServiceList = [
    {
        src: iconCamera,
        title: "Photography",
        content: "Lesser for cake or first face sea for let give also may have moved heir beginning you fow great his air very curious us seas",
    },
    {
        src: iconImgGallery,
        title: "Video Editing",
        content: "Lesser for cake or first face sea for let give also may have moved heir beginning you fow great his air very curious us seas",
    },
    {
        src: iconCrop,
        title: "Image processing",
        content: "Lesser for cake or first face sea for let give also may have moved heir beginning you fow great his air very curious us seas",
    }
];

export const BlockAboutServices = () => {
   return(
       <section className="py-10 md:mx-auto pb-sm w-full max-w-cc">
           <div className="flex flex-nowrap flex-col justify-between p-2 2xl:flex-row xl:flex-row lg:flex-row md:flex-row">
               {
                   blockServiceList.map((post,index) => {
                     return(
                         <PostBlockServicePage key={index} src={post.src} title={post.title} content={post.content}/>
                     )
                   })
               }
           </div>
       </section>
   )
};
